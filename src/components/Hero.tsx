"use client";

import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const benefits = [
  { num: "01", text: "See real skin transformation progress" },
  { num: "02", text: "Build confidence with data-driven skincare" },
  { num: "03", text: "Understand what actually works for your skin" },
  { num: "04", text: "Save money on products that don't deliver" },
  { num: "05", text: "Take control of your skincare journey" },
];

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden">
      {/* Sky blue gradient background matching logo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB]/20 via-white to-[#B0D9F5]/10" />

      {/* Decorative splatter dots matching logo colors */}
      <div className="absolute top-24 left-[5%] w-20 h-20 bg-accent-pink/30 rounded-full blur-xl" />
      <div className="absolute top-16 right-[10%] w-14 h-14 bg-accent-brown/20 rounded-full blur-xl" />
      <div className="absolute top-44 left-[45%] w-12 h-12 bg-accent-peach/25 rounded-full blur-xl" />
      <div className="absolute bottom-48 left-[8%] w-16 h-16 bg-accent-yellow/25 rounded-full blur-xl" />
      <div className="absolute bottom-32 right-[6%] w-14 h-14 bg-accent-lime/25 rounded-full blur-xl" />

      {/* Small solid dots (like logo splatters) */}
      <div className="hidden md:block absolute top-36 left-[12%] w-3 h-3 bg-accent-pink/50 rounded-full" />
      <div className="hidden md:block absolute top-28 right-[15%] w-2 h-2 bg-accent-brown/40 rounded-full" />
      <div className="hidden md:block absolute top-56 right-[25%] w-2.5 h-2.5 bg-accent-peach/50 rounded-full" />
      <div className="hidden md:block absolute bottom-60 left-[20%] w-3 h-3 bg-accent-yellow/50 rounded-full" />
      <div className="hidden md:block absolute bottom-44 right-[18%] w-2 h-2 bg-accent-lime/50 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-primary-100 to-[#87CEEB]/30 text-primary-dark text-sm font-medium rounded-full mb-6 border border-primary-200/50">
            <img src="/images/Clariti Logo.png" alt="" className="w-5 h-5 rounded" />
            Your Personal Skincare Companion
          </span>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
            Clear Skin,{" "}
            <span className="bg-gradient-to-r from-primary to-[#60A5FA] bg-clip-text text-transparent">Without the Guesswork</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Post a reel using Clariti that gets over 2,000 views and tag{" "}
            <a href="https://www.instagram.com/connor1_vilaysack" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">@connor1_vilaysack</a>{" "}
            on Instagram. I&apos;ll give you Clariti for free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/au/app/clariti/id6737494318"
              className="group px-8 py-4 bg-gradient-to-r from-primary to-[#60A5FA] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center gap-2 text-lg"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="px-8 py-4 border border-slate-200 text-slate-700 font-medium rounded-full hover:border-primary hover:text-primary transition text-lg"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Bottom: Benefits list + Before/After sliders */}
        <div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/60 p-6 md:p-10 shadow-xl shadow-primary/5">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left: Benefits list with colored dots */}
              <div className="w-full lg:w-[340px] flex-shrink-0">
                <div className="space-y-0">
                  {benefits.map((b) => (
                    <div
                      key={b.num}
                      className="flex items-center gap-4 py-5 border-b border-slate-100 last:border-b-0"
                    >
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-white/80">{b.num}</span>
                      </div>
                      <span className="text-base font-medium text-slate-800">{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Two before/after sliders */}
              <div className="w-full lg:flex-1 flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="w-full max-w-[300px]">
                  <BeforeAfterSlider
                    beforeImage="/images/before-1.png"
                    afterImage="/images/after-1.png"
                    beforeLabel="BEFORE"
                    afterLabel="AFTER"
                  />
                </div>
                <div className="hidden lg:block w-full max-w-[300px]">
                  <BeforeAfterSlider
                    beforeImage="/images/before-2.png"
                    afterImage="/images/after-2.png"
                    beforeLabel="BEFORE"
                    afterLabel="AFTER"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
