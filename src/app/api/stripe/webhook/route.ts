import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import {
  grantClaritiscopePremium,
  isClaritiscopePreorderSession,
} from "@/lib/grant-premium";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  if (session.payment_status !== "paid") {
    return NextResponse.json({ received: true, skipped: "unpaid" });
  }

  if (!isClaritiscopePreorderSession(session)) {
    return NextResponse.json({ received: true, skipped: "not_preorder" });
  }

  const userId =
    session.client_reference_id?.trim() ||
    session.metadata?.user_id?.trim() ||
    null;
  const email =
    session.customer_details?.email?.trim() ||
    session.customer_email?.trim() ||
    null;

  const result = await grantClaritiscopePremium({ userId, email });

  if (!result.ok) {
    console.error("Premium grant failed for checkout session", session.id, result);
    return NextResponse.json(
      { received: true, premiumGranted: false, reason: result.reason },
      { status: 202 }
    );
  }

  console.info("Premium granted for Claritiscope pre-order", {
    sessionId: session.id,
    userId: result.userId,
    method: result.method,
  });

  return NextResponse.json({
    received: true,
    premiumGranted: true,
    userId: result.userId,
    method: result.method,
  });
}

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not configured");
    return NextResponse.json(
      { error: "Webhook is not configured" },
      { status: 500 }
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  const payload = await request.text();
  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        return await handleCheckoutCompleted(
          event.data.object as Stripe.Checkout.Session
        );
      default:
        return NextResponse.json({ received: true, ignored: event.type });
    }
  } catch (error) {
    console.error("Stripe webhook handler error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
