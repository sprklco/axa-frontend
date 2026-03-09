"use client";

import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import type { MilestoneCard } from "@/types/aboutHistory";

interface MilestoneCardsSectionProps {
    heading: string;
    description: string;
    cards: MilestoneCard[];
    className?: string;
}

export function MilestoneCardsSection({
    heading,
    description,
    cards,
    className,
}: MilestoneCardsSectionProps) {
    return (
        <section className={cn("py-[48px] md:py-[72px] max-md:px-4", className)}>
            <Container>
                {/* Header */}
                <div className="flex flex-col items-center gap-[12px] mb-[48px]">
                    <h2 className="font-headline text-[48px] font-light leading-[56px] text-[#1a1d21] text-center">
                        {heading}
                    </h2>
                    <p className="font-source-sans text-[16px] leading-[24px] text-[#1a1d21] text-center max-w-[822px]">
                        {description}
                    </p>
                </div>
            </Container>

            {/* Cards grid - Outside standard Container for specific 32px mobile padding */}
            <div className="px-[32px] md:px-[72px] max-w-[1440px] mx-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] md:gap-[16px]">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="group relative h-[368px] overflow-hidden rounded-[12px] bg-[#00008f] md:bg-[#f7f7f8]"
                        >
                            {/* Blue Background Overlay — fades in on hover for desktop, persistent on mobile */}
                            <div className="absolute inset-0 bg-[#00008f] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-out" />

                            {/* Default Content (Grey State) — visible only on desktop, slides up and fades out on hover */}
                            <div className="hidden md:flex absolute inset-0 flex-col items-center justify-end px-[20px] py-[24px] transition-all duration-500 ease-out opacity-100 group-hover:opacity-0 group-hover:-translate-y-4">
                                <div className="flex flex-col gap-[8px] w-full">
                                    <p className="font-brand-text text-[32px] font-bold leading-[40px] text-[#1a1d21] text-center whitespace-pre-line">
                                        {card.title}
                                    </p>
                                    <p className="font-source-sans text-[16px] leading-[24px] text-[#434956] text-center whitespace-pre-line">
                                        {card.subtext}
                                    </p>
                                </div>
                            </div>

                            {/* Active Content (Blue State) — slides up and fades in on hover for desktop, permanent on mobile */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end px-[20px] py-[24px] transition-all duration-500 ease-out opacity-100 md:opacity-0 md:translate-y-6 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                                <div className="flex flex-col gap-[21px] w-full items-center">
                                    <p className="font-brand-text text-[32px] font-bold leading-[40px] text-white text-center whitespace-pre-line">
                                        {card.title}
                                    </p>
                                    <p className="font-source-sans text-[16px] leading-[24px] text-white/80 text-center whitespace-pre-line">
                                        {card.subtext}
                                    </p>
                                    <div className="shrink-0 pt-1">
                                        <div className="w-[30px] h-[30px] rounded-full border-2 border-white flex items-center justify-center">
                                            <img src="/images/milestone-asterisk.svg" alt="" className="w-[14px] h-[14px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
