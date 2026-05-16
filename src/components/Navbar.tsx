"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/images/Clariti Logo.png" alt="Clariti" className="w-8 h-8 rounded-lg" />
          <span className="text-2xl font-bold text-primary">Clariti</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-slate-600 hover:text-primary transition">
            How It Works
          </a>
          <a href="#features" className="text-sm text-slate-600 hover:text-primary transition">
            Features
          </a>
          <a href="#faq" className="text-sm text-slate-600 hover:text-primary transition">
            FAQ
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://apps.apple.com/au/app/clariti/id6737494318"
            className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition"
          >
            Download Now
          </a>
        </div>

        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3">
          <a href="#features" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#features" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>Features</a>
          <a href="#faq" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>FAQ</a>
          <a href="https://apps.apple.com/au/app/clariti/id6737494318" className="block px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full text-center" onClick={() => setOpen(false)}>
            Download Now
          </a>
        </div>
      )}
    </nav>
  );
}
