"use client";

/**
 * Floating accessibility button
 * Positioned above the bottom nav bar on the left side
 */
export function AccessibilityButton() {
    return (
        <button
            className="absolute -top-14 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(80,80,80,0.85)] shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Accessibility options"
        >
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                {/* Head */}
                <circle cx="12" cy="4.5" r="2" fill="white" />
                {/* Body */}
                <path
                    d="M12 7.5V14M12 14L9 20M12 14L15 20"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* Arms */}
                <path
                    d="M7 10.5L12 9L17 10.5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}
