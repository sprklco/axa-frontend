"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { ChevronUp, ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types/faq";

interface AccordionSectionProps {
    items: FaqItem[];
    /** Index of the item that should be open by default */
    defaultOpenIndex?: number;
    className?: string;
}

export function AccordionSection({
    items,
    defaultOpenIndex = 0,
    className,
}: AccordionSectionProps) {
    const [openId, setOpenId] = useState<string | null>(
        items[defaultOpenIndex]?.id ?? null
    );

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <div
            className={cn(
                "flex flex-col gap-[12px] w-full max-w-[918px] mx-auto",
                className
            )}
        >
            {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                    <div
                        key={item.id}
                        className={cn(
                            "rounded-[8px] overflow-hidden transition-colors",
                            isOpen ? "bg-white" : "bg-[#f7f7f8]"
                        )}
                    >
                        {/* Question button */}
                        <button
                            type="button"
                            onClick={() => toggle(item.id)}
                            className="flex w-full items-center justify-between p-[24px] text-left cursor-pointer"
                            aria-expanded={isOpen}
                        >
                            <span
                                className={cn(
                                    "font-source-sans text-[18px] font-semibold leading-[26px] pr-4",
                                    isOpen
                                        ? "text-[#1a1d21]"
                                        : "text-[#00008f]"
                                )}
                            >
                                {item.question}
                            </span>
                            <span
                                className={cn(
                                    "shrink-0",
                                    isOpen
                                        ? "text-[#1a1d21]"
                                        : "text-[#00008f]"
                                )}
                            >
                                {isOpen ? (
                                    <ChevronUp className="h-6 w-6" />
                                ) : (
                                    <ChevronDown className="h-6 w-6" />
                                )}
                            </span>
                        </button>

                        {/* Answer panel */}
                        <div
                            className={cn(
                                "grid transition-all duration-300 ease-in-out",
                                isOpen
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                            )}
                        >
                            <div className="overflow-hidden">
                                <div className="px-[24px] pb-[24px]">
                                    <p className="font-source-sans text-[18px] leading-[26px] text-[#434956]">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
