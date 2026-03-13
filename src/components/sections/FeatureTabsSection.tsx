"use client";

import { useState, useRef, useId, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { PillTabs } from "@/components/ui/PillTabs";
import { cn } from "@/lib/cn";

export interface PlanFeature {
    title: string;
    description: string;
}

export interface PlanInfo {
    id: string;
    label: string;
    description: string;
    features: PlanFeature[];
}

export interface FeatureTabsSectionProps {
    heading?: string;
    plans: PlanInfo[];
    /** Enable smooth infinite auto-scrolling marquee */
    autoScroll?: boolean;
    /** Duration in seconds for one full scroll cycle (default 40) */
    speed?: number;
    /** Minimum number of cards required to enable auto-scroll (default 5) */
    minCardsToScroll?: number;
}

export function FeatureTabsSection({
    heading,
    plans,
    autoScroll = false,
    speed = 40,
    minCardsToScroll = 5,
}: FeatureTabsSectionProps) {
    const [activeTab, setActiveTab] = useState<string>(plans?.[0]?.id || "");
    const [isMobile, setIsMobile] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const uniqueId = useId();
    // CSS-safe id: replace colons with dashes
    const safeId = uniqueId.replace(/:/g, "-");

    // Detect mobile viewport
    useEffect(() => {
        const mql = window.matchMedia("(max-width: 767px)");
        const handler = (e: MediaQueryListEvent | MediaQueryList) =>
            setIsMobile(e.matches);
        handler(mql);
        mql.addEventListener("change", handler as (e: MediaQueryListEvent) => void);
        return () =>
            mql.removeEventListener("change", handler as (e: MediaQueryListEvent) => void);
    }, []);

    if (!plans || plans.length === 0) {
        return null;
    }

    const activePlan = plans.find((p) => p.id === activeTab) || plans[0];

    // Only auto-scroll when:
    // 1. autoScroll prop is true
    // 2. Not on mobile (mobile always gets manual scroll)
    // 3. There are enough cards to justify scrolling
    const shouldAutoScroll =
        autoScroll && !isMobile && activePlan.features.length >= minCardsToScroll;

    const featureCard = (feature: PlanFeature, idx: number, keySuffix = "") => (
        <div
            key={`${idx}${keySuffix}`}
            className="flex h-auto md:h-[312px] w-[280px] md:w-[312px] shrink-0 snap-start flex-col items-start justify-end rounded-lg bg-[#f7f7f8] p-6 transition-transform hover:-translate-y-1"
        >
            <div className="flex w-full flex-col gap-2">
                <h3 className="font-headline text-[24px] font-bold leading-[32px] text-[#1a1d21]">
                    {feature.title}
                </h3>
                <p className="font-source-sans text-[16px] leading-[24px] text-[#434956]">
                    {feature.description}
                </p>
            </div>
        </div>
    );

    return (
        <section className="w-full bg-white py-12 md:py-20">
            {/* Scoped keyframes for this instance — only injected when marquee is active */}
            {shouldAutoScroll && (
                <style>{`
                    @keyframes marquee-${safeId} {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .marquee-track-${safeId} {
                        animation: marquee-${safeId} ${speed}s linear infinite;
                    }
                    .marquee-track-${safeId}:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            )}

            <Container className="flex flex-col items-center gap-8 md:gap-12">
                {/* Heading */}
                {heading && (
                    <h2 className="font-headline text-[32px] font-bold leading-[40px] text-[#1a1d21] text-center whitespace-pre-wrap px-4">
                        {heading}
                    </h2>
                )}

                {/* Tabs */}
                {plans.length > 1 && (
                    <PillTabs
                        tabs={plans}
                        activeTabId={activeTab}
                        onTabChange={setActiveTab}
                        className="gap-2 overflow-x-auto max-w-full scrollbar-hide"
                        tabClassName="px-6 py-3 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00008f] hover:bg-gray-100"
                    />
                )}

                {/* Description */}
                {activePlan.description && (
                    <p className="max-w-[800px] text-center font-source-sans text-[16px] leading-[24px] text-[#434956] px-4">
                        {activePlan.description}
                    </p>
                )}

                {/* Feature Cards */}
                {activePlan.features && activePlan.features.length > 0 && (
                    <div className="w-full overflow-hidden">
                        {shouldAutoScroll ? (
                            /* ── Infinite marquee (desktop only, enough cards) ── */
                            <div
                                className={`flex items-stretch gap-4 md:gap-6 w-max marquee-track-${safeId}`}
                            >
                                {/* Original set */}
                                {activePlan.features.map((f, i) => featureCard(f, i, "-a"))}
                                {/* Duplicate set for seamless loop */}
                                {activePlan.features.map((f, i) => featureCard(f, i, "-b"))}
                            </div>
                        ) : (
                            /* ── Manual horizontal scroll (mobile, or few cards) ── */
                            <div
                                ref={scrollRef}
                                className="flex w-full items-stretch gap-4 overflow-x-auto pb-6 scrollbar-hide md:gap-6 px-4 md:px-0 snap-x snap-mandatory"
                            >
                                {activePlan.features.map((f, i) => featureCard(f, i))}
                            </div>
                        )}
                    </div>
                )}
            </Container>
        </section>
    );
}
