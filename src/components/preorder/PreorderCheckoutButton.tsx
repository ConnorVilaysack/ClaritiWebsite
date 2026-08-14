"use client";

import { DERMATOSCOPE_PREORDER } from "@/lib/preorder-config";
import { Lock } from "lucide-react";

type PreorderCheckoutButtonProps = {
  disabled?: boolean;
  label?: string;
  className?: string;
};

export default function PreorderCheckoutButton({
  disabled = false,
  label = "Pre-Order Now — Secure Checkout",
  className = "",
}: PreorderCheckoutButtonProps) {
  return (
    <div className={className}>
      <a
        href={DERMATOSCOPE_PREORDER.stripePaymentLink}
        className={`group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-primary to-[#60A5FA] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all text-lg ${
          disabled
            ? "pointer-events-none opacity-60 cursor-not-allowed"
            : ""
        }`}
        aria-disabled={disabled}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {label}
      </a>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-500">
        <Lock size={12} />
        Secure payment via Stripe · Full refund if we don&apos;t ship
      </p>
    </div>
  );
}
