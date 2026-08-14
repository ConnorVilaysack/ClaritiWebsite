import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Cancelled — Clariti",
  robots: { index: false },
};

export default function PreorderCancelledPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            No Worries
          </h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Your checkout was cancelled. Spots are limited — come back anytime
            before this batch sells out.
          </p>
          <Link
            href="/preorder/dermatoscope"
            className="inline-block px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition"
          >
            Return to Pre-Order
          </Link>
        </div>
      </div>
    </div>
  );
}
