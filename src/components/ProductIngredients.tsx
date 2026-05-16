"use client";

import { useEffect, useRef, useState } from "react";

type Rating = "good" | "bad" | "caution";

interface Ingredient {
  name: string;
  rating: Rating;
  category: string;
  tags: string[];
  side: "left" | "right";
  top: string;
}

const ingredients: Ingredient[] = [
  { name: "Niacinamide", rating: "good", category: "Helping factors", tags: ["barrier support", "redness appearance support"], side: "left", top: "4%" },
  { name: "Hyaluronic Acid", rating: "good", category: "Helping factors", tags: ["deep hydration", "plumping effect"], side: "right", top: "2%" },
  { name: "Salicylic Acid", rating: "good", category: "Helping factors", tags: ["unclogs pores", "fights breakouts"], side: "left", top: "24%" },
  { name: "Fragrance", rating: "bad", category: "Harmful factors", tags: ["skin irritant", "sensitizing agent"], side: "right", top: "22%" },
  { name: "Retinol", rating: "caution", category: "Use with care", tags: ["anti-aging", "may cause dryness"], side: "left", top: "44%" },
  { name: "Vitamin C", rating: "good", category: "Helping factors", tags: ["antioxidant", "glow enhancer"], side: "right", top: "42%" },
  { name: "Alcohol Denat.", rating: "bad", category: "Harmful factors", tags: ["strips moisture", "disrupts barrier"], side: "left", top: "64%" },
  { name: "Ceramides", rating: "good", category: "Helping factors", tags: ["barrier repair", "locks in moisture"], side: "right", top: "62%" },
];

const ratingStyles = {
  good: { dot: "bg-[#A3D977]", categoryColor: "text-[#6BA03A]" },
  bad: { dot: "bg-red-400", categoryColor: "text-red-500" },
  caution: { dot: "bg-amber-400", categoryColor: "text-amber-500" },
};

function IngredientCardDesktop({ ingredient, visible, delay }: { ingredient: Ingredient; visible: boolean; delay: number }) {
  const style = ratingStyles[ingredient.rating];
  return (
    <div
      className={`absolute ${ingredient.side === "left" ? "right-[58%] lg:right-[61%]" : "left-[58%] lg:left-[61%]"} transition-all duration-700 ${
        visible ? "opacity-100 translate-x-0" : ingredient.side === "left" ? "opacity-0 translate-x-4" : "opacity-0 -translate-x-4"
      }`}
      style={{ top: ingredient.top, transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-slate-100 w-[210px] hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2.5 mb-1">
          <div className={`w-3 h-3 rounded-full ${style.dot} flex-shrink-0`} />
          <span className="text-sm font-semibold text-slate-800">{ingredient.name}</span>
        </div>
        <p className={`text-xs font-medium ${style.categoryColor} mb-1.5 ml-[22px]`}>{ingredient.category}</p>
        <p className="text-[11px] text-slate-400 ml-[22px]">{ingredient.tags.join(" · ")}</p>
      </div>
      {/* Connecting line */}
      <div className={`absolute top-1/2 ${ingredient.side === "left" ? "-right-5" : "-left-5"} w-5 h-px bg-slate-200`} />
      <div className={`absolute top-1/2 -translate-y-1/2 ${ingredient.side === "left" ? "-right-[24px]" : "-left-[24px]"} w-2 h-2 rounded-full border-2 border-primary bg-white`} />
    </div>
  );
}

function IngredientCardMobile({ ingredient, visible, delay }: { ingredient: Ingredient; visible: boolean; delay: number }) {
  const style = ratingStyles[ingredient.rating];
  return (
    <div
      className={`bg-white rounded-2xl px-3.5 py-3 shadow-sm border border-slate-100 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2 mb-0.5">
        <div className={`w-2.5 h-2.5 rounded-full ${style.dot} flex-shrink-0`} />
        <span className="text-sm font-semibold text-slate-800 truncate">{ingredient.name}</span>
      </div>
      <p className={`text-[11px] font-medium ${style.categoryColor} ml-[18px]`}>{ingredient.category}</p>
      <p className="text-[10px] text-slate-400 ml-[18px] mt-0.5">{ingredient.tags.join(" · ")}</p>
    </div>
  );
}

function ScoreRing({ score, visible }: { score: number; visible: boolean }) {
  const circumference = 2 * Math.PI * 85;
  const offset = circumference - (score / 100) * circumference;

  let ratingLabel = "Poor";
  let ratingColor = "#EF4444";
  let ringColor = "#EF4444";
  let labelBg = "bg-red-50";
  let labelText = "text-red-600";
  if (score >= 80) {
    ratingLabel = "Great";
    ratingColor = "#22C55E";
    ringColor = "#22C55E";
    labelBg = "bg-emerald-50";
    labelText = "text-emerald-600";
  } else if (score >= 60) {
    ratingLabel = "Mediocre";
    ratingColor = "#D4A843";
    ringColor = "#D4A843";
    labelBg = "bg-amber-50";
    labelText = "text-amber-700";
  } else if (score >= 40) {
    ratingLabel = "Below Average";
    ratingColor = "#F59E0B";
    ringColor = "#F59E0B";
    labelBg = "bg-amber-50";
    labelText = "text-amber-600";
  }

  return (
    <div
      className={`flex flex-col items-center transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      style={{ transitionDelay: "500ms" }}
    >
      <div className="relative w-36 h-36 md:w-44 md:h-44">
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
          <circle cx="100" cy="100" r="85" fill="none" stroke="#E8E8E8" strokeWidth="12" />
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke={ringColor}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl md:text-5xl font-bold" style={{ color: ratingColor }}>{score}</span>
          <span className="text-sm text-slate-400">/ 100</span>
        </div>
      </div>
      <div className={`mt-3 px-5 py-1.5 rounded-full ${labelBg}`}>
        <span className={`text-sm font-semibold ${labelText}`}>{ratingLabel}</span>
      </div>
    </div>
  );
}

export default function ProductIngredients() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goodCount = ingredients.filter((i) => i.rating === "good").length;
  const badCount = ingredients.filter((i) => i.rating === "bad").length;
  const cautionCount = ingredients.filter((i) => i.rating === "caution").length;
  const score = Math.round(((goodCount * 10 + cautionCount * 5) / (ingredients.length * 10)) * 100);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            Product Scanner
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Know What&apos;s <span className="text-primary">Really</span> In Your Products
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Scan any skincare product and instantly see which ingredients help your
            skin — and which ones to avoid.
          </p>
        </div>

        <div ref={sectionRef}>
          {/* Mobile layout */}
          <div className="md:hidden flex flex-col items-center gap-8">
            <img
              src="/images/product/productimage.png"
              alt="Skincare products"
              className="w-[180px] object-contain"
            />
            <ScoreRing score={score} visible={visible} />
            <div className="w-full bg-slate-50 rounded-2xl p-3 border border-slate-100">
              <p className="text-xs font-medium text-slate-500 mb-2.5 px-1">
                ✨ What it&apos;s for
              </p>
              <p className="text-sm text-slate-600 px-1 mb-4">
                A lightweight sunscreen meant to protect skin from UV rays while adding a bit of moisture.
              </p>
            </div>
            <div className="w-full grid grid-cols-2 gap-2.5">
              {ingredients.map((ing, i) => (
                <IngredientCardMobile key={ing.name} ingredient={ing} visible={visible} delay={i * 60} />
              ))}
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex flex-col items-center gap-10">
            {/* Product image + floating cards */}
            <div className="relative w-full max-w-[950px] min-h-[520px]">
              {ingredients.map((ing, i) => (
                <IngredientCardDesktop key={ing.name} ingredient={ing} visible={visible} delay={i * 80} />
              ))}

              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[320px] z-10 h-full flex items-center justify-center">
                <img
                  src="/images/product/productimage.png"
                  alt="Skincare products"
                  className="w-full object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Score + description row */}
            <div className="flex items-center gap-12 max-w-[700px]">
              <ScoreRing score={score} visible={visible} />
              <div
                className={`flex-1 bg-slate-50 rounded-2xl p-6 border border-slate-100 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                <p className="text-sm font-semibold text-primary mb-2">✨ What it&apos;s for</p>
                <p className="text-base text-slate-600 leading-relaxed">
                  A lightweight sunscreen meant to protect skin from UV rays while adding a bit of moisture.
                </p>
                <div className="flex items-center gap-4 mt-4 text-sm">
                  <span className="text-[#6BA03A] font-medium">{goodCount} helping</span>
                  <span className="text-amber-500 font-medium">{cautionCount} caution</span>
                  <span className="text-red-500 font-medium">{badCount} harmful</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
