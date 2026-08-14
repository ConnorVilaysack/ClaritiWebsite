export const DERMATOSCOPE_PREORDER = {
  productId: "de-500-dermatoscope-preorder",
  batchId: "founding-50",
  name: "IBOOLO DE-500 Dermatoscope",
  shortName: "DE-500 Dermatoscope",
  tagline: "Pro-grade skin imaging for your phone",
  description:
    "10× magnification dermatoscope with polarized, non-polarized, and 365nm UV light. Magnetic phone adapter — capture clinical-quality dermoscopy photos directly in Clariti.",
  msrpCents: 39900,
  preorderPriceCents: 29900,
  currency: "usd",
  totalUnits: 50,
  /** Display-only baseline to show early momentum. Real sales add on top. */
  seedSoldUnits: 31,
  heroImagePath: "/images/preorder/hero-phone.jpg",
  imagePath: "/images/preorder/hero-phone.jpg",
  gallery: [
    {
      src: "/images/preorder/slide-lifestyle.jpg",
      alt: "DE-500 dermatoscope attached to iPhone — side view",
      caption: "Magnetic clip-on — works with any phone",
    },
    {
      src: "/images/preorder/slide-detail.jpg",
      alt: "DE-500 on iPhone — camera alignment",
      caption: "Aligns perfectly with your camera",
    },
    {
      src: "/images/preorder/de-500-product.jpg",
      alt: "DE-500 dermatoscope standalone",
      caption: "Premium all-metal housing",
    },
    {
      src: "/images/preorder/slide-light-modes.jpg",
      alt: "DE-500 packaging and carrying case",
      caption: "Complete kit with carrying case",
    },
    {
      src: "/images/preorder/slide-capture.jpg",
      alt: "Dermoscopy skin capture result",
      caption: "Polarized imaging reveals subsurface detail",
    },
    {
      src: "/images/preorder/slide-skin.jpg",
      alt: "UV dermoscopy capture under blue light",
      caption: "365nm UV Wood's lamp mode",
    },
    {
      src: "/images/preorder/slide-in-use.jpg",
      alt: "Detailed dermoscopy photograph",
      caption: "Clinical-grade photos from your phone",
    },
  ],
  manufacturerUrl: "https://www.iboolo.com/product/de-500-dermatoscope/",
  estimatedShipping: "Ships within 4–6 weeks of pre-order close",
  integrationIdentifier: "clariti_de500_preorder_xk7m2pqr",
  stripePaymentLink:
    process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ??
    "https://buy.stripe.com/28EcN57iW4Ut0wf5NYdby04",
} as const;

export function formatUsd(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

export function getSavingsCents(): number {
  return DERMATOSCOPE_PREORDER.msrpCents - DERMATOSCOPE_PREORDER.preorderPriceCents;
}

export function getDiscountPercent(): number {
  return Math.round(
    (getSavingsCents() / DERMATOSCOPE_PREORDER.msrpCents) * 100
  );
}
