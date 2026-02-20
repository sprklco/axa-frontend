"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { insuranceTypes } from "@/data/insuranceTypes";
import { Button } from "@/components/ui/CTAButton";

/* ──────────────────────────────────────────────
   Inline SVG icons for each insurance type tab.
   Kept here to avoid extra files & match Figma.
   ────────────────────────────────────────────── */

const tabIcons: Record<string, React.ReactNode> = {
    motor: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
            <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
    ),
    health: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.566z" />
            <path d="M12 6v4m-2-2h4" />
        </svg>
    ),
    home: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 10.182V22h18V10.182L12 2 3 10.182z" />
            <path d="M9.5 22v-7h5v7" />
        </svg>
    ),
    life: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="2 15 7 10 10 13 17 6 22 11" />
            <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
    ),
    foreigner: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    ),
    sme: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.566z" />
            <path d="M12 6v4m-2-2h4" />
        </svg>
    ),
    travel: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
    ),
    marine: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
            <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
        </svg>
    ),
};

export function FeaturedSection() {
    const [activeTab, setActiveTab] = useState("motor");

    const row1 = insuranceTypes.filter((t) => t.row === 1);
    const row2 = insuranceTypes.filter((t) => t.row === 2);

    return (
        <section className="relative z-10 pt-10 px-4 pb-10 lg:px-0 lg:pt-0 lg:pb-0">
            {/* Desktop gray background wrapper — visible lg+ only */}
            <div className="mx-auto max-w-lg lg:max-w-none lg:bg-[#f7f7f8] lg:px-[72px] lg:py-[72px]">
                {/* Card */}
                <div
                    className={cn(
                        "rounded-2xl bg-white p-6 shadow-lg",
                        "lg:mx-auto lg:flex lg:max-w-[1296px] lg:items-center lg:gap-20 lg:rounded-xl lg:p-6 lg:shadow-none"
                    )}
                >
                    {/* Left — Image (desktop only) */}
                    <div className="hidden lg:block lg:relative lg:h-[664px] lg:w-[512px] lg:shrink-0 lg:overflow-hidden lg:rounded-lg">
                        <Image
                            src="/images/featured-quote.png"
                            alt="Woman smiling in a car"
                            fill
                            className="object-cover"
                            sizes="512px"
                        />
                    </div>

                    {/* Right — Content */}
                    <div className="flex flex-col lg:flex-1 lg:gap-8">
                        {/* Header Group */}
                        <div className="mb-8 text-center lg:mb-0 lg:text-left">
                            <p className="mb-2 font-source-sans text-[16px] font-semibold leading-6 text-[#606776]">
                                Request a quote
                            </p>
                            <h2 className="mb-4 font-headline text-[34px] font-light leading-[42px] text-[#1a1d21] lg:text-[40px] lg:leading-[48px]">
                                What type of insurance{" "}
                                <span className="lg:block">do you need?</span>
                            </h2>
                            <p className="font-source-sans text-base text-[#606776] lg:text-lg lg:leading-[26px] lg:text-[#434956]">
                                <span className="lg:hidden">
                                    At AXA we give you the option to quote online or by phone.
                                </span>
                                <span className="hidden lg:inline">
                                    Get a quotation for your desired insurance policy.
                                </span>
                            </p>
                        </div>

                        {/* Mobile — Dropdown Selector */}
                        <div className="space-y-6 lg:hidden">
                            <div className="relative">
                                <button
                                    className="flex w-full items-center justify-between rounded-none bg-gray-50 px-4 py-4 transition-colors hover:bg-gray-100"
                                    aria-label="Select insurance type"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#00008f]">{tabIcons[activeTab]}</span>
                                        <span className="text-[18px] font-semibold text-[#00008f]">
                                            {insuranceTypes.find((t) => t.id === activeTab)?.label} Insurance
                                        </span>
                                    </div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00008f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </button>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-4">
                                <Button variant="secondary" size="md" fullWidth className="font-bold">
                                    Quote online
                                </Button>
                                <Button variant="danger" size="md" fullWidth className="font-bold">
                                    Get a callback
                                </Button>
                            </div>

                            {/* Phone Contact */}
                            <div className="text-center">
                                <p className="text-sm font-semibold text-[#1a1d21]">
                                    You can also call us at{" "}
                                    <a href="tel:8009448471" className="text-[#00008f] hover:underline">
                                        800 944 8471
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Desktop — Icon Tab Bars + Buttons */}
                        <div className="hidden lg:flex lg:flex-col lg:gap-8">
                            {/* Tab Rows Wrapper */}
                            <div className="flex w-fit flex-col gap-8">
                                {/* Tab Bar Row 1 */}
                                <div className="relative flex items-center gap-0 rounded-lg bg-[#f7f7f8] p-2">
                                    {row1.map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setActiveTab(type.id)}
                                            className={cn(
                                                "relative z-10 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-lg leading-[26px] transition-colors",
                                                activeTab === type.id
                                                    ? "bg-[#00008f] text-white"
                                                    : "text-[#00008f] hover:bg-white/60"
                                            )}
                                            aria-pressed={activeTab === type.id}
                                        >
                                            <span className="shrink-0">{tabIcons[type.id]}</span>
                                            <span className="font-source-sans whitespace-nowrap">{type.label}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Tab Bar Row 2 */}
                                <div className="relative flex items-center gap-0 rounded-lg bg-[#f7f7f8] p-2">
                                    {row2.map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setActiveTab(type.id)}
                                            className={cn(
                                                "relative z-10 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-lg leading-[26px] transition-colors",
                                                activeTab === type.id
                                                    ? "bg-[#00008f] text-white"
                                                    : "text-[#00008f] hover:bg-white/60"
                                            )}
                                            aria-pressed={activeTab === type.id}
                                        >
                                            <span className="shrink-0">{tabIcons[type.id]}</span>
                                            <span className="font-source-sans whitespace-nowrap">{type.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-6">
                                <Button variant="secondary" size="md" href="#">
                                    Quote online
                                </Button>
                                <Button variant="danger" size="md">
                                    Get a callback
                                </Button>
                            </div>

                            {/* Phone Contact */}
                            <div className="flex items-center gap-1">
                                <span className="font-source-sans text-lg leading-[26px] text-[#1a1d21]">
                                    Call us anytime 24/7 at
                                </span>
                                <a
                                    href="tel:04727000"
                                    className="inline-flex items-center gap-1 font-source-sans text-[16px] font-semibold leading-6 text-[#00008f] hover:underline"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    04 - 727 000
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
