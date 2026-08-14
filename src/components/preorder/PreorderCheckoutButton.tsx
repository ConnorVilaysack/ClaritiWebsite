"use client";

import { useState } from "react";
import { DERMATOSCOPE_PREORDER } from "@/lib/preorder-config";
import { Lock } from "lucide-react";

type PreorderCheckoutButtonProps = {
  disabled?: boolean;
  label?: string;
  className?: string;
  email?: string;
  userId?: string;
};

export default function PreorderCheckoutButton({
  disabled = false,
  label = "Pre-Order Now — Secure Checkout",
  className = "",
  email,
  userId,
}: PreorderCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleCheckout() {
    if (disabled || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/checkout/dermatoscope", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email?.trim() || undefined,
          userId: userId?.trim().toLowerCase() || undefined,
        }),
      });

      const data = (await response.json()) as { url?: string };
      if (data.url) {
        window.location.href = data.url;
        return;
      }
    } catch (error) {
      console.error("Checkout API failed, falling back to payment link:", error);
    } finally {
      setIsLoading(false);
    }

    window.location.href = DERMATOSCOPE_PREORDER.stripePaymentLink;
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={handleCheckout}
        disabled={disabled || isLoading}
        className={`group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-primary to-[#60A5FA] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all text-lg disabled:pointer-events-none disabled:opacity-60`}
      >
        {isLoading ? "Starting checkout…" : label}
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-500">
        <Lock size={12} />
        Secure payment via Stripe · Full refund if we don&apos;t ship
      </p>
    </div>
  );
}
