"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { META_HEADER_LINKS } from "@/data/metaHeaderLinks";

export function MetaHeader() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="hidden lg:flex w-full bg-white h-[42px] px-[24px] py-[4px] items-start relative z-60 shrink-0">
            <div style={{ background: "none" }} className="w-[1440px] mx-auto h-[42px] flex items-center justify-between px-[24px] py-[4px] relative bg-white">
                {/* Left empty container matching design spacing considerations or left chips if any added later */}
                <div className="flex gap-[4px] items-center justify-center py-[4px] shrink-0" />

                {/* Right links */}
                <div className="flex gap-[20px] items-center justify-center pl-[12px] py-[4px] shrink-0 relative pr-0">
                    {META_HEADER_LINKS.map((link, index) => {
                        const hasDropdown = Boolean(link.children);
                        const isLast = index === META_HEADER_LINKS.length - 1;

                        if (hasDropdown) {
                            return (
                                <div key={link.label} className="relative flex items-center" ref={dropdownRef}>
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className={cn(
                                            "flex gap-[8px] items-center justify-center px-[8px] py-[2px] rounded-[4px] shrink-0 transition-colors hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00008f]/50",
                                            isDropdownOpen && "bg-[#00008f]/5" // Approximate active background state from nav
                                        )}
                                        aria-expanded={isDropdownOpen}
                                        aria-haspopup="true"
                                    >
                                        <span className="font-['Source_Sans_Pro',sans-serif] font-semibold text-[14px] leading-[22px] text-[#00008f]">
                                            {link.label}
                                        </span>
                                        <svg
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={cn("w-[10px] h-[6px] shrink-0 transition-transform duration-200", isDropdownOpen && "rotate-180")}
                                        >
                                            <path d="M1 1L5 5L9 1" stroke="#00008f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div
                                        className={cn(
                                            "absolute right-0 top-full mt-[4px] w-[208px] bg-white border-x border-b border-[rgba(0,0,0,0.2)] rounded-b-[4px] flex flex-col items-center justify-end overflow-clip shadow-sm pt-[4px] transition-all duration-200 origin-top",
                                            isDropdownOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                                        )}
                                    >
                                        <div className="flex flex-col items-center justify-end overflow-clip px-[8px] w-full">
                                            {link.children?.map((child, childIndex) => {
                                                const isLastChild = childIndex === link.children!.length - 1;
                                                return (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        className={cn(
                                                            "flex h-[54px] w-[192px] items-center justify-center px-[12px] py-[16px] transition-colors hover:bg-[#00008f]/5 focus:outline-none focus:bg-[#00008f]/5",
                                                            !isLastChild && "border-b-[0.333px] border-solid border-[rgba(0,0,0,0.05)]"
                                                        )}
                                                        onClick={() => setIsDropdownOpen(false)}
                                                    >
                                                        <span className="font-['Source_Sans_3',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.43px] text-[#00008f] text-center whitespace-nowrap">
                                                            {child.label}
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {!isLast && (
                                        <div className="absolute -right-[10px] top-1/2 -translate-y-1/2 w-px h-[18px] bg-[rgba(0,0,0,0.2)]" aria-hidden="true" />
                                    )}
                                </div>
                            );
                        }

                        return (
                            <div key={link.label} className="relative flex items-center">
                                <Link
                                    href={link.href}
                                    className="flex gap-[8px] items-center justify-center px-[8px] py-[2px] rounded-[4px] shrink-0 transition-colors hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00008f]/50"
                                >
                                    <span className="font-['Source_Sans_Pro',sans-serif] font-semibold text-[14px] leading-[22px] text-[#00008f]">
                                        {link.label}
                                    </span>
                                </Link>

                                {!isLast && (
                                    <div className="absolute -right-[10.5px] top-1/2 -translate-y-1/2 w-px h-[18px] bg-[rgba(0,0,0,0.2)]" aria-hidden="true" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
