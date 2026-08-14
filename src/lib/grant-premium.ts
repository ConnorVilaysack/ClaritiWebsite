import type Stripe from "stripe";
import { DERMATOSCOPE_PREORDER } from "@/lib/preorder-config";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

type GrantPremiumResult =
  | { ok: true; userId: string; method: "user_id" | "email" }
  | { ok: false; reason: string };

function normalizeUserId(userId: string): string {
  return userId.trim().toLowerCase();
}

async function findUserIdByEmail(email: string): Promise<string | null> {
  const supabase = getSupabaseAdmin();
  const normalizedEmail = email.trim().toLowerCase();
  let page = 1;
  const perPage = 200;

  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage });
    if (error) {
      throw error;
    }

    const match = data.users.find(
      (user) => user.email?.trim().toLowerCase() === normalizedEmail
    );
    if (match?.id) {
      return normalizeUserId(match.id);
    }

    if (data.users.length < perPage) {
      break;
    }
    page += 1;
  }

  return null;
}

async function upsertPremiumStatus(userId: string): Promise<void> {
  const supabase = getSupabaseAdmin();
  const now = new Date().toISOString();
  const normalizedUserId = normalizeUserId(userId);

  const { error: updateError } = await supabase
    .from("user_metadata")
    .update({
      is_premium: true,
      updated_at: now,
    })
    .eq("id", normalizedUserId);

  if (!updateError) {
    return;
  }

  const { error: insertError } = await supabase.from("user_metadata").insert({
    id: normalizedUserId,
    is_premium: true,
    has_completed_onboarding: false,
    updated_at: now,
  });

  if (insertError) {
    throw insertError;
  }
}

export function isClaritiscopePreorderSession(
  session: Stripe.Checkout.Session
): boolean {
  const metadataProduct = session.metadata?.product;
  if (metadataProduct === DERMATOSCOPE_PREORDER.productId) {
    return true;
  }

  if (session.amount_total === DERMATOSCOPE_PREORDER.preorderPriceCents) {
    return true;
  }

  return false;
}

export async function grantClaritiscopePremium(options: {
  userId?: string | null;
  email?: string | null;
}): Promise<GrantPremiumResult> {
  const directUserId = options.userId?.trim();
  if (directUserId) {
    const userId = normalizeUserId(directUserId);
    await upsertPremiumStatus(userId);
    return { ok: true, userId, method: "user_id" };
  }

  const email = options.email?.trim();
  if (!email) {
    return { ok: false, reason: "missing_user_reference" };
  }

  const userId = await findUserIdByEmail(email);
  if (!userId) {
    return { ok: false, reason: "user_not_found_for_email" };
  }

  await upsertPremiumStatus(userId);
  return { ok: true, userId, method: "email" };
}
