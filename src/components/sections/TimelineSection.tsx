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

function TimelineEntryItem({ entry, index }: { entry: TimelineEntry; index: number }) {
    const { ref, isVisible } = useInView(0.15);

    const slideDirection = entry.side === "left" ? "-translate-x-[40px]" : "translate-x-[40px]";

    return (
        <div
            ref={ref}
            className={cn(
                "relative flex flex-col md:flex-row md:items-start transition-all duration-700 ease-out",
                isVisible
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${slideDirection}`
            )}
            style={{ transitionDelay: `${index * 80}ms` }}
        >
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
                    "hidden md:flex absolute left-1/2 -translate-x-1/2 top-[8px] w-[11px] h-[11px] rounded-full bg-[#1a1d21] transition-all duration-500",
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
    );
}

export function TimelineSection({
    heading,
    entries,
    className,
}: TimelineSectionProps) {
    const { ref: headingRef, isVisible: headingVisible } = useInView(0.2);
    const { ref: lineRef, isVisible: lineVisible } = useInView(0.05);

    return (
        <section className={cn("bg-[#f7f7f8] py-[72px]", className)}>
            <Container>
                <div className="relative bg-white rounded-[12px] px-6 md:px-[80px] pt-[48px] pb-[72px]">
                    {/* Section heading */}
                    <div
                        ref={headingRef}
                        className={cn(
                            "transition-all duration-700 ease-out mb-[48px]",
                            headingVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-[20px]"
                        )}
                    >
                        <h2 className="font-headline text-[48px] font-light leading-[56px] text-[#1a1d21] text-center">
                            {heading}
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative" ref={lineRef}>
                        {/* Center vertical line — grows in from top */}
                        <div
                            className={cn(
                                "hidden md:block absolute left-1/2 -translate-x-1/2 w-px bg-[#1a1d21] top-0 transition-all duration-[1500ms] ease-out origin-top",
                                lineVisible ? "bottom-0" : "bottom-full"
                            )}
                            aria-hidden="true"
                        />

                        {/* Timeline entries */}
                        <div className="flex flex-col gap-[48px] md:gap-[64px]">
                            {entries.map((entry, index) => (
                                <TimelineEntryItem
                                    key={entry.id}
                                    entry={entry}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
