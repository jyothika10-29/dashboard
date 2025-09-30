"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function buttonVariants(opts?: {
  variant?: "default" | "ghost" | "secondary";
  size?: "icon" | "sm" | "md" | "lg";
  className?: string;
}) {
  const { variant = "default", size = "md", className } = opts || {};

  const base =
    "inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantMap: Record<string, string> = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
    secondary: "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 focus:ring-gray-300",
  };

  const sizeMap: Record<string, string> = {
    icon: "h-9 w-9 p-0",
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return cn(base, variantMap[variant] ?? "", sizeMap[size] ?? "", className ?? "");
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "secondary";
  size?: "icon" | "sm" | "md" | "lg";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={props.type ?? "button"}
        className={buttonVariants({ variant, size, className })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
