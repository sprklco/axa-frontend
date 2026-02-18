"use client";

import { cn } from "@/lib/cn";
import type { PauseButtonProps } from "@/types/hero";

/**
 * Pause/Play toggle button for carousel auto-advance
 */
export function PauseButton({ isPaused, onToggle }: PauseButtonProps) {
    return (
        <button
            onClick={onToggle}
            aria-label={isPaused ? "Play carousel" : "Pause carousel"}
            className={cn(
                "flex h-12 w-12 items-center justify-center",
                "text-white transition-opacity duration-150",
                "hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:rounded-full"
            )}
        >
            {isPaused ? (
                // Play icon
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
                    <path
                        d="M19 16L32 24L19 32V16Z"
                        fill="currentColor"
                    />
                </svg>
            ) : (
                // Pause icon (from Figma)
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
                    <rect x="17" y="15" width="4" height="18" rx="1" fill="currentColor" />
                    <rect x="27" y="15" width="4" height="18" rx="1" fill="currentColor" />
                </svg>
            )}
        </button>
    );
}
