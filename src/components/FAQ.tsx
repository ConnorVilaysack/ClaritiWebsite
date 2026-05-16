"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "How does the AI skin analysis work?",
    a: "Clariti uses a machine learning model trained on thousands of skin images. You take a selfie, and our AI evaluates multiple aspects of your skin health to generate a comprehensive score and personalized breakdown.",
  },
  {
    q: "Is Clariti a medical device?",
    a: "No. Clariti is a cosmetic journaling and discovery tool. It's designed to help you track your skin's appearance over time and build better routines. It does not diagnose or treat medical conditions. Always consult a dermatologist for medical concerns.",
  },
  {
    q: "What's included?",
    a: "Clariti includes unlimited photo scans, a photo gallery, progress graphs, a skin calendar, and routine tracking. Everything you need to start understanding your skin.",
  },
  {
    q: "What does Pro include?",
    a: "Pro adds the Clariti AI chat assistant, detailed skin health reports, acne trend analysis, UV index alerts, advanced personalized insights, and priority support — all for just $1.99/month.",
  },
  {
    q: "Is my data private and secure?",
    a: "Absolutely. Your photos and data are stored securely and privately. We never share your personal data or photos with third parties. Your skin journey is yours alone.",
  },
  {
    q: "How often should I scan my skin?",
    a: "We recommend scanning once daily for the best tracking results. Consistency helps our AI identify trends and give you more accurate insights. But even weekly scans provide valuable data.",
  },
  {
    q: "Can I track my skincare products?",
    a: "Yes! The routine builder lets you add and track the specific products you use. Over time, you can correlate product usage with your skin health scores to see what's actually working.",
  },
  {
    q: "What platforms is Clariti available on?",
    a: "Clariti is currently available on iOS. We're working on bringing it to Android soon.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 30}>
              <div className="border border-slate-100 rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-medium text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 flex-shrink-0 transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
