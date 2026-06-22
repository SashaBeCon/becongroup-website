import { cn } from "@/lib/utils";

/**
 * Max-width wrapper used inside <Section>. Centers content at 1200px
 * with horizontal padding that collapses on small screens.
 *
 * Section provides full-width background; Container constrains the readable
 * content column.
 */
export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full max-w-container", className)} {...props}>
      {children}
    </div>
  );
}
