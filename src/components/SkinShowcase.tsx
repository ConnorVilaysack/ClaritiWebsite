"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    image: "/images/graphs/graph1.png",
    alt: "Predicted Skin Age",
    position: "top-[2%] left-[2%] md:left-[3%]",
    size: "w-[200px]",
    delay: 0,
  },
  {
    image: "/images/graphs/graph2.png",
    alt: "Acne Type Profile",
    position: "top-[12%] right-[2%] md:right-[3%]",
    size: "w-[220px]",
    delay: 100,
  },
  {
    image: "/images/graphs/graph3.png",
    alt: "Skin Health Score",
    position: "bottom-[30%] left-[0%] md:left-[2%]",
    size: "w-[200px]",
    delay: 200,
  },
  {
    image: "/images/graphs/graph4.png",
    alt: "3D Face Map",
    position: "bottom-[25%] right-[0%] md:right-[1%]",
    size: "w-[150px]",
    delay: 300,
  },
  {
    image: "/images/graphs/graph7.png",
    alt: "Highest Activity Area",
    position: "bottom-[8%] left-[5%] md:left-[8%]",
    size: "w-[180px]",
    delay: 250,
  },
  {
    image: "/images/graphs/graph5.png",
    alt: "Product Analysis",
    position: "bottom-[8%] right-[20%] md:right-[25%]",
    size: "w-[130px]",
    delay: 350,
  },
];

export default function SkinShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scanActive, setScanActive] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScanActive(true);
          setCardsVisible(true);
          setTimeout(() => setScanComplete(true), 2000);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-12 md:pt-28 pb-0 bg-gradient-to-b from-[#EBF4FF] via-[#D6EBFF] to-[#EBF4FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            AI-Powered Analysis
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            See What Your Skin <span className="text-primary">Really</span> Tells You
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Our AI scans your face and generates detailed metrics, trends, and insights — all from a single photo.
          </p>
        </div>

        <div ref={sectionRef} className="relative w-full max-w-[1000px] mx-auto">
          {/* Center face image */}
          <div className="relative flex items-end justify-center z-10">
            <div className="relative w-[280px] md:w-[380px] lg:w-[440px]">
              <img
                src="/images/graphs/womenacne2.png"
                alt="Skin analysis subject"
                className="w-full"
              />
              {/* Scan line */}
              {scanActive && !scanComplete && (
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 animate-scan" />
                </div>
              )}
              {/* Scan overlay */}
              {scanActive && !scanComplete && (
                <div className="absolute inset-0 border-2 border-primary/50 animate-pulse rounded-lg" />
              )}
            </div>
          </div>

          {/* Floating cards - hidden on mobile */}
          {cards.map((card) => (
            <div
              key={card.alt}
              className={`absolute ${card.position} ${card.size} z-20 hidden md:block transition-all duration-700 ${
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${card.delay}ms` }}
            >
              <div className="bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full"
                />
              </div>
            </div>
          ))}

          {/* Connecting lines (subtle) - hidden on mobile */}
          {scanComplete && (
            <svg className="absolute inset-0 w-full h-full z-[5] pointer-events-none opacity-20 hidden md:block">
              <line x1="50%" y1="50%" x2="12%" y2="12%" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="88%" y2="20%" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="10%" y2="60%" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="90%" y2="65%" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="22%" y2="92%" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="72%" y2="92%" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 2s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}
