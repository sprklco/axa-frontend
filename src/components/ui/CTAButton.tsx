import { cn } from "@/lib/cn";
import Link from "next/link";
import { forwardRef, useId, type ButtonHTMLAttributes, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Variant & size maps                                                */
/* ------------------------------------------------------------------ */

const variantStyles = {
    primary: cn(
        "bg-[#00008f] text-white",
        "focus-visible:ring-[#00008f]/50"
    ),
    secondary: cn(
        "border border-[#00008f] text-[#00008f]",
        "focus-visible:ring-[#00008f]/50"
    ),
    ghost: cn(
        "bg-white text-[#00008f]",
        "focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    ),
    inverse: cn(
        "border border-white text-white",
        "focus-visible:ring-white/50"
    ),
    danger: cn(
        "border border-[#ff1721] text-[#ff1721]",
        "focus-visible:ring-[#ff1721]/50"
    ),
} as const;

/** Default hover-fill colours per variant: [hoverBg, hoverText] */
const variantHoverDefaults: Record<string, [string, string]> = {
    primary: ["#ffffff", "#00008f"],
    secondary: ["#00008f", "#ffffff"],
    ghost: ["#00008f", "#ffffff"],
    inverse: ["#ffffff", "#00008f"],
    danger: ["#ff1721", "#ffffff"],
};

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
    /** Background colour on hover (fills left→right). Defaults per variant. */
    hoverBg?: string;
    /** Text colour on hover. Defaults per variant. */
    hoverText?: string;
    children?: ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

/**
 * Universal button component.
 *
 * Supports 5 visual variants, 3 sizes, optional leading icon,
 * `href` for Link rendering, left→right hover fill animation,
 * and full className override via `cn()`.
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
            hoverBg,
            hoverText,
            className,
            children,
            ...rest
        },
        ref
    ) => {
        /* --- Resolve hover colours --- */
        const [defaultHoverBg, defaultHoverText] =
            variantHoverDefaults[variant] ?? ["#00008f", "#ffffff"];
        const resolvedHoverBg = hoverBg ?? defaultHoverBg;
        const resolvedHoverText = hoverText ?? defaultHoverText;

        /* --- Scoped class for the hover style-block --- */
        const uid = useId().replace(/:/g, "");
        const scopeClass = `btn-fill-${uid}`;

        const classes = cn(
            // Base
            "inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap",
            "font-['Source_Sans_Pro',sans-serif] font-semibold leading-6",
            "focus:outline-none focus-visible:ring-2",
            // Positioning context for the ::before fill layer
            "relative overflow-hidden",
            // Icon-only override
            iconOnly && "aspect-square !px-0",
            // Size
            sizeStyles[size],
            // Variant (base colours only, hover is handled by the fill)
            variantStyles[variant],
            // Full width
            fullWidth && "w-full",
            // Scoped class
            scopeClass,
            // Consumer overrides
            className
        );

        /* --- Inline <style> for the sweep animation --- */
        const hoverStyle = (
            <style>{`
                .${scopeClass} { transition: color 0.15s ease; }
                .${scopeClass}::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: calc(100% + 3rem);
                    height: 100%;
                    background: ${resolvedHoverBg};
                    clip-path: polygon(0 0, 100% 0, calc(100% - 3rem) 100%, 0 100%);
                    transform: translateX(calc(-100% - 1px));
                    transition: transform 0.15s ease;
                    z-index: 0;
                }
                .${scopeClass}:hover::before { transform: translateX(0); }
                .${scopeClass}:hover { color: ${resolvedHoverText}; }
            `}</style>
        );

        const content = (
            <>
                {icon && <span className="relative z-10">{icon}</span>}
                <span className="relative z-10">{children}</span>
            </>
        );

        /* ---- Render as Link ---- */
        if (href) {
            return (
                <>
                    {hoverStyle}
                    <Link href={href} className={classes}>
                        {content}
                    </Link>
                </>
            );
        }

        /* ---- Render as button ---- */
        return (
            <>
                {hoverStyle}
                <button ref={ref} className={classes} {...rest}>
                    {content}
                </button>
            </>
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
