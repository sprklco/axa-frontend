"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import type { LeadershipTab, TeamMember } from "@/types/about";

interface LeadershipSectionProps {
    eyebrow: string;
    heading: string;
    description: string;
    tabs: LeadershipTab[];
    className?: string;
}

function MemberCard({ member }: { member: TeamMember }) {
    return (
        <div className="relative flex h-[240px] md:h-[265px] w-full md:w-[265px] flex-col items-center justify-between overflow-hidden rounded-[8px]">
            {/* Photo */}
            <Image
                src={member.imageSrc}
                alt={member.name}
                fill
                className="object-cover"
                sizes="265px"
            />

            {/* Name overlay */}
            <div className="relative mt-auto flex w-full flex-col items-start justify-center rounded-[12px] bg-[rgba(83,83,83,0.5)] px-2.5 pb-3 pt-2.5 backdrop-blur-[12px]">
                <p className="font-brand-text text-[20px] font-bold leading-[32px] text-white">
                    {member.name}
                </p>
                <p className="font-source-sans text-[12px] leading-[16px] text-white whitespace-pre-line">
                    {member.role}
                </p>
            </div>
        </div>
    );
}

export function LeadershipSection({
    eyebrow,
    heading,
    description,
    tabs,
    className,
}: LeadershipSectionProps) {
    const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? "");
    const activeTab = tabs.find((t) => t.id === activeTabId) ?? tabs[0];

    return (
        <section
            className={`flex flex-col items-center bg-white py-16 ${className ?? ""}`}
        >
            <Container className="flex flex-col items-center gap-4">
                {/* Titles */}
                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="font-source-sans text-[18px] font-semibold leading-[26px] text-[#606776]">
                        {eyebrow}
                    </p>
                    <h2 className="font-headline text-[48px] font-light leading-[56px] text-[#1a1d21]">
                        {heading}
                    </h2>
                    <p className="max-w-[750px] font-source-sans text-[18px] leading-[26px] text-[#1a1d21]">
                        {activeTab?.description ?? description}
                    </p>
                </div>

                {/* Tab switcher */}
                <div className="mt-4 flex items-center rounded-full bg-[#fafafa] p-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTabId(tab.id)}
                            className={`rounded-full px-[18px] py-[13px] font-source-sans text-[18px] leading-[26px] transition-colors ${activeTabId === tab.id
                                ? "bg-[#00008f] text-white"
                                : "text-[#00008f]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Members grid */}
                <div className="mt-[30px] grid w-full md:w-fit grid-cols-2 md:grid-cols-4 gap-4">
                    {activeTab?.members.map((member, idx) => (
                        <MemberCard key={`${activeTabId}-${idx}`} member={member} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
