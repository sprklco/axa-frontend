"use client";

import Link from "next/link";

/**
 * Actions navigation item with stacked layers/diamond icon
 */
export function ActionsNavItem() {
    return (
        <Link
            href="/actions"
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-2 transition-opacity hover:opacity-80"
            aria-label="Actions"
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                {/* Top diamond */}
                <path
                    d="M16 6L24 12L16 18L8 12L16 6Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                {/* Middle layer */}
                <path
                    d="M8 16L16 22L24 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* Bottom layer */}
                <path
                    d="M8 20L16 26L24 20"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                Actions
            </span>
        </Link>
    );
}
