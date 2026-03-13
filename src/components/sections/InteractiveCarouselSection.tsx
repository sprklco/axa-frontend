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

    const activeCard = data.cards.find((c) => c.id === activeCardId);
    const activeIndex = data.cards.findIndex((c) => c.id === activeCardId);

    // Each collapsed card = 264px + 16px gap = 280px on desktop, 160px + 16px = 176px on mobile
    // Shift the row left so the active card always sits at the same position
    const desktopShift = activeIndex * (264 + 16);
    const mobileShift = activeIndex * (160 + 16);

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

                {/* Carousel section — fixed height container */}
                <div className="w-full overflow-hidden">
                    {/* Image track — shifts left so active card is always in the same position */}
                    <div
                        data-carousel-track
                        className="flex items-start gap-[16px] pl-[calc(50vw-150px)] md:pl-[398px] h-[192px] md:h-[296px] transition-transform duration-500 ease-in-out"
                        style={{
                            "--mobile-shift": `-${mobileShift}px`,
                            "--desktop-shift": `-${desktopShift}px`,
                        } as React.CSSProperties}
                    >
                        <style>{`
                            [data-carousel-track] {
                                transform: translateX(var(--mobile-shift));
                            }
                            @media (min-width: 768px) {
                                [data-carousel-track] {
                                    transform: translateX(var(--desktop-shift));
                                }
                            }
                        `}</style>
                        {data.cards.map((card) => {
                            const isActive = activeCardId === card.id;

                            return (
                                <button
                                    key={card.id}
                                    onClick={() => setActiveCardId(card.id)}
                                    className={cn(
                                        "relative shrink-0 rounded-[8px] overflow-hidden transition-all duration-500 ease-in-out cursor-pointer",
                                        isActive
                                            ? "w-[300px] h-[192px] md:w-[576px] md:h-[296px]"
                                            : "w-[160px] h-[112px] md:w-[264px] md:h-[184px]"
                                    )}
                                    aria-pressed={isActive}
                                >
                                    <Image
                                        src={card.imageSrc}
                                        alt={card.imageAlt}
                                        fill
                                        className="object-cover"
                                        sizes={
                                            isActive
                                                ? "(min-width: 768px) 576px, 300px"
                                                : "(min-width: 768px) 264px, 160px"
                                        }
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Text display section — aligned with active card */}
                    {activeCard && (
                        <div key={activeCardId} className="flex flex-col gap-[32px] text-left px-4 pl-[calc(50vw-150px)] md:pl-[398px] mt-[32px] w-full animate-[fadeInUp_0.4s_ease-out]">
                            <style>{`
                                @keyframes fadeInUp {
                                    from { opacity: 0; transform: translateY(12px); }
                                    to { opacity: 1; transform: translateY(0); }
                                }
                            `}</style>
                            <div className="flex flex-col gap-[8px] max-w-[580px]">
                                <h3 className="font-brand-text font-bold text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-[#1a1d21]">
                                    {activeCard.title}
                                </h3>
                                <p className="font-source-sans font-normal text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-[#606776]">
                                    {activeCard.subtitle}
                                </p>
                            </div>
                            <div className="flex flex-col gap-[6px] max-w-[580px]">
                                <p className="font-source-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#434956]">
                                    {activeCard.description}
                                </p>
                                <p className="font-source-sans text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-[#606776]">
                                    {activeCard.footerText}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
