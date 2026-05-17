"use client";

import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-[#5DADE2] via-primary to-[#87CEEB] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-[10%] w-24 h-24 bg-accent-pink/20 rounded-full blur-2xl" />
        <div className="absolute top-20 right-[15%] w-16 h-16 bg-accent-brown/15 rounded-full blur-2xl" />
        <div className="absolute bottom-16 left-[20%] w-20 h-20 bg-accent-yellow/20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-[10%] w-18 h-18 bg-accent-lime/15 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Skin Health Journey Today
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Join thousands of people who are taking control of their skincare
            with data, not guesswork. Download Clariti today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/au/app/clariti/id6737494318"
              className="group px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition flex items-center gap-2 text-lg"
            >
              Download on the App Store
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 mt-10 text-white/50 text-sm">
            <span>Easy to use</span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>Private &amp; secure</span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>iOS available now</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
