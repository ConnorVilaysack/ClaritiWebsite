import { DERMATOSCOPE_PREORDER } from "@/lib/preorder-config";
import { getStripe } from "@/lib/stripe";

export type PreorderInventory = {
  totalUnits: number;
  soldUnits: number;
  remainingUnits: number;
  isSoldOut: boolean;
};

async function countCompletedPreorders(): Promise<number> {
  const stripe = getStripe();
  let sold = 0;
  let startingAfter: string | undefined;

  do {
    const page = await stripe.checkout.sessions.list({
      limit: 100,
      starting_after: startingAfter,
      status: "complete",
    });

    sold += page.data.filter(
      (session) =>
        session.metadata?.product === DERMATOSCOPE_PREORDER.productId &&
        session.metadata?.batch === DERMATOSCOPE_PREORDER.batchId
    ).length;

    if (!page.has_more) break;
    startingAfter = page.data.at(-1)?.id;
  } while (startingAfter);

  return sold;
}

export async function getPreorderInventory(): Promise<PreorderInventory> {
  let realSoldUnits = 0;

  if (process.env.STRIPE_SECRET_KEY) {
    try {
      realSoldUnits = await countCompletedPreorders();
    } catch {
      realSoldUnits = 0;
    }
  }

  const maxRealSales =
    DERMATOSCOPE_PREORDER.totalUnits - DERMATOSCOPE_PREORDER.seedSoldUnits;
  const soldUnits = Math.min(
    DERMATOSCOPE_PREORDER.totalUnits,
    DERMATOSCOPE_PREORDER.seedSoldUnits + realSoldUnits
  );
  const remainingUnits = Math.max(
    0,
    DERMATOSCOPE_PREORDER.totalUnits - soldUnits
  );

  return {
    totalUnits: DERMATOSCOPE_PREORDER.totalUnits,
    soldUnits,
    remainingUnits,
    isSoldOut: realSoldUnits >= maxRealSales,
  };
}
