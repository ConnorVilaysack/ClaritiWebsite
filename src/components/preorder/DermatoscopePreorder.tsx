"use client";

import Image from "next/image";
import {
  ArrowLeft,
  Battery,
  Camera,
  Check,
  Magnet,
  Microscope,
  Shield,
  Sparkles,
  Sun,
  Truck,
  Zap,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import InventoryBar from "@/components/preorder/InventoryBar";
import PreorderCheckoutButton from "@/components/preorder/PreorderCheckoutButton";
import ProductGallery from "@/components/preorder/ProductGallery";
import ClaritiAppShowcase from "@/components/preorder/ClaritiAppShowcase";
import {
  DERMATOSCOPE_PREORDER,
  formatUsd,
  getDiscountPercent,
  getSavingsCents,
} from "@/lib/preorder-config";
import type { PreorderInventory } from "@/lib/preorder-inventory";

const features = [
  {
    icon: Microscope,
    title: "10× Clinical Magnification",
    description:
      "Premium 4-element optics with 25mm field of view — see subsurface structures your naked eye misses.",
  },
  {
    icon: Sun,
    title: "Triple Light Modes",
    description:
      "Polarized, non-polarized, and 365nm UV (Wood's lamp) for vascular, pigment, and fluorescence imaging.",
  },
  {
    icon: Magnet,
    title: "Magnetic Phone Adapter",
    description:
      "Snap onto any smartphone in seconds. Capture dermoscopy photos and track them in Clariti.",
  },
  {
    icon: Camera,
    title: "Built for Clariti",
    description:
      "Higher-resolution scans mean richer AI analysis. Pair clinical imaging with your skin health timeline.",
  },
  {
    icon: Battery,
    title: "90 Min Battery · USB-C",
    description:
      "300mAh lithium-ion, rechargeable via USB-C. All-metal housing, 75g — pocket-sized pro gear.",
  },
  {
    icon: Shield,
    title: "2-Year Warranty",
    description:
      "CE certified dermatoscope from IBOOLO, the same manufacturer trusted by clinicians worldwide.",
  },
];

const inTheBox = [
  "DE-500 Dermatoscope",
  "Magnetic Phone Adapter",
  "USB-C Charging Cable",
  "Protective Carrying Case",
  "Cleaning Cloth",
  "User Manual",
];

const faqs = [
  {
    q: "When will my order ship?",
    a: "Founding pre-orders ship within 4–6 weeks after this batch closes or sells out. You'll receive email updates with tracking.",
  },
  {
    q: "Why is this discounted?",
    a: "We're testing demand with Clariti users before placing a bulk order. Founding members lock in $299 (retail $399) — save $100.",
  },
  {
    q: "Is this a medical device?",
    a: "The DE-500 is a dermatoscope for skin imaging. Clariti is a cosmetic journaling tool. Neither replaces professional medical diagnosis.",
  },
  {
    q: "What if I change my mind?",
    a: "Full refund anytime before your unit ships. After shipping, standard 30-day return policy applies.",
  },
  {
    q: "Does it work with my phone?",
    a: "Yes — the magnetic adapter fits 99% of smartphones and tablets, iOS and Android.",
  },
];

function ClaritiBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB]/20 via-white to-[#B0D9F5]/10" />
      <div className="absolute top-24 left-[5%] w-20 h-20 bg-accent-pink/30 rounded-full blur-xl" />
      <div className="absolute top-16 right-[10%] w-14 h-14 bg-accent-brown/20 rounded-full blur-xl" />
      <div className="absolute top-44 left-[45%] w-12 h-12 bg-accent-peach/25 rounded-full blur-xl" />
      <div className="absolute bottom-48 left-[8%] w-16 h-16 bg-accent-yellow/25 rounded-full blur-xl" />
      <div className="absolute bottom-32 right-[6%] w-14 h-14 bg-accent-lime/25 rounded-full blur-xl" />
      <div className="hidden md:block absolute top-36 left-[12%] w-3 h-3 bg-accent-pink/50 rounded-full" />
      <div className="hidden md:block absolute top-28 right-[15%] w-2 h-2 bg-accent-brown/40 rounded-full" />
      <div className="hidden md:block absolute top-56 right-[25%] w-2.5 h-2.5 bg-accent-peach/50 rounded-full" />
    </>
  );
}

type DermatoscopePreorderProps = {
  inventory: PreorderInventory;
  checkoutEmail?: string;
  checkoutUserId?: string;
};

export default function DermatoscopePreorder({
  inventory,
  checkoutEmail,
  checkoutUserId,
}: DermatoscopePreorderProps) {
  const savings = getSavingsCents();
  const discount = getDiscountPercent();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition"
          >
            <ArrowLeft size={16} />
            Clariti
          </a>
          <div className="flex items-center gap-2">
            <img
              src="/images/Clariti Logo.png"
              alt="Clariti"
              className="w-7 h-7 rounded-lg"
            />
            <span className="font-bold text-primary">Clariti × IBOOLO</span>
          </div>
          <a
            href="#preorder"
            className="hidden sm:inline-flex px-4 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition"
          >
            Pre-Order
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <ClaritiBackground />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-primary-100 to-[#87CEEB]/30 text-primary-dark text-sm font-medium rounded-full mb-6 border border-primary-200/50">
                <img
                  src="/images/Clariti Logo.png"
                  alt=""
                  className="w-5 h-5 rounded"
                />
                Founding Member Pre-Order · {discount}% Off
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-5 leading-[1.1]">
                See Your Skin{" "}
                <span className="bg-gradient-to-r from-primary to-[#60A5FA] bg-clip-text text-transparent">
                  Like Never Before
                </span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Clip the IBOOLO DE-500 onto your iPhone, capture
                clinical-grade dermoscopy photos, and track them in Clariti —
                polarized, UV, and 10× magnification in one device.
              </p>

              <div className="mb-8">
                <InventoryBar initial={inventory} />
              </div>

              <div id="preorder" className="scroll-mt-28">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/60 p-6 md:p-8 shadow-xl shadow-primary/5">
                  <div className="flex flex-wrap items-end gap-3 mb-1">
                    <span className="text-4xl md:text-5xl font-bold text-slate-900">
                      {formatUsd(DERMATOSCOPE_PREORDER.preorderPriceCents)}
                    </span>
                    <span className="text-xl text-slate-400 line-through mb-1">
                      {formatUsd(DERMATOSCOPE_PREORDER.msrpCents)}
                    </span>
                    <span className="mb-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100">
                      Save {formatUsd(savings)}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-6">
                    One-time payment · Free worldwide shipping ·{" "}
                    {DERMATOSCOPE_PREORDER.estimatedShipping.toLowerCase()}
                  </p>

                  <PreorderCheckoutButton
                    disabled={inventory.isSoldOut}
                    email={checkoutEmail}
                    userId={checkoutUserId}
                    label={
                      inventory.isSoldOut
                        ? "Sold Out"
                        : `Pre-Order Now — ${formatUsd(DERMATOSCOPE_PREORDER.preorderPriceCents)}`
                    }
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Truck size={14} className="text-primary" />
                  Free shipping
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield size={14} className="text-primary" />
                  2-year warranty
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap size={14} className="text-primary" />
                  Full refund before ship
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-[#87CEEB]/20 to-accent-pink/10 rounded-[2rem] blur-2xl" />
                <div className="relative bg-white/70 backdrop-blur-sm rounded-[2rem] border border-slate-200/60 shadow-xl shadow-primary/10 p-6 md:p-10">
                  <Image
                    src={DERMATOSCOPE_PREORDER.heroImagePath}
                    alt="DE-500 dermatoscope attached to iPhone"
                    width={560}
                    height={560}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                <div className="absolute -bottom-3 left-4 md:left-0 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-slate-100">
                  <p className="text-[10px] uppercase tracking-wide text-slate-400 font-medium">
                    Retail
                  </p>
                  <p className="text-base font-bold text-slate-400 line-through">
                    {formatUsd(DERMATOSCOPE_PREORDER.msrpCents)}
                  </p>
                </div>
                <div className="absolute -top-3 right-4 md:right-0 bg-gradient-to-r from-primary to-[#60A5FA] rounded-2xl shadow-lg px-4 py-2.5 text-white">
                  <p className="text-[10px] uppercase tracking-wide opacity-90 font-medium">
                    Your price
                  </p>
                  <p className="text-xl font-bold">
                    {formatUsd(DERMATOSCOPE_PREORDER.preorderPriceCents)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery slideshow */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary uppercase tracking-wider">
                <Sparkles size={14} />
                Product Gallery
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-3">
                See It In Action
              </h2>
              <p className="text-lg text-slate-600">
                From unboxing to clinical captures — everything the DE-500 can
                do with your phone.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <ProductGallery slides={DERMATOSCOPE_PREORDER.gallery} />
          </FadeIn>
        </div>
      </section>

      <ClaritiAppShowcase />

      {/* Clariti integration */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary-50/40 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Clariti Exclusive
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
                Upgrade Every Scan in Clariti
              </h2>
              <p className="text-lg text-slate-600">
                Your phone camera can only see so much. The DE-500 reveals
                vascular patterns, pigment networks, and subsurface detail that
                supercharge Clariti&apos;s AI analysis.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Attach & Capture",
                text: "Magnetic adapter snaps your dermatoscope to any phone. One tap to photograph.",
              },
              {
                step: "02",
                title: "Import to Clariti",
                text: "Save dermoscopy images to your Clariti timeline alongside your regular scans.",
              },
              {
                step: "03",
                title: "Track Progress",
                text: "Compare polarized vs. non-polarized views over weeks. See what actually changes.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-slate-200/80 p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Pro Features. Pocket Size.
              </h2>
              <p className="text-lg text-slate-600">
                The same IBOOLO optics trusted by dermatologists — now built for
                your smartphone.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 80}>
                <div className="group p-6 rounded-2xl border border-slate-200/80 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all h-full bg-white">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <feature.icon
                      size={22}
                      className="text-primary group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What's in the box + specs */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                What&apos;s in the Box
              </h2>
              <ul className="space-y-3">
                {inTheBox.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={DERMATOSCOPE_PREORDER.manufacturerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm text-primary hover:underline"
              >
                View full specs on IBOOLO →
              </a>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Key Specs
                </h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  {[
                    ["Magnification", "10×"],
                    ["Field of View", "25mm"],
                    ["LED System", "16 LEDs (pol / non-pol / UV)"],
                    ["UV Wavelength", "365nm"],
                    ["Battery", "300mAh · 90 min"],
                    ["Charging", "USB-C"],
                    ["Weight", "75.5g"],
                    ["Housing", "All-metal aluminum"],
                  ].map(([label, value]) => (
                    <div key={label} className="contents">
                      <dt className="text-slate-500">{label}</dt>
                      <dd className="text-slate-900 font-medium text-right">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Pre-Order FAQ
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 60}>
                <details className="group bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-medium text-slate-900 list-none">
                    {faq.q}
                    <span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <ClaritiBackground />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Lock In Founding Member Pricing
            </h2>
            <p className="text-slate-600 mb-2">
              {formatUsd(DERMATOSCOPE_PREORDER.preorderPriceCents)} today —{" "}
              <span className="line-through text-slate-400">
                {formatUsd(DERMATOSCOPE_PREORDER.msrpCents)} retail
              </span>
            </p>
            <p className="text-sm text-slate-500 mb-8">
              Only {inventory.remainingUnits} of {inventory.totalUnits} units
              remaining in this batch
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/60 p-6 shadow-xl shadow-primary/5 max-w-md mx-auto">
              <PreorderCheckoutButton
                disabled={inventory.isSoldOut}
                email={checkoutEmail}
                userId={checkoutUserId}
                label={
                  inventory.isSoldOut
                    ? "Sold Out"
                    : `Secure My Pre-Order — ${formatUsd(DERMATOSCOPE_PREORDER.preorderPriceCents)}`
                }
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {!inventory.isSoldOut && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <p className="text-lg font-bold text-slate-900">
                {formatUsd(DERMATOSCOPE_PREORDER.preorderPriceCents)}
              </p>
              <p className="text-xs text-slate-500 line-through">
                {formatUsd(DERMATOSCOPE_PREORDER.msrpCents)}
              </p>
            </div>
            <PreorderCheckoutButton
              label="Pre-Order"
              className="flex-1"
              email={checkoutEmail}
              userId={checkoutUserId}
            />
          </div>
        </div>
      )}

      <footer className="bg-slate-900 text-white py-12 pb-24 md:pb-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="/images/Clariti Logo.png"
              alt="Clariti"
              className="w-7 h-7 rounded-lg"
            />
            <span className="font-bold text-primary-light">Clariti</span>
          </div>
          <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            Clariti is a cosmetic journaling tool, not a medical device. The
            DE-500 dermatoscope is manufactured by{" "}
            <a
              href={DERMATOSCOPE_PREORDER.manufacturerUrl}
              className="text-slate-400 hover:text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              IBOOLO
            </a>
            . Pre-orders fulfilled by Clariti.
          </p>
          <p className="text-xs text-slate-600 mt-4">
            &copy; {new Date().getFullYear()} Clariti. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
