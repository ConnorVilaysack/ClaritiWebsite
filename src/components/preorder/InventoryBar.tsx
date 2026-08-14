"use client";

import { useEffect, useState } from "react";

type Inventory = {
  totalUnits: number;
  soldUnits: number;
  remainingUnits: number;
  isSoldOut: boolean;
};

export default function InventoryBar({ initial }: { initial: Inventory }) {
  const [inventory, setInventory] = useState(initial);

  useEffect(() => {
    let cancelled = false;

    async function refresh() {
      try {
        const response = await fetch("/api/preorder/inventory");
        if (!response.ok) return;
        const data = (await response.json()) as Inventory;
        if (!cancelled) setInventory(data);
      } catch {
        // Keep initial values on failure.
      }
    }

    const interval = setInterval(refresh, 30000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  const percentSold = Math.min(
    100,
    Math.round((inventory.soldUnits / inventory.totalUnits) * 100)
  );

  return (
    <div className="rounded-2xl border border-primary-200/60 bg-gradient-to-r from-primary-50 to-[#87CEEB]/10 p-4 md:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            {inventory.isSoldOut ? (
              "Sold out — join the waitlist in the Clariti app"
            ) : (
              <>
                <span className="text-primary-dark">Limited founding batch:</span>{" "}
                {inventory.remainingUnits} of {inventory.totalUnits} spots left
              </>
            )}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">
            {inventory.soldUnits} pre-orders secured · closes when sold out
          </p>
        </div>
        {!inventory.isSoldOut && (
          <span className="inline-flex self-start sm:self-auto items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary to-[#60A5FA] text-white text-xs font-bold uppercase tracking-wide">
            {percentSold}% claimed
          </span>
        )}
      </div>
      <div className="h-2.5 rounded-full bg-primary-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-[#60A5FA] transition-all duration-700 ease-out"
          style={{ width: `${percentSold}%` }}
        />
      </div>
    </div>
  );
}
