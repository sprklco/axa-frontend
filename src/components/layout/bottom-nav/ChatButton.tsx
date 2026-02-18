"use client";

/**
 * Chat button with speech bubbles icon
 * Separated from nav items by a vertical divider
 */
export function ChatButton() {
    return (
        <button
            className="flex items-center justify-center px-4 py-2 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg"
            aria-label="Open chat"
        >
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                {/* First bubble (back) */}
                <rect
                    x="6"
                    y="8"
                    width="20"
                    height="16"
                    rx="3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                />
                {/* Tail for first bubble */}
                <path
                    d="M12 24L10 29L16 24"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* Second bubble (front) */}
                <rect
                    x="16"
                    y="14"
                    width="18"
                    height="14"
                    rx="3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                />
                {/* Tail for second bubble */}
                <path
                    d="M28 28L30 33L24 28"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}
