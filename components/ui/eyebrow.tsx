import { cn } from "@/lib/utils";

interface EyebrowProps {
  tone?: "orange" | "blue" | "navy" | "white";
  center?: boolean;
  className?: string;
  children: React.ReactNode;
}

/** Section eyebrow — Sora, uppercase, tracked, with a leading tick. */
export function Eyebrow({ tone = "orange", center, className, children }: EyebrowProps) {
  return (
    <div className={cn("eyebrow", tone === "blue" && "blue", center && "center", className)}>
      <i />
      <b>{children}</b>
    </div>
  );
}
