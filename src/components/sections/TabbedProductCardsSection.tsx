"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/CTAButton";
import { PillTabs } from "@/components/ui/PillTabs";
import { cn } from "@/lib/cn";

export interface ProductCardFeature {
    label: string;
    items?: string[];
    text?: string;
}

export interface ProductCard {
    id: string;
    tab: string;
    title: string;
    description: string;
    features: ProductCardFeature[];
}

export interface ProductTab {
    id: string;
    label: string;
}

export interface TabbedProductCardsSectionProps {
    tabs: ProductTab[];
    cards: ProductCard[];
    ctaText?: string;
    ctaHref?: string;
    className?: string;
}

export function TabbedProductCardsSection({
    tabs,
    cards,
    ctaText,
    ctaHref = "#",
    className,
}: TabbedProductCardsSectionProps) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");

    const filteredCards = cards.filter((card) => card.tab === activeTab);

    return (
        <section className={cn("bg-white py-12 md:py-8 lg:py-8", className)}>
            <Container className="flex flex-col items-center gap-10 md:gap-12">
                {/* Tab Toggle */}
                <PillTabs
                    tabs={tabs}
                    activeTabId={activeTab}
                    onTabChange={setActiveTab}
                />

                {/* Product Cards */}
                <div className="grid w-full gap-6 lg:gap-10 lg:grid-cols-2 max-w-[824px] mx-auto">
                    {filteredCards.map((card) => (
                        <div
                            key={card.id}
                            className="flex flex-col gap-7 rounded-[16px] bg-[#f0f4ff] backdrop-blur-[43px] px-6 pt-12 pb-4"
                        >
                            {/* Card Title & Description */}
                            <div className="flex flex-col gap-4">
                                <h3 className="font-brand-text text-[32px] font-bold leading-[40px] text-[#00008f]">
                                    {card.title}
                                </h3>
                                <p className="font-source-sans text-base leading-6 text-[#1a1d21] max-w-[314px]">
                                    {card.description}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="flex flex-col gap-1">
                                {card.features.map((feature) => (
                                    <div
                                        key={feature.label}
                                        className="flex flex-col gap-1 py-1"
                                    >
                                        <p className="font-source-sans text-[13px] font-bold leading-normal text-[#434956]">
                                            {feature.label}
                                        </p>
                                        {feature.items && feature.items.length > 0 && (
                                            <ul className="list-disc pl-[18px]">
                                                {feature.items.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="font-source-sans text-[12px] leading-[20px] text-[#1a1d21]"
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {feature.text && (
                                            <p className="font-source-sans text-[12px] leading-[20px] text-[#1a1d21]">
                                                {feature.text}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                {ctaText && (
                    <Button variant="secondary" size="md" href={ctaHref}>
                        {ctaText}
                    </Button>
                )}
            </Container>
        </section>
    );
}
