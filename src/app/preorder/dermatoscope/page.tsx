import type { Metadata } from "next";
import DermatoscopePreorder from "@/components/preorder/DermatoscopePreorder";
import { DERMATOSCOPE_PREORDER, formatUsd } from "@/lib/preorder-config";
import { getPreorderInventory } from "@/lib/preorder-inventory";

export const metadata: Metadata = {
  title: `Pre-Order ${DERMATOSCOPE_PREORDER.shortName} — Clariti`,
  description: `Founding member pre-order: ${formatUsd(DERMATOSCOPE_PREORDER.preorderPriceCents)} (${formatUsd(DERMATOSCOPE_PREORDER.msrpCents)} retail). Pro-grade dermatoscope for your phone, paired with Clariti.`,
  openGraph: {
    title: `Pre-Order the DE-500 Dermatoscope — Clariti`,
    description: `Limited batch of ${DERMATOSCOPE_PREORDER.totalUnits} units. Save $100 with founding member pricing.`,
    images: [DERMATOSCOPE_PREORDER.imagePath],
  },
};

export const dynamic = "force-dynamic";

export default async function DermatoscopePreorderPage() {
  const inventory = await getPreorderInventory();

  return <DermatoscopePreorder inventory={inventory} />;
}
