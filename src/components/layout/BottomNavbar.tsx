"use client";

import { AccessibilityButton } from "./bottom-nav/AccessibilityButton";
import { QuoteNavItem } from "./bottom-nav/QuoteNavItem";
import { ActionsNavItem } from "./bottom-nav/ActionsNavItem";
import { ContactNavItem } from "./bottom-nav/ContactNavItem";
import { ChatButton } from "./bottom-nav/ChatButton";

/**
 * Bottom sticky navigation bar
 * Fixed at the bottom of the viewport on mobile
 * Dark gradient background with accessibility button floating above
 */
export function BottomNavbar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden" role="navigation" aria-label="Quick actions">
            {/* Container for accessibility button positioning */}
            <div className="relative">
                {/* Accessibility button - floats above the bar */}
                <AccessibilityButton />

                {/* Main bottom bar */}
                <nav
                    className="flex h-[88px] items-center justify-center px-4"
                    style={{
                        background: "linear-gradient(180deg, rgba(100,100,100,0.75) 0%, rgba(60,60,60,0.9) 100%)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                    }}
                >
                    {/* Nav Items */}
                    <div className="flex items-center justify-center gap-2">
                        <QuoteNavItem />
                        <ActionsNavItem />
                        <ContactNavItem />
                    </div>

                    {/* Vertical Divider */}
                    <div
                        className="mx-3 h-10 w-px bg-white/40"
                        aria-hidden="true"
                    />

                    {/* Chat Button */}
                    <ChatButton />
                </nav>
            </div>
        </div>
    );
}
