"use client";

import { useState, useRef, useId } from "react";
import { Container } from "@/components/layout/Container";
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
    /** Duration in seconds for one full scroll cycle (default 20) */
    speed?: number;
}

export function FeatureTabsSection({
    heading,
    plans,
    autoScroll = false,
    speed = 20,
}: FeatureTabsSectionProps) {
    const [activeTab, setActiveTab] = useState<string>(plans?.[0]?.id || "");
    const scrollRef = useRef<HTMLDivElement>(null);
    const uniqueId = useId();
    // CSS-safe id: replace colons with dashes
    const safeId = uniqueId.replace(/:/g, "-");

    if (!plans || plans.length === 0) {
        return null;
    }

    const activePlan = plans.find((p) => p.id === activeTab) || plans[0];

    const featureCard = (feature: PlanFeature, idx: number, keySuffix = "") => (
        <div
            key={`${idx}${keySuffix}`}
            className="flex h-auto md:h-[312px] w-[280px] md:w-[312px] shrink-0 flex-col items-start justify-end rounded-lg bg-[#f7f7f8] p-6 transition-transform hover:-translate-y-1"
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
            {/* Scoped keyframes for this instance */}
            {autoScroll && (
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
                    <div className="flex items-center gap-2 rounded-full bg-[#fafafa] p-2 overflow-x-auto max-w-full scrollbar-hide">
                        {plans.map((plan) => {
                            const isActive = activeTab === plan.id;
                            return (
                                <button
                                    key={plan.id}
                                    onClick={() => setActiveTab(plan.id)}
                                    className={cn(
                                        "flex items-center justify-center whitespace-nowrap rounded-full px-6 py-3 font-source-sans text-[18px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00008f]",
                                        isActive
                                            ? "bg-[#00008f] text-white"
                                            : "text-[#00008f] hover:bg-gray-100"
                                    )}
                                >
                                    {plan.label}
                                </button>
                            );
                        })}
                    </div>
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
                        {autoScroll ? (
                            /* ── Infinite marquee ── */
                            <div
                                className={`flex items-stretch gap-4 md:gap-6 w-max marquee-track-${safeId}`}
                            >
                                {/* Original set */}
                                {activePlan.features.map((f, i) => featureCard(f, i, "-a"))}
                                {/* Duplicate set for seamless loop */}
                                {activePlan.features.map((f, i) => featureCard(f, i, "-b"))}
                            </div>
                        ) : (
                            /* ── Static horizontal scroll ── */
                            <div
                                ref={scrollRef}
                                className="flex w-full items-stretch gap-4 overflow-x-auto pb-6 scrollbar-hide md:gap-6 px-4 md:px-0"
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
