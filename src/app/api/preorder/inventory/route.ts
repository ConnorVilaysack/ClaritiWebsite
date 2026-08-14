import { NextResponse } from "next/server";
import { getPreorderInventory } from "@/lib/preorder-inventory";

export const dynamic = "force-dynamic";

export async function GET() {
  const inventory = await getPreorderInventory();
  return NextResponse.json(inventory);
}
