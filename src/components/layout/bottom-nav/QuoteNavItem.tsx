"use client";

import Link from "next/link";

/**
 * Quote navigation item with dollar-sign-in-circle icon
 */
export function QuoteNavItem() {
    return (
        <Link
            href="/quote"
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-2 transition-opacity hover:opacity-80"
            aria-label="Get a quote"
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="1.5" />
                <text
                    x="16"
                    y="21"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="300"
                    fontFamily="'Source Sans 3', sans-serif"
                >
                    $
                </text>
            </svg>
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                Quote
            </span>
        </Link>
    );
}
