"use client";

import Image from "next/image";
import { useState } from "react";
import { WhyAxaData } from "@/types/careers";
import { cn } from "@/lib/cn";

export interface InteractiveCarouselSectionProps {
    data: WhyAxaData;
    className?: string;
}

export function InteractiveCarouselSection({
    data,
    className,
}: InteractiveCarouselSectionProps) {
    const [activeCardId, setActiveCardId] = useState<string>(data.cards[0]?.id || "");

    return (
        <section className={cn("py-[64px] bg-white overflow-hidden", className)}>
            <div className="flex flex-col gap-[64px] items-center text-center max-w-[1440px] mx-auto w-full">

                {/* Header section */}
                <div className="flex flex-col gap-[12px] items-center px-4 md:px-6">
                    <p className="font-source-sans font-semibold text-[18px] leading-[26px] text-[#606776]">
                        {data.subtitle}
                    </p>
                    <h2 className="font-headline font-light text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] text-[#1a1d21]">
                        {data.title}
                    </h2>
                </div>

                {/* Carousel section */}
                <div className="w-full relative flex flex-col md:block overflow-hidden md:h-[550px]">
                    <div className="flex gap-[24px] overflow-x-auto px-4 md:px-[64px] lg:px-[124px] pb-8 pt-4 hide-scrollbar snap-x snap-mandatory">
                        {data.cards.map((card) => {
                            const isActive = activeCardId === card.id;

                            return (
                                <button
                                    key={card.id}
                                    onClick={() => setActiveCardId(card.id)}
                                    className={cn(
                                        "relative flex shrink-0 rounded-[8px] overflow-hidden transition-all duration-500 ease-in-out snap-center cursor-pointer items-end justify-start text-left",
                                        isActive
                                            ? "flex-col w-[368px] md:w-[480px] lg:w-[576px] h-[200px] md:h-[500px]"
                                            : "w-[169px] md:w-[220px] lg:w-[264px] h-[112px] md:h-[400px]"
                                    )}
                                    aria-pressed={isActive}
                                >
                                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                                        <Image
                                            src={card.imageSrc}
                                            alt={card.imageAlt}
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 576px, (min-width: 768px) 480px, 320px"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 from-25% via-65% to-black/70" />
                                    </div>

                                    {/* Desktop overlay embedded inside card */}
                                    {isActive ? (
                                        <div className="hidden md:flex relative z-10 flex-col gap-[32px] p-6 lg:p-[40px] w-full mt-auto">
                                            <div className="flex flex-col gap-2">
                                                <h3 className="font-title font-bold text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-white">
                                                    {card.title}
                                                </h3>
                                                <p className="font-source-sans font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#dddfe4]">
                                                    {card.subtitle}
                                                </p>
                                            </div>

                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-source-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-white/90 line-clamp-4">
                                                    {card.description}
                                                </p>
                                                <p className="font-source-sans text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-white/70 line-clamp-3">
                                                    {card.footerText}
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative z-10 p-4" />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile text separated out */}
                    <div className="flex md:hidden flex-col items-start text-left px-4 mt-2">
                        {data.cards.map((card) => {
                            if (activeCardId !== card.id) return null;
                            return (
                                <div key={`mobile-text-${card.id}`} className="flex flex-col gap-6 w-full animate-fade-in-up flex-1">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-title font-bold text-[24px] leading-[32px] text-[#1a1d21]">
                                            {card.title}
                                        </h3>
                                        <p className="font-source-sans font-normal text-[18px] leading-[26px] text-[#606776]">
                                            {card.subtitle}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-[6px]">
                                        <p className="font-source-sans text-[16px] leading-[24px] text-[#434956]">
                                            {card.description}
                                        </p>
                                        <p className="font-source-sans text-[14px] leading-[22px] text-[#606776]">
                                            {card.footerText}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
