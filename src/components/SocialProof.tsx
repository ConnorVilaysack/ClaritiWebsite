"use client";

import { Users, Star, Camera, Shield } from "lucide-react";
import FadeIn from "./FadeIn";

const stats = [
  { icon: Users, value: "10,000+", label: "Active Users" },
  { icon: Camera, value: "500K+", label: "Photos Analyzed" },
  { icon: Star, value: "4.8", label: "App Store Rating" },
  { icon: Shield, value: "100%", label: "Private & Secure" },
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <s.icon className="text-primary" size={22} />
                </div>
                <p className="text-3xl font-bold text-slate-900">{s.value}</p>
                <p className="text-sm text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
