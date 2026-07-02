import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  padding?: "sm" | "default";
}

/** Surface card — reads its colors from the active surface tokens. */
export function Card({ interactive = false, padding = "default", className, children, ...props }: CardProps) {
  return (
    <div
      className={cn("card", padding === "sm" && "card-sm", className)}
      data-interactive={interactive ? "" : undefined}
      {...props}
    >
      {children}
    </div>
  );
}
