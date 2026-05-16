"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "./FadeIn";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  AreaChart,
  Tooltip,
} from "recharts";

// --- Data for each metric ---

const breakoutData = [
  { type: "Papules", value: 72 },
  { type: "Pustules", value: 45 },
  { type: "Comedones", value: 88 },
  { type: "Nodules", value: 20 },
  { type: "Cysts", value: 12 },
  { type: "Whiteheads", value: 65 },
];

const inflammationData = [
  { week: "W1", score: 68 },
  { week: "W2", score: 72 },
  { week: "W3", score: 61 },
  { week: "W4", score: 55 },
  { week: "W5", score: 63 },
  { week: "W6", score: 48 },
  { week: "W7", score: 42 },
  { week: "W8", score: 38 },
];

const oilinessData = [
  { week: "W1", score: 74 },
  { week: "W2", score: 78 },
  { week: "W3", score: 70 },
  { week: "W4", score: 65 },
  { week: "W5", score: 68 },
  { week: "W6", score: 55 },
  { week: "W7", score: 50 },
  { week: "W8", score: 46 },
];

const hydrationData = [
  { week: "W1", score: 42 },
  { week: "W2", score: 48 },
  { week: "W3", score: 55 },
  { week: "W4", score: 60 },
  { week: "W5", score: 58 },
  { week: "W6", score: 67 },
  { week: "W7", score: 72 },
  { week: "W8", score: 78 },
];

const poresData = [
  { week: "W1", score: 70 },
  { week: "W2", score: 65 },
  { week: "W3", score: 62 },
  { week: "W4", score: 58 },
  { week: "W5", score: 55 },
  { week: "W6", score: 50 },
  { week: "W7", score: 45 },
  { week: "W8", score: 40 },
];

const textureData = [
  { week: "W1", score: 65 },
  { week: "W2", score: 60 },
  { week: "W3", score: 58 },
  { week: "W4", score: 52 },
  { week: "W5", score: 48 },
  { week: "W6", score: 44 },
  { week: "W7", score: 38 },
  { week: "W8", score: 35 },
];

// --- Slide definitions ---

interface Slide {
  title: string;
  subtitle: string;
  color: string;
  render: () => React.ReactNode;
}

const slides: Slide[] = [
  {
    title: "Overall Skin Score",
    subtitle: "Your comprehensive skin health rating",
    color: "#3B82F6",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
            <circle cx="100" cy="100" r="85" fill="none" stroke="#E2E8F0" strokeWidth="14" />
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={`${(82 / 100) * 534} 534`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold text-slate-900">82</span>
            <span className="text-sm text-slate-400 mt-1">out of 100</span>
          </div>
        </div>
        <div className="mt-6 flex gap-6">
          <div className="text-center">
            <div className="w-3 h-3 rounded-full bg-emerald-400 mx-auto mb-1" />
            <span className="text-xs text-slate-400">Excellent 85+</span>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 rounded-full bg-[#3B82F6] mx-auto mb-1" />
            <span className="text-xs text-slate-400">Good 60-84</span>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 rounded-full bg-amber-400 mx-auto mb-1" />
            <span className="text-xs text-slate-400">Needs Work &lt;60</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Skin Age",
    subtitle: "Predicted biological skin age",
    color: "#3B82F6",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full">
        <span className="text-8xl font-bold text-slate-900">24</span>
        <span className="text-lg text-slate-400 mt-2">years old</span>
        <div className="mt-6 flex items-center gap-3 bg-emerald-50 px-5 py-2.5 rounded-full">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          <span className="text-sm font-semibold text-emerald-600">3 years younger than actual</span>
        </div>
      </div>
    ),
  },
  {
    title: "Breakouts",
    subtitle: "Acne type distribution across your skin",
    color: "#3B82F6",
    render: () => (
      <div className="w-full h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height={280}>
          <RadarChart data={breakoutData} outerRadius="75%">
            <PolarGrid stroke="#E2E8F0" />
            <PolarAngleAxis dataKey="type" tick={{ fontSize: 12, fill: "#64748B" }} />
            <Radar dataKey="value" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.2} strokeWidth={2} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    ),
  },
  {
    title: "Inflammation",
    subtitle: "Inflammation score over time (lower is better)",
    color: "#EF4444",
    render: () => (
      <div className="w-full h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={inflammationData}>
            <defs>
              <linearGradient id="inflGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EF4444" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="week" tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: "12px", border: "1px solid #F1F5F9", fontSize: "13px" }}
              formatter={(v: number) => [`${v}/100`, "Score"]}
            />
            <Area type="monotone" dataKey="score" stroke="#EF4444" strokeWidth={2.5} fill="url(#inflGrad)" dot={{ r: 4, fill: "#EF4444", strokeWidth: 0 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    ),
  },
  {
    title: "Oiliness",
    subtitle: "Oil production over time (lower is better)",
    color: "#EAB308",
    render: () => (
      <div className="w-full h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={oilinessData}>
            <defs>
              <linearGradient id="oilGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EAB308" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#EAB308" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="week" tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: "12px", border: "1px solid #F1F5F9", fontSize: "13px" }}
              formatter={(v: number) => [`${v}/100`, "Score"]}
            />
            <Area type="monotone" dataKey="score" stroke="#EAB308" strokeWidth={2.5} fill="url(#oilGrad)" dot={{ r: 4, fill: "#EAB308", strokeWidth: 0 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    ),
  },
  {
    title: "Hydration",
    subtitle: "Skin hydration levels over time (higher is better)",
    color: "#3B82F6",
    render: () => (
      <div className="w-full h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={hydrationData}>
            <defs>
              <linearGradient id="hydGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="week" tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: "12px", border: "1px solid #F1F5F9", fontSize: "13px" }}
              formatter={(v: number) => [`${v}/100`, "Score"]}
            />
            <Area type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2.5} fill="url(#hydGrad)" dot={{ r: 4, fill: "#3B82F6", strokeWidth: 0 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    ),
  },
  {
    title: "Texture",
    subtitle: "Skin texture irregularity over time (lower is better)",
    color: "#8B5CF6",
    render: () => (
      <div className="w-full h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={textureData}>
            <defs>
              <linearGradient id="texGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="week" tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: "12px", border: "1px solid #F1F5F9", fontSize: "13px" }}
              formatter={(v: number) => [`${v}/100`, "Score"]}
            />
            <Area type="monotone" dataKey="score" stroke="#8B5CF6" strokeWidth={2.5} fill="url(#texGrad)" dot={{ r: 4, fill: "#8B5CF6", strokeWidth: 0 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    ),
  },
  {
    title: "Pores",
    subtitle: "Pore visibility score over time (lower is better)",
    color: "#22C55E",
    render: () => (
      <div className="w-full h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={poresData}>
            <defs>
              <linearGradient id="poreGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="week" tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: "12px", border: "1px solid #F1F5F9", fontSize: "13px" }}
              formatter={(v: number) => [`${v}/100`, "Score"]}
            />
            <Area type="monotone" dataKey="score" stroke="#22C55E" strokeWidth={2.5} fill="url(#poreGrad)" dot={{ r: 4, fill: "#22C55E", strokeWidth: 0 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    ),
  },
];

export default function SkinAnalysis() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    resetInterval();
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
              Deep Analysis
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Understand Your Skin Like <span className="text-primary">Never Before</span>
            </h2>
            <p className="text-lg text-slate-500 mb-8">
              Our AI analyzes multiple dimensions of your skin health, giving you a
              comprehensive score and breakdown so you know exactly where you stand
              and what to improve.
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p>Powered by machine learning trained on thousands of skin images.</p>
              <p className="text-slate-400 text-xs mt-4">
                Note: Clariti is for cosmetic discovery, not medical diagnosis.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-gradient-to-br from-slate-50 to-primary-50/30 rounded-3xl p-8 border border-slate-100 relative">
              {/* Title area */}
              <div className="mb-6 min-h-[60px]">
                <h3 className="text-xl font-bold text-slate-900" style={{ color: slide.color }}>
                  {slide.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">{slide.subtitle}</p>
              </div>

              {/* Chart area */}
              <div className="min-h-[300px] flex items-center justify-center">
                {slide.render()}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition"
                >
                  <ChevronLeft size={18} className="text-slate-500" />
                </button>

                <div className="flex gap-2">
                  {slides.map((s, i) => (
                    <button
                      key={s.title}
                      onClick={() => goTo(i)}
                      className="w-2.5 h-2.5 rounded-full transition-all"
                      style={{
                        backgroundColor: i === current ? slide.color : "#E2E8F0",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition"
                >
                  <ChevronRight size={18} className="text-slate-500" />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
