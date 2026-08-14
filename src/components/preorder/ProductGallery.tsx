"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GallerySlide = {
  src: string;
  alt: string;
  caption: string;
};

type ProductGalleryProps = {
  slides: readonly GallerySlide[];
};

export default function ProductGallery({ slides }: ProductGalleryProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  function goTo(next: number) {
    setIndex((next + slides.length) % slides.length);
  }

  const slide = slides[index];

  return (
    <div className="w-full">
      <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-xl shadow-primary/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.src}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-contain p-4 md:p-8 bg-gradient-to-b from-primary-50/30 to-white"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary/30 transition"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary/30 transition"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-white via-white/95 to-transparent px-5 pt-10 pb-4">
          <p className="text-sm font-medium text-slate-800 text-center">
            {slide.caption}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {slides.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`View image ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-8 bg-primary"
                : "w-2 bg-slate-300 hover:bg-primary/40"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-4 sm:grid-cols-7 gap-2">
        {slides.map((item, i) => (
          <button
            key={`thumb-${item.src}`}
            type="button"
            onClick={() => setIndex(i)}
            className={`relative aspect-square rounded-xl overflow-hidden border-2 transition ${
              i === index
                ? "border-primary shadow-md shadow-primary/10"
                : "border-slate-200 hover:border-primary/30"
            }`}
          >
            <Image
              src={item.src}
              alt=""
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
