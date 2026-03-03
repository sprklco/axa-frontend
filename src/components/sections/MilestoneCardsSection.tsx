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
        <section className={cn("py-[48px] md:py-[72px]", className)}>
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

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="group h-[368px] [perspective:1000px]"
                        >
                            <div className="relative w-full h-full transition-transform duration-600 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                {/* Front */}
                                <div className="absolute inset-0 bg-[#f7f7f8] rounded-[12px] flex flex-col items-center justify-end px-[20px] py-[24px] [backface-visibility:hidden]">
                                    <div className="flex flex-col gap-[8px] w-full">
                                        <p className="font-brand-text text-[32px] font-bold leading-[40px] text-[#1a1d21] text-center">
                                            {card.title}
                                        </p>
                                        <p className="font-source-sans text-[16px] leading-[24px] text-[#434956] text-center">
                                            {card.subtext}
                                        </p>
                                    </div>
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 bg-[#747272] rounded-[12px] flex flex-col justify-end px-[24px] py-[24px] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                    {card.backDescription ? (
                                        <div className="flex flex-col gap-[8px]">
                                            <p className="font-brand-text text-[28px] font-bold leading-[34px] text-white">
                                                {card.backTitle}
                                            </p>
                                            <p className="font-source-sans text-[16px] leading-[24px] text-white/80">
                                                {card.backDescription}
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="font-brand-text text-[32px] font-bold leading-[40px] text-white">
                                            {card.backTitle}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
