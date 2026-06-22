import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind-aware className merger. Use everywhere we conditionally
 * combine classes so duplicate/conflicting utilities resolve cleanly.
 *
 *   cn("p-4", isActive && "bg-orange-500", "p-6")  // → "bg-orange-500 p-6"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
