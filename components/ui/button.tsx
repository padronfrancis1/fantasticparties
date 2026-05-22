"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky/40 active:translate-y-0.5 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-coral text-white shadow-[0_6px_0_0_#1f1a1a,0_18px_30px_-12px_rgb(31_26_26_/_0.35)] hover:bg-coral-600 hover:shadow-[0_4px_0_0_#1f1a1a,0_12px_24px_-10px_rgb(31_26_26_/_0.35)] active:shadow-[0_2px_0_0_#1f1a1a]",
        sunshine:
          "bg-sunshine text-ink shadow-[0_6px_0_0_#1f1a1a,0_18px_30px_-12px_rgb(31_26_26_/_0.35)] hover:bg-sunshine-600 hover:shadow-[0_4px_0_0_#1f1a1a,0_12px_24px_-10px_rgb(31_26_26_/_0.35)] active:shadow-[0_2px_0_0_#1f1a1a]",
        mint:
          "bg-mint text-white shadow-[0_6px_0_0_#1f1a1a,0_18px_30px_-12px_rgb(31_26_26_/_0.35)] hover:bg-mint-600 hover:shadow-[0_4px_0_0_#1f1a1a,0_12px_24px_-10px_rgb(31_26_26_/_0.35)] active:shadow-[0_2px_0_0_#1f1a1a]",
        ghost:
          "bg-white/80 backdrop-blur text-ink border-2 border-ink/90 hover:bg-white hover:-translate-y-0.5",
        outline:
          "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-white",
        link: "text-coral underline-offset-4 hover:underline px-0 py-0",
      },
      size: {
        sm: "h-10 rounded-full px-5 text-sm",
        md: "h-12 rounded-full px-7 text-base",
        lg: "h-14 rounded-full px-8 text-lg",
        xl: "h-16 rounded-full px-10 text-xl",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
