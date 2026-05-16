"use client";

import { Star } from "lucide-react";
import FadeIn from "./FadeIn";

const testimonials = [
  { name: "Sarah M.", text: "I finally understand what's actually working in my skincare routine. The tracking is a game-changer.", rating: 5, avatar: "https://i.pravatar.cc/80?img=1" },
  { name: "James K.", text: "The AI analysis is surprisingly accurate. I can see my progress week over week and it keeps me motivated.", rating: 5, avatar: "https://i.pravatar.cc/80?img=12" },
  { name: "Priya L.", text: "Love that it's not trying to sell me products. Just honest tracking and insights. Totally worth it.", rating: 5, avatar: "https://i.pravatar.cc/80?img=5" },
  { name: "Alex R.", text: "The routine builder helped me simplify my routine from 10 steps to 4. My skin has never looked better.", rating: 5, avatar: "https://i.pravatar.cc/80?img=8" },
  { name: "Maria C.", text: "Being able to correlate my sleep and water intake with my skin quality has been eye-opening.", rating: 5, avatar: "https://i.pravatar.cc/80?img=9" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Loved by Thousands
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 50}>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover" />
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
