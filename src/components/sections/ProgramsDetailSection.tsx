"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ProgramDetail } from "@/data/healthProgramsDetails";
import { corporateSidebarLabels } from "@/data/healthProgramsDetails";

interface ProgramsDetailSectionProps {
    programs: ProgramDetail[];
    className?: string;
}

export function ProgramsDetailSection({
    programs,
    className,
}: ProgramsDetailSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const activeProgram = programs[activeIndex];

    // Reset scroll and active index when programs list changes (tab switch)
    useEffect(() => {
        setActiveIndex(0);
    }, [programs]);

    // Reset scroll when switching programs
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [activeIndex]);

    return (
        <section
            className={cn(
                "bg-white rounded-[10px] flex flex-col lg:flex-row items-start w-full",
                className
            )}
        >
            {/* Left Sidebar — Vertical Tabs */}
            <div className="w-full lg:w-[326px] shrink-0 bg-[#f7f7f8] rounded-[8px] p-[8px]">
                <div className="relative flex flex-col">
                    {programs.map((program, idx) => {
                        const isActive = idx === activeIndex;
                        const sidebarLabel =
                            corporateSidebarLabels[program.id] || program.title;
                        return (
                            <button
                                key={program.id}
                                onClick={() => setActiveIndex(idx)}
                                className={cn(
                                    "relative z-10 flex items-center justify-between w-full px-[12px] py-[16px] rounded-[8px] text-left text-[18px] font-source-sans leading-[26px] transition-colors duration-200",
                                    isActive
                                        ? "bg-[#00008f] text-white"
                                        : "text-[#00008f] hover:bg-[#eeeef5]"
                                )}
                            >
                                <span>{sidebarLabel}</span>
                                {program.count !== undefined && (
                                    <span className="shrink-0">
                                        ({program.count})
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Right Content — Scrollable */}
            <div
                ref={contentRef}
                className="flex-1 min-w-0 max-h-[600px] overflow-y-auto pt-[32px] px-4 lg:pl-[64px] lg:pr-[16px] pb-[32px] programs-scrollbar"
            >
                {activeProgram && (
                    <div className="flex flex-col gap-[8px]">
                        {/* Title with icon */}
                        <div className="flex items-start gap-[8px] mb-[8px]">
                            <div className="relative shrink-0 w-[35px] h-[32px] mt-[4px]">
                                <Image
                                    src="/images/programs/program-title-icon.svg"
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h2 className="font-brand-text text-[32px] font-bold leading-[40px] text-[#00008f]">
                                {activeProgram.title}
                            </h2>
                        </div>

                        {/* Optional intro paragraph */}
                        {activeProgram.intro && (
                            <p className="font-source-sans text-[16px] leading-[20px] text-[#1a1d21] whitespace-pre-line mb-[8px]">
                                {activeProgram.intro}
                            </p>
                        )}

                        {/* Items — numbered or bullet points */}
                        {activeProgram.bulletPoints ? (
                            <ul className="list-disc ml-[24px] font-source-sans text-[16px] leading-[30px] text-[#1a1d21]">
                                {activeProgram.items.map((item, idx) => (
                                    <li key={idx} className="mb-0">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="font-source-sans text-[16px] leading-[30px] text-[#1a1d21]">
                                {activeProgram.items.map((item, idx) => (
                                    <p key={idx} className="mb-0">
                                        {idx + 1}. {item}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

        </section>
    );
}
