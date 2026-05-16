"use client";

import { useState, useEffect } from "react";
import FadeIn from "./FadeIn";

const slides = [
  {
    title: "AI Skin Analysis",
    description:
      "Snap a photo and get a comprehensive health score powered by machine learning. Track acne types, inflammation, oiliness, and more.",
    image: "/images/screens/iMockup - iPhone 15 Pro Max (22).png",
  },
  {
    title: "Scan Face & Products",
    description:
      "Scan your face for a full skin breakdown, or scan any skincare product to see if it's right for you — with ingredient analysis and a compatibility score.",
    image: "/images/screens/iMockup - iPhone 15 Pro Max (23).png",
  },
  {
    title: "Product Analysis",
    description:
      "Get a detailed breakdown of any skincare product. See what it's for, why it may help, and what to watch out for — all scored out of 100.",
    image: "/images/screens/iMockup - iPhone 15 Pro Max (25).png",
  },
  {
    title: "3D Face Mapping",
    description:
      "Visualize inflammation and skin concerns on an interactive 3D face model. Scrub through days to see how your skin changes over time.",
    image: "/images/screens/iMockup - iPhone 15 Pro Max (29).png",
  },
  {
    title: "Acne Type Profiling",
    description:
      "See a radar chart breakdown of your acne types — blackheads, whiteheads, papules, dark spots, and more. Compare across time windows.",
    image: "/images/screens/iMockup - iPhone 15 Pro Max (30).png",
  },
  {
    title: "Deep Insights & Trends",
    description:
      "Get AI-generated insights based on your recent scans. See inflammation and oiliness trends over time, and understand what's improving.",
    image: "/images/screens/iMockup - iPhone 15 Pro Max (31).png",
  },
];

export default function Features() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            Everything You Need
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Powerful Features, <span className="text-primary">Simple Design</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Everything you need to understand, track, and improve your skin — all in one app.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Phone mockup */}
            <div className="flex-1 flex justify-center">
              <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  className="h-full w-auto object-contain drop-shadow-2xl transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Text + dots */}
            <div className="flex-1 max-w-lg">
              <div className="min-h-[160px]">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 transition-all duration-300">
                  {slides[current].title}
                </h3>
                <p className="text-lg text-slate-500 leading-relaxed transition-all duration-300">
                  {slides[current].description}
                </p>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-8">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-primary"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
