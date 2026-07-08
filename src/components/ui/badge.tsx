import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all backdrop-blur-md",
  {
    variants: {
      variant: {
        default:
          "border-white/[0.08] bg-white/[0.04] text-muted-foreground shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]",
        accent:
          "border-primary/20 bg-primary/10 text-primary shadow-[0_0_12px_hsl(var(--primary)/0.1),inset_0_1px_1px_rgba(255,255,255,0.06)]",
        outline:
          "border-white/[0.06] bg-transparent text-muted-foreground hover:border-white/[0.12] hover:text-primary hover:bg-white/[0.04]",
      },
      size: {
        default: "px-3 py-1 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size, className }))} {...props} />
  );
}
