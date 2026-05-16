"use client";

import { Check } from "lucide-react";
import FadeIn from "./FadeIn";

const freeFeatures = [
  "Unlimited photo scans",
  "Skin health gallery",
  "Progress graphs",
  "Skin calendar",
  "Routine tracking",
];

const proFeatures = [
  "Everything in Free",
  "Clariti AI chat assistant",
  "Detailed skin reports",
  "Acne trend analysis",
  "UV index alerts",
  "Advanced insights & recommendations",
  "Priority support",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            Simple Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Start Free, Upgrade When Ready
          </h2>
          <p className="text-lg text-slate-500">
            Core features are free forever. Go Pro for the full experience.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 h-full flex flex-col">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Free</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold text-slate-900">$0</span>
                <span className="text-slate-400">/forever</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://apps.apple.com/au/app/clariti/id6737494318" className="block w-full text-center px-6 py-3 border border-slate-200 text-slate-700 font-medium rounded-full hover:border-primary hover:text-primary transition">
                Get Started
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-xs font-medium rounded-full">
                Most Popular
              </div>
              <h3 className="text-lg font-semibold mb-2">Pro</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold">$1.99</span>
                <span className="text-white/60">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/90">
                    <Check size={16} className="text-white flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://apps.apple.com/au/app/clariti/id6737494318" className="block w-full text-center px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition">
                Start Free Trial
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
