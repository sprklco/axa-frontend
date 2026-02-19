import { cn } from "@/lib/cn";
import Link from "next/link";

interface CTAButtonProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

/**
 * Primary CTA button - white background with blue text
 * Full-width on mobile, matches Figma design exactly
 */
export function CTAButton({ children, href, className }: CTAButtonProps) {
    return (
        <Link
            href={href}
            className={cn(
                "flex h-14 w-full items-center justify-center lg:w-auto",
                "rounded-full bg-white px-8 py-4",
                "font-source-sans text-base font-semibold leading-6 text-[#00008f]",
                "transition-all duration-150",
                "hover:bg-white/90 hover:shadow-lg",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                className
            )}
        >
            {children}
        </Link>
    );
}
