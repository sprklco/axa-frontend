"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/CTAButton";
import { cn } from "@/lib/cn";
import type { HealthProgramInfo } from "@/data/healthPrograms";

interface HealthProgramsSectionProps {
    title: string;
    subtitle: string;
    programs: HealthProgramInfo[];
    category: "individual" | "corporate";
}

export function HealthProgramsSection({ title, subtitle, programs, category }: HealthProgramsSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const visiblePrograms = programs.filter(p => {
        if (category === "individual") return p.showInIndividual !== false;
        if (category === "corporate") return p.showInCorporate !== false;
        return true;
    });

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % visiblePrograms.length);
    };

    const handlePrev = () => {
        setActiveIndex((current) => (current - 1 + visiblePrograms.length) % visiblePrograms.length);
    };

    return (
        <section className="py-16 md:py-[80px] overflow-hidden bg-white">
            <Container className="relative">
                {/* Header */}
                <div className="flex flex-col items-center gap-[8px] mb-[40px] md:mb-[60px]">
                    <p className="text-[16px] md:text-[18px] font-semibold leading-[24px] md:leading-[26px] text-[#606776] text-center">
                        {subtitle}
                    </p>
                    <h2 className="font-headline text-[34px] md:text-[48px] font-light leading-[42px] md:leading-[56px] text-[#1a1d21] text-center -tracking-tight">
                        {title}
                    </h2>
                </div>

                <div className="relative h-[556px] md:h-[696px]">
                    {/* Clipped carousel area */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Carousel Track */}
                        <div
                            className="flex items-start h-full gap-4 md:gap-[16px] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] [--step:272px] md:[--step:336px]"
                            style={{
                                transform: `translateX(calc(-${activeIndex} * var(--step)))`
                            }}
                        >
                        {visiblePrograms.map((program, idx) => {
                            const isActive = activeIndex === idx;
                            const description = category === "individual" 
                                ? program.individualDescription || program.description
                                : program.corporateDescription || program.description;

                            return (
                                <div
                                    key={program.id}
                                    onClick={() => setActiveIndex(idx)}
                                    // Expand active item to 608px on desktop, collapse others to 320px. 
                                    className={cn(
                                        "relative shrink-0 cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform origin-left",
                                        isActive
                                            ? "w-[min(92vw,376px)] md:w-[608px] h-[556px] md:h-[696px] rounded-[12px] shadow-2xl"
                                            : "w-[256px] md:w-[320px] h-[294px] md:h-[362px] rounded-[8px] opacity-90 hover:opacity-100",
                                        !isActive && "mt-0" // In Figma height shrinks, top remains aligned.
                                    )}
                                >
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className={cn(
                                        "absolute inset-0 bg-linear-to-b from-transparent transition-opacity duration-700",
                                        isActive
                                            ? "via-black/50 to-black/90 opacity-100"
                                            : "via-black/30 to-black/80 opacity-100"
                                    )} />

                                    {/* Content inside card */}
                                    <div className={cn(
                                        "absolute inset-0 flex flex-col justify-end transition-all duration-700",
                                        isActive ? "p-6 md:p-10" : "p-5 md:p-6"
                                    )}>
                                        <h3 className={cn(
                                            "text-white font-bold transition-all duration-700 leading-tight",
                                            isActive ? "text-[28px] md:text-[40px] mb-4 md:mb-8" : "text-[20px] md:text-[24px] mb-0"
                                        )}>
                                            {program.title}
                                        </h3>

                                        {/* Description + Button (Only visible on active card) */}
                                        <div className={cn(
                                            "overflow-hidden transition-all duration-700 flex flex-col",
                                            isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                        )}>
                                            <p className="text-white text-[16px] md:text-[18px] mb-8 leading-normal whitespace-pre-line text-ellipsis overflow-hidden">
                                                {description}
                                            </p>
                                            <Button 
                                                variant="inverse" 
                                                size="md" 
                                                href={`/health-programs?category=${category}&program=${category === 'individual' ? program.individualId : program.corporateId}`} 
                                                className="self-start relative z-10 w-fit"
                                            >
                                                Read More
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                        {/* Desktop Right Edge Fade */}
                        <div
                            className="hidden md:block absolute right-0 top-0 h-full w-[401px] pointer-events-none z-10"
                            style={{ background: "linear-gradient(92.625deg, rgba(255, 255, 255, 0) 9.76%, rgb(255, 255, 255) 91.28%)" }}
                        />
                    </div>

                    {/* Desktop Next Arrow — outside clipped area so it isn't hidden */}
                    <button
                        onClick={handleNext}
                        className="hidden md:flex items-center justify-center w-[54px] h-[54px] rounded-full bg-[#00008f] border border-[#00008f] text-white transition-opacity hover:opacity-90 absolute right-0 top-[181px] -translate-y-1/2 translate-x-1/2 z-20 shadow-lg"
                        aria-label="Next health program"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Navigation Controls */}
                <div className="flex md:hidden justify-end gap-3 mt-6">
                    <button
                        onClick={handlePrev}
                        className="bg-white border border-gray-200 shadow-sm p-3 rounded-full text-[#00008f] flex items-center justify-center w-12 h-12"
                        aria-label="Previous health program"
                    >
                        <ChevronRight className="w-5 h-5 rotate-180" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-[#00008f] shadow-sm p-3 rounded-full text-white flex items-center justify-center w-12 h-12"
                        aria-label="Next health program"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </Container>
        </section>
    );
}
