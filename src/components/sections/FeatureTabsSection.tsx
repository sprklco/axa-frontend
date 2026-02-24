"use client";

import { useState, useRef } from "react";
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
    plans: PlanInfo[];
}

export function FeatureTabsSection({ plans }: FeatureTabsSectionProps) {
    // Default to the first plan if any exist
    const [activeTab, setActiveTab] = useState<string>(plans?.[0]?.id || "");
    const scrollRef = useRef<HTMLDivElement>(null);

    if (!plans || plans.length === 0) {
        return null;
    }

    const activePlan = plans.find((p) => p.id === activeTab) || plans[0];

    return (
        <section className="w-full bg-white py-12 md:py-20">
            <Container className="flex flex-col items-center gap-8 md:gap-12">
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

                {/* Carousel Container */}
                {activePlan.features && activePlan.features.length > 0 && (
                    <div className="w-full">
                        <div
                            ref={scrollRef}
                            className="flex w-full items-stretch gap-4 overflow-x-auto pb-6 scrollbar-hide md:gap-6 px-4 md:px-0"
                        >
                            {activePlan.features.map((feature, idx) => (
                                <div
                                    key={idx}
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
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
}
