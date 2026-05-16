"use client";

import { X, Check } from "lucide-react";
import FadeIn from "./FadeIn";

const oldWay = [
  "Guessing which products might work",
  "No way to track what's actually helping",
  "Spending hundreds on dermatologist visits",
  "Relying on generic advice from influencers",
  "Switching products constantly with no data",
];

const newWay = [
  "AI analysis tells you exactly what's going on",
  "Photo tracking shows real progress over time",
  "Personalized insights for $1.99/month",
  "Science-backed recommendations for your skin",
  "Data-driven routine building that works",
];

export default function OldVsNew() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            A New Approach to <span className="text-primary">Skincare</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Stop guessing. Start tracking. Clariti replaces the old trial-and-error approach with data-driven skincare.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeIn delay={100}>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 h-full">
              <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-500 text-sm font-medium rounded-full mb-6">
                The Old Way
              </div>
              <ul className="space-y-4">
                {oldWay.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={14} className="text-red-400" />
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 border border-primary-200 h-full">
              <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-dark text-sm font-medium rounded-full mb-6">
                The Clariti Way
              </div>
              <ul className="space-y-4">
                {newWay.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
