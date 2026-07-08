import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-primary to-cyan-600 text-primary-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_10px_30px_-5px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_14px_40px_-5px_hsl(var(--primary)/0.6)] hover:-translate-y-0.5",
        ghost:
          "border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl text-foreground shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] hover:border-white/[0.15] hover:bg-white/[0.08] hover:-translate-y-0.5",
        outline:
          "border border-white/[0.06] bg-transparent backdrop-blur-md text-foreground hover:border-white/[0.12] hover:bg-white/[0.04]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";
