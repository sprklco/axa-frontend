"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type {
    ProgramDetail,
    ProgramGroup,
} from "@/data/healthProgramsDetails";

interface ProgramsDetailSectionProps {
    groups: ProgramGroup[];
    className?: string;
}

/** Active selection state — which group and optionally which sub-tab */
interface ActiveSelection {
    groupIndex: number;
    /** null means the parent/group itself is selected */
    subTabIndex: number | null;
}

function getActiveProgram(
    groups: ProgramGroup[],
    sel: ActiveSelection
): ProgramDetail | undefined {
    const group = groups[sel.groupIndex];
    if (!group) return undefined;
    if (sel.subTabIndex === null) return group.detail;
    return group.subTabs[sel.subTabIndex];
}

export function ProgramsDetailSection({
    groups,
    className,
}: ProgramsDetailSectionProps) {
    const [active, setActive] = useState<ActiveSelection>({
        groupIndex: 0,
        subTabIndex: null,
    });
    const contentRef = useRef<HTMLDivElement>(null);
    const activeProgram = getActiveProgram(groups, active);

    // Reset selection when groups change (tab switch between Individual/Corporate)
    useEffect(() => {
        setActive({ groupIndex: 0, subTabIndex: null });
    }, [groups]);

    // Reset scroll when switching programs
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [active]);

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
                    {groups.map((group, gIdx) => {
                        const isGroupActive =
                            gIdx === active.groupIndex &&
                            active.subTabIndex === null;

                        return (
                            <div key={group.id}>
                                {/* Parent tab */}
                                <button
                                    onClick={() =>
                                        setActive({
                                            groupIndex: gIdx,
                                            subTabIndex: null,
                                        })
                                    }
                                    className={cn(
                                        "relative z-10 flex items-center w-full px-[12px] py-[16px] rounded-[8px] text-left text-[18px] font-source-sans font-bold leading-[26px] transition-colors duration-200",
                                        isGroupActive
                                            ? "bg-[#00008f] text-white"
                                            : "text-[#00008f] hover:bg-[#eeeef5]"
                                    )}
                                >
                                    {group.title}
                                </button>

                                {/* Sub-tabs */}
                                {group.subTabs.map((subTab, sIdx) => {
                                    const isSubActive =
                                        gIdx === active.groupIndex &&
                                        sIdx === active.subTabIndex;

                                    return (
                                        <button
                                            key={subTab.id}
                                            onClick={() =>
                                                setActive({
                                                    groupIndex: gIdx,
                                                    subTabIndex: sIdx,
                                                })
                                            }
                                            className={cn(
                                                "relative z-10 flex items-center gap-[12px] w-full pl-[12px] pr-[16px] py-[16px] text-left text-[18px] font-source-sans leading-[26px] transition-colors duration-200 border-b border-[#dddfe4]",
                                                isSubActive
                                                    ? "bg-[#00008f] text-white rounded-[8px] border-transparent"
                                                    : "text-[rgba(43,48,59,0.4)] hover:bg-[#eeeef5]"
                                            )}
                                        >
                                            {/* Dash indicator */}
                                            <span
                                                className={cn(
                                                    "shrink-0 w-[13px] h-[2px]",
                                                    isSubActive
                                                        ? "bg-white"
                                                        : "bg-[rgba(43,48,59,0.4)]"
                                                )}
                                            />
                                            <span>{subTab.title}</span>
                                        </button>
                                    );
                                })}
                            </div>
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
