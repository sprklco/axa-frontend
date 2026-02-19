import { cn } from "@/lib/cn";
import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Variant & size maps                                                */
/* ------------------------------------------------------------------ */

const variantStyles = {
    primary: cn(
        "bg-[#00008f] text-white",
        "hover:bg-[#00007a]",
        "focus-visible:ring-[#00008f]/50"
    ),
    secondary: cn(
        "border border-[#00008f] text-[#00008f]",
        "hover:bg-[#00008f]/5",
        "focus-visible:ring-[#00008f]/50"
    ),
    ghost: cn(
        "bg-white text-[#00008f]",
        "hover:bg-white/90 hover:shadow-lg",
        "focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    ),
    inverse: cn(
        "border border-white text-white",
        "hover:bg-white/10",
        "focus-visible:ring-white/50"
    ),
    danger: cn(
        "border border-[#ff1721] text-[#ff1721]",
        "hover:bg-red-50",
        "focus-visible:ring-[#ff1721]/50"
    ),
} as const;

const sizeStyles = {
    sm: "h-10 px-5 py-2 text-[16px]",
    md: "h-12 px-6 py-3 text-[16px]",
    lg: "h-14 px-8 py-4 text-base",
} as const;

export type ButtonVariant = keyof typeof variantStyles;
export type ButtonSize = keyof typeof sizeStyles;

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual variant */
    variant?: ButtonVariant;
    /** Height preset */
    size?: ButtonSize;
    /** Render as Next.js Link if provided */
    href?: string;
    /** Leading icon element */
    icon?: ReactNode;
    /** Round icon-only button (square aspect, no text padding) */
    iconOnly?: boolean;
    /** Stretch to full width */
    fullWidth?: boolean;
    children?: ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

/**
 * Universal button component.
 *
 * Supports 5 visual variants, 3 sizes, optional leading icon,
 * `href` for Link rendering, and full className override via `cn()`.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            href,
            icon,
            iconOnly = false,
            fullWidth = false,
            className,
            children,
            ...rest
        },
        ref
    ) => {
        const classes = cn(
            // Base
            "inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap",
            "font-['Source_Sans_Pro',sans-serif] font-semibold leading-6",
            "transition-colors focus:outline-none focus-visible:ring-2",
            // Icon-only override
            iconOnly && "aspect-square !px-0",
            // Size
            sizeStyles[size],
            // Variant
            variantStyles[variant],
            // Full width
            fullWidth && "w-full",
            // Consumer overrides
            className
        );

        const content = (
            <>
                {icon}
                {children}
            </>
        );

        /* ---- Render as Link ---- */
        if (href) {
            return (
                <Link href={href} className={classes}>
                    {content}
                </Link>
            );
        }

        /* ---- Render as button ---- */
        return (
            <button ref={ref} className={classes} {...rest}>
                {content}
            </button>
        );
    }
);

Button.displayName = "Button";

/* ------------------------------------------------------------------ */
/*  Legacy wrapper (backward compat)                                   */
/* ------------------------------------------------------------------ */

interface CTAButtonProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

/**
 * @deprecated Use `<Button variant="ghost" size="lg" href={…}>` instead.
 */
export function CTAButton({ children, href, className }: CTAButtonProps) {
    return (
        <Button variant="ghost" size="lg" href={href} className={className}>
            {children}
        </Button>
    );
}
