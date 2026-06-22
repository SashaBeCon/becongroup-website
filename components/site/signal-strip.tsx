import { cn } from "@/lib/utils";

interface Cell {
  label: string;
  title: string;
  description?: string;
}

interface SignalStripProps {
  left: Cell;
  middle: Cell;
  right: Cell;
  className?: string;
}

/**
 * Three-cell concept strip — "Signal → Integrated system → Outcomes."
 * Wrapped in a rounded surface that sits centered within a parent section.
 */
export function SignalStrip({ left, middle, right, className }: SignalStripProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1080px] overflow-hidden rounded-xl shadow-md",
        className,
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_220px_1fr]">
        <CellBox cell={left} variant="side" align="left" />
        <CellBox cell={middle} variant="mid" align="center" />
        <CellBox cell={right} variant="side" align="right" />
      </div>
    </div>
  );
}

function CellBox({
  cell,
  variant,
  align,
}: {
  cell: Cell;
  variant: "side" | "mid";
  align: "left" | "center" | "right";
}) {
  const wrap = cn(
    "px-10 py-9",
    variant === "side" && "bg-blue-100 text-ink",
    variant === "mid" && "bg-ink text-white flex flex-col items-center justify-center text-center py-9 px-6",
    align === "right" && "md:text-right",
  );
  const label = cn(
    "text-eyebrow uppercase mb-2",
    variant === "side" ? "text-blue-700" : "text-orange-400",
  );
  const title = cn(
    variant === "side" ? "text-h3 font-semibold" : "text-small font-medium leading-snug",
  );

  return (
    <div className={wrap}>
      <p className={label}>{cell.label}</p>
      <p className={title}>{cell.title}</p>
      {cell.description ? (
        <p className="mt-2 text-small font-normal text-gray-700">{cell.description}</p>
      ) : null}
    </div>
  );
}
