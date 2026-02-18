"use client";

import { cn } from "@/lib/cn";
import type { ProgressBarProps } from "@/types/hero";

/**
 * Progress bar segment for carousel navigation
 * Shows fill animation for active slide, full for completed, empty for upcoming
 */
export function ProgressBar({
    isActive,
    isCompleted,
    progress,
    onClick,
    ariaLabel,
}: ProgressBarProps) {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={cn(
                "relative h-[6px] w-full overflow-hidden rounded-[2px]",
                "bg-white/30 transition-all duration-150",
                "hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            )}
        >
            <div
                className={cn(
                    "absolute inset-y-0 left-0 bg-white transition-all",
                    isActive ? "duration-100" : "duration-300"
                )}
                style={{
                    width: isCompleted ? "100%" : isActive ? `${progress}%` : "0%",
                }}
            />
        </button>
    );
}
