"use client";

import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import type { TimelineEntry } from "@/types/aboutHistory";

interface TimelineSectionProps {
    heading: string;
    entries: TimelineEntry[];
    className?: string;
}

/** Hook that tracks whether the element is in view — toggles on scroll up/down */
function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
}

function TimelineEntryItem({
    entry,
    index,
    isOpen,
    onToggle,
}: {
    entry: TimelineEntry;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const { ref, isVisible } = useInView(0.15);

    const slideDirection = entry.side === "left" ? "-translate-x-[40px]" : "translate-x-[40px]";

    return (
        <div
            ref={ref}
            className={cn(
                "relative transition-all duration-700 ease-out",
                isVisible
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${slideDirection}`
            )}
            style={{ transitionDelay: `${index * 80}ms` }}
        >
            {/* Desktop Layout (Hidden on Mobile) */}
            <div className="hidden md:flex relative flex-col md:flex-row md:items-start">
                {/* Left column */}
                <div className="md:w-1/2 md:pr-[48px]">
                    {entry.side === "left" && (
                        <div className="md:text-right">
                            <h3 className="font-brand-text text-[28px] font-bold leading-[32px] text-[#1a1d21] mb-[16px]">
                                {entry.year}
                            </h3>
                            <p className="font-source-sans text-[16px] leading-[20px] text-[#1a1d21] whitespace-pre-line">
                                {entry.text}
                            </p>
                        </div>
                    )}
                </div>

                {/* Center dot */}
                <div
                    className={cn(
                        "absolute left-1/2 -translate-x-1/2 top-[8px] w-[11px] h-[11px] rounded-full bg-[#1a1d21] transition-all duration-500",
                        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    )}
                    style={{ transitionDelay: `${index * 80 + 200}ms` }}
                    aria-hidden="true"
                />

                {/* Right column */}
                <div className="md:w-1/2 md:pl-[48px]">
                    {entry.side === "right" && (
                        <div>
                            <h3 className="font-brand-text text-[28px] font-bold leading-[32px] text-[#1a1d21] mb-[16px]">
                                {entry.year}
                            </h3>
                            <p className="font-source-sans text-[16px] leading-[20px] text-[#1a1d21] whitespace-pre-line">
                                {entry.text}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Layout: Accordion (Hidden on Desktop) */}
            <div className="md:hidden relative pl-[25px]">
                {/* Active blue dot on left line */}
                <div
                    className={cn(
                        "absolute left-[-5px] top-[24px] w-[11px] h-[11px] rounded-full border border-white transition-colors duration-300",
                        isOpen ? "bg-[#00008f]" : "bg-transparent border-[#1a1d21]"
                    )}
                    aria-hidden="true"
                />

                <div className="bg-white border border-[#f3f4f6] rounded-[14px] overflow-hidden">
                    <button
                        onClick={onToggle}
                        className="w-full h-[60px] px-[16px] flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00008f]"
                        aria-expanded={isOpen}
                    >
                        <h3 className="font-brand-text text-[20px] font-bold leading-[28px] text-[#1a1d21] text-left">
                            {entry.year}
                        </h3>
                        <div
                            className={cn(
                                "w-[20px] h-[20px] shrink-0 transition-transform duration-300 ease-in-out",
                                isOpen ? "-scale-y-100 rotate-180" : ""
                            )}
                        >
                            {/* SVG chevron fallback using text/simple shape or inline svg since we don't have the exact asset downloaded in this task, but we can reuse an existing chevron or use a standard one */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="#1A1D21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </button>

                    <div
                        className={cn(
                            "transition-all duration-300 ease-in-out overflow-hidden",
                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        )}
                        style={{ display: "grid" }}
                    >
                        <div className="overflow-hidden">
                            <div className="border-t border-[#f9fafb] pt-[8px] pb-[16px] px-[16px]">
                                <p className="font-source-sans text-[14px] leading-[22.75px] text-[#1a1d21] whitespace-pre-line text-left">
                                    {entry.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function TimelineSection({
    heading,
    entries,
    className,
}: TimelineSectionProps) {
    const { ref: headingRef, isVisible: headingVisible } = useInView(0.2);
    const { ref: lineRef, isVisible: lineVisible } = useInView(0.05);
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section className={cn("bg-[#f7f7f8] py-[72px]", className)}>
            <Container>
                <div className="relative bg-[#f7f7f8] md:bg-white rounded-[12px] md:px-[80px] pt-[24px] md:pt-[48px] pb-[48px] md:pb-[72px]">
                    {/* Section heading */}
                    <div
                        ref={headingRef}
                        className={cn(
                            "transition-all duration-700 ease-out mb-[32px] md:mb-[48px]",
                            headingVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-[20px]"
                        )}
                    >
                        <h2 className="font-headline text-[38px] md:text-[48px] font-light leading-[42px] md:leading-[56px] text-[#1a1d21] text-center">
                            {heading}
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-none mx-auto" ref={lineRef}>
                        {/* Vertical line — grows in from top. Left aligned on mobile, centered on desktop */}
                        <div
                            className={cn(
                                "absolute left-0 md:left-1/2 -translate-x-1/2 w-px bg-[#d1d5dc] md:bg-[#1a1d21] top-[-40px] md:top-0 transition-all duration-[1500ms] ease-out origin-top",
                                lineVisible ? "bottom-[-40px] md:bottom-0" : "bottom-[200%] md:bottom-full"
                            )}
                            aria-hidden="true"
                        />

                        {/* Timeline entries */}
                        <div className="flex flex-col gap-[11px] md:gap-[64px]">
                            {entries.map((entry, index) => (
                                <TimelineEntryItem
                                    key={entry.id}
                                    entry={entry}
                                    index={index}
                                    isOpen={openIndex === index}
                                    onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
