import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Pre-Order Confirmed — Clariti",
  robots: { index: false },
};

export default function PreorderSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            You&apos;re In!
          </h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Your DE-500 dermatoscope pre-order is confirmed. Check your email
            for a receipt — we&apos;ll notify you when your unit ships (4–6
            weeks).
          </p>
          <div className="space-y-3">
            <a
              href="https://apps.apple.com/au/app/clariti/id6737494318"
              className="block w-full px-6 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition"
            >
              Open Clariti App
            </a>
            <Link
              href="/preorder/dermatoscope"
              className="block w-full px-6 py-3.5 border border-slate-200 text-slate-700 font-medium rounded-full hover:border-primary hover:text-primary transition"
            >
              Back to Pre-Order Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
