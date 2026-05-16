"use client";

import { Camera, Brain, LineChart, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  {
    num: "01",
    icon: Camera,
    title: "Take a Photo",
    description: "Snap a quick selfie using the in-app camera. Our AI needs just one photo to analyze your skin.",
  },
  {
    num: "02",
    icon: Brain,
    title: "Get Your Analysis",
    description: "Our ML model evaluates your skin health across multiple dimensions and generates a detailed score.",
  },
  {
    num: "03",
    icon: LineChart,
    title: "Track Progress",
    description: "View trends over time with graphs, calendars, and galleries. See what's working and what's not.",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "Improve with Insights",
    description: "Receive personalized recommendations and build routines tailored to your specific skin needs.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Four simple steps to understand and improve your skin health
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 100}>
              <div className="rounded-3xl p-8 h-full border border-slate-100 bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-white">{step.num}</span>
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-primary-50">
                  <step.icon className="text-primary" size={26} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
