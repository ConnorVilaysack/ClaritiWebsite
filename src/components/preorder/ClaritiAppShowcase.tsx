"use client";

import Image from "next/image";
import { BarChart3, MessageCircle, ScanLine } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const appScreens = [
  {
    image: "/images/preorder/clariti-dashboard.png",
    alt: "Clariti dashboard showing skin age and acne trends",
    icon: BarChart3,
    title: "Track Skin Trends",
    description:
      "Dermoscopy scans feed into your dashboard — see predicted skin age, acne profiles, and appearance scores over time.",
  },
  {
    image: "/images/preorder/clariti-product-scan.png",
    alt: "Clariti product ingredient scanner",
    icon: ScanLine,
    title: "Scan Your Products",
    description:
      "Already using Clariti to analyse skincare? Pair deeper skin imaging with ingredient insights to build a smarter routine.",
  },
  {
    image: "/images/preorder/clariti-ai-chat.png",
    alt: "Clariti AI chat grounded in your scan data",
    icon: MessageCircle,
    title: "AI Grounded in Your Data",
    description:
      "Ask Clariti about flare-ups, progress, or routines — answers based on your real scans, not generic advice.",
  },
] as const;

export default function ClaritiAppShowcase() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-primary-50/30 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-primary-100 to-[#87CEEB]/30 text-primary-dark text-sm font-medium rounded-full mb-5 border border-primary-200/50">
              <img
                src="/images/Clariti Logo.png"
                alt=""
                className="w-5 h-5 rounded"
              />
              Inside the Clariti App
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Better Scans, Smarter Insights
            </h2>
            <p className="text-lg text-slate-600">
              The DE-500 gives Clariti richer images to work with — so every
              feature in the app gets more accurate.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {appScreens.map((screen, i) => (
            <FadeIn key={screen.title} delay={i * 120}>
              <div className="group flex flex-col items-center text-center">
                <div className="relative mb-6 w-full max-w-[260px] mx-auto">
                  <div className="absolute -inset-3 bg-gradient-to-b from-primary/10 to-[#87CEEB]/20 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-primary/10 border border-slate-200/60 bg-white">
                    <Image
                      src={screen.image}
                      alt={screen.alt}
                      width={390}
                      height={844}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 80vw, 260px"
                    />
                  </div>
                </div>

                <div className="w-11 h-11 rounded-2xl bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                  <screen.icon
                    size={20}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {screen.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                  {screen.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/au/app/clariti/id6737494318"
              className="px-8 py-3.5 bg-gradient-to-r from-primary to-[#60A5FA] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all text-sm"
            >
              Download Clariti Free
            </a>
            <p className="text-sm text-slate-500">
              Already a user? Pre-order the DE-500 to upgrade your scans.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
