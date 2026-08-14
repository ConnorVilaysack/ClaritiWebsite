import { NextRequest, NextResponse } from "next/server";
import {
  DERMATOSCOPE_PREORDER,
  formatUsd,
} from "@/lib/preorder-config";
import { getPreorderInventory } from "@/lib/preorder-inventory";
import { getSiteOrigin, getStripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const inventory = await getPreorderInventory();

    if (inventory.isSoldOut) {
      return NextResponse.json(
        { error: "This pre-order batch is sold out." },
        { status: 409 }
      );
    }

    const stripe = getStripe();
    const origin = getSiteOrigin();
    const body = (await request.json().catch(() => ({}))) as {
      email?: string;
      userId?: string;
    };

    const normalizedUserId = body.userId?.trim().toLowerCase();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: body.email,
      client_reference_id: normalizedUserId,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: DERMATOSCOPE_PREORDER.currency,
            unit_amount: DERMATOSCOPE_PREORDER.preorderPriceCents,
            product_data: {
              name: `${DERMATOSCOPE_PREORDER.name} — Founding Pre-Order`,
              description: `${formatUsd(DERMATOSCOPE_PREORDER.preorderPriceCents)} founding member price (retail ${formatUsd(DERMATOSCOPE_PREORDER.msrpCents)}). ${DERMATOSCOPE_PREORDER.estimatedShipping}.`,
              images: [`${origin}${DERMATOSCOPE_PREORDER.imagePath}`],
            },
          },
        },
      ],
      metadata: {
        product: DERMATOSCOPE_PREORDER.productId,
        batch: DERMATOSCOPE_PREORDER.batchId,
        user_id: normalizedUserId ?? "",
        grant_premium: "true",
      },
      success_url: `${origin}/preorder/dermatoscope/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/preorder/dermatoscope/cancelled`,
      integration_identifier: DERMATOSCOPE_PREORDER.integrationIdentifier,
      allow_promotion_codes: false,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Unable to start checkout." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Checkout is unavailable. Please try again shortly." },
      { status: 500 }
    );
  }
}
