"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "@/types/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/CTAButton";

interface MobileMenuProps {
    items: NavItem[];
    isOpen: boolean;
    onClose: () => void;
}

export function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
    const [metaExpanded, setMetaExpanded] = useState(false);

    // Reset state when menu closes
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setExpandedItems(new Set());
                setMetaExpanded(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const toggleItem = (label: string) => {
        setExpandedItems((prev) => {
            const next = new Set(prev);
            if (next.has(label)) {
                next.delete(label);
            } else {
                next.add(label);
            }
            return next;
        });
    };

    return (
        <div
            className={cn(
                "absolute top-full left-0 w-full z-40 bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out origin-top",
                isOpen ? "max-h-[85vh] opacity-100 rounded-b-xl" : "max-h-0 opacity-0 rounded-none pointer-events-none"
            )}
            style={{ marginTop: '4px' }}
        >
            <div className="flex flex-col h-full max-h-[85vh] overflow-y-auto">

                {/* ── Header: Logo + Search + Close ── */}
                <div className="flex items-center justify-between px-4 py-3 sticky top-0 bg-white z-10">
                    {/* Logo */}
                    <Link href="/" className="flex shrink-0 items-center" aria-label="AXA Home" onClick={onClose}>
                        <div className="relative h-10 w-10">
                            <Image
                                src="/images/axa-logo.svg"
                                alt="AXA Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Right: Search + Divider + Close */}
                    <div className="flex items-center gap-2">
                        <button
                            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
                            aria-label="Search"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#00008f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className="h-5 w-px bg-gray-200" aria-hidden="true" />

                        <button
                            onClick={onClose}
                            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
                            aria-label="Close menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M18 6L6 18M6 6L18 18" stroke="#00008f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* ── Nav Items ── */}
                <div className="flex flex-col">
                    {items.map((item) => {
                        const hasChildren = item.children && item.children.length > 0;
                        const isExpanded = expandedItems.has(item.label);

                        return (
                            <div key={item.label}>
                                {/* Row */}
                                <div
                                    className="flex items-center justify-between px-4 py-6 relative"
                                >
                                    {/* Label — always a link */}
                                    <Link
                                        href={item.href || "#"}
                                        onClick={onClose}
                                        className="font-['Source_Sans_Pro',sans-serif] font-semibold text-[16px] leading-6 text-[#00008f]"
                                    >
                                        {item.label}
                                    </Link>

                                    {/* + icon (expand) */}
                                    {hasChildren && (
                                        <button
                                            onClick={() => toggleItem(item.label)}
                                            className="flex items-center justify-center w-[22px] h-[22px] text-[#00008f]"
                                            aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label}`}
                                            aria-expanded={isExpanded}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                {isExpanded ? (
                                                    /* Minus icon */
                                                    <path d="M2 7H12" stroke="#00008f" strokeWidth="2" strokeLinecap="round" />
                                                ) : (
                                                    /* Plus icon */
                                                    <>
                                                        <path d="M7 2V12" stroke="#00008f" strokeWidth="2" strokeLinecap="round" />
                                                        <path d="M2 7H12" stroke="#00008f" strokeWidth="2" strokeLinecap="round" />
                                                    </>
                                                )}
                                            </svg>
                                        </button>
                                    )}

                                    {/* Bottom border */}
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-[#f0f0f0]" />
                                </div>

                                {/* Expanded children */}
                                {hasChildren && isExpanded && (
                                    <div className="flex flex-col bg-[#f7f7f8] px-4">
                                        {item.children!.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href || "#"}
                                                onClick={onClose}
                                                className="py-3 px-4 font-['Source_Sans_Pro',sans-serif] text-[16px] leading-6 text-[#00008f]"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* ── CTA Buttons ── */}
                <div className="flex flex-col items-center gap-2 px-4 py-8">
                    <Button variant="secondary" size="lg" fullWidth>
                        Pay your insurance
                    </Button>
                    <Button variant="primary" size="lg" fullWidth>
                        Quote now
                    </Button>
                </div>

                <div className="h-px bg-[#f0f0f0]" />

                {/* ── Meta Header Section (grey background) ── */}
                <div className="flex flex-col">
                    {/* We are AXA — expandable */}
                    <div className="bg-[#f7f7f8]">
                        <button
                            onClick={() => setMetaExpanded(!metaExpanded)}
                            className="flex items-center justify-between w-full p-4"
                        >
                            <span className="font-['Source_Sans_Pro',sans-serif] font-semibold text-[16px] leading-6 text-[#00008f]">
                                We are AXA
                            </span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className={cn("transition-transform duration-200", metaExpanded && "rotate-180")}
                            >
                                <path d="M6 9L12 15L18 9" stroke="#00008f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Expanded links */}
                        {metaExpanded && (
                            <div className="flex flex-col gap-3 px-4 pb-4">
                                <Link href="/about" onClick={onClose} className="font-['Source_Sans_Pro',sans-serif] text-[16px] leading-6 text-[#00008f]">
                                    Who we are
                                </Link>
                                <Link href="#" onClick={onClose} className="font-['Source_Sans_Pro',sans-serif] text-[16px] leading-6 text-[#00008f]">
                                    I want to be AXA
                                </Link>
                                <Link href="#" onClick={onClose} className="font-['Source_Sans_Pro',sans-serif] text-[16px] leading-6 text-[#00008f]">
                                    AXA Mexico Foundation
                                </Link>
                                <Link href="/sustainability" onClick={onClose} className="font-['Source_Sans_Pro',sans-serif] text-[16px] leading-6 text-[#00008f]">
                                    Sustainability
                                </Link>
                                <Link href="#" onClick={onClose} className="font-['Source_Sans_Pro',sans-serif] text-[16px] leading-6 text-[#00008f]">
                                    News
                                </Link>
                            </div>
                        )}

                        <div className="h-px bg-[#f0f0f0]" />
                    </div>

                    {/* Tokenizer */}
                    <div className="bg-[#f7f7f8] flex items-center p-4 relative">
                        <span className="font-['Source_Sans_Pro',sans-serif] font-semibold text-[16px] leading-6 text-[#00008f]">
                            Tokenizer
                        </span>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#f0f0f0]" />
                    </div>

                    {/* Contact */}
                    <div className="bg-[#f7f7f8] flex items-center p-4 relative">
                        <span className="font-['Source_Sans_Pro',sans-serif] font-semibold text-[16px] leading-6 text-[#00008f]">
                            Contact
                        </span>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#f0f0f0]" />
                    </div>

                    {/* Access */}
                    <div className="bg-[#f7f7f8] flex items-center p-4 relative">
                        <span className="font-['Source_Sans_Pro',sans-serif] font-semibold text-[16px] leading-6 text-[#00008f]">
                            Access
                        </span>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#f0f0f0]" />
                    </div>
                </div>

                {/* ── Language Selector ── */}
                <div className="h-[2px] bg-[#dddfe4]" />
                <div className="bg-[#f7f7f8] flex items-center justify-between px-4 py-6">
                    <span className="font-['Source_Sans_Pro',sans-serif] font-semibold text-[14px] leading-[18px] tracking-[1px] uppercase text-[#1a1d21]">
                        English
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6 9L12 15L18 9" stroke="#1a1d21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
