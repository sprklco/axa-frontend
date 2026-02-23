import { cn } from "@/lib/cn";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

/**
 * Reusable layout container component.
 * Provides consistent horizontal constraint (max-width + side padding + centering)
 * across all sections.
 *
 * Mobile:  mx-auto max-w-lg px-4
 * Desktop: lg:max-w-[1440px] lg:mx-auto lg:px-[72px]
 *
 * Vertical padding and backgrounds should be applied by the parent section.
 */
export function Container({
    children,
    className,
    as: Component = "div",
}: ContainerProps) {
    return (
        <Component
            className={cn(
                "mx-auto max-w-lg px-4",
                "lg:max-w-[1440px] lg:px-[72px]",
                className
            )}
        >
            {children}
        </Component>
    );
}
