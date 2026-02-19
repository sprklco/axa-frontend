"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "@/types/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/CTAButton";
import { ChevronRight, ChevronLeft, Plus, Search, X } from "lucide-react";

interface MobileMenuProps {
    items: NavItem[];
    isOpen: boolean;
    onClose: () => void;
}

export function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
    const [history, setHistory] = useState<NavItem[]>([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

    // Reset history when menu closes
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => setHistory([]), 300); // Reset after transition
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const currentItem = history.length > 0 ? history[history.length - 1] : null;
    const currentItems = currentItem ? currentItem.children || [] : items;

    const pushToHistory = (item: NavItem) => {
        if (item.children && item.children.length > 0) {
            setDirection('forward');
            setIsAnimating(true);
            setHistory([...history, item]);
            setTimeout(() => setIsAnimating(false), 300);
        }
    };

    const popFromHistory = () => {
        setDirection('backward');
        setIsAnimating(true);
        setHistory(history.slice(0, -1));
        setTimeout(() => setIsAnimating(false), 300);
    };

    return (
        <div
            className={cn(
                "absolute top-full left-0 w-full z-40 bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out origin-top",
                isOpen ? "max-h-[85vh] opacity-100 rounded-b-xl" : "max-h-0 opacity-0 rounded-none pointer-events-none"
            )}
            style={{
                // Using margin to align perfectly with the floating navbar if needed, 
                // but usually top-full works best. 
                marginTop: '4px'
            }}
        >
            <div className="flex flex-col h-full max-h-[85vh]">

                {/* Header for Sub-levels (Back button) */}
                {history.length > 0 && (
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-white z-10 sticky top-0">
                        <button
                            onClick={popFromHistory}
                            className="flex items-center gap-1 text-[#00008f] font-semibold"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span>Back</span>
                        </button>
                    </div>
                )}

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-x-hidden relative">
                    {/* 
                        We render the CURRENT view. 
                        For complex animations (slide-in/out), we'd usually render both and translate them.
                        For simplicity and performance without extra libs, we'll just render the current state
                        but add a key to force re-render with animation if desired, 
                        OR use a sliding container approach. 
                        
                        Let's use a sliding container approach for the "drift".
                     */}
                    <div className={cn(
                        "w-full transition-transform duration-300 ease-out",
                        // This is a simplified transition. For full "slide-over" we'd need to keep previous render.
                        // Given generic constraints, a simple fade/slide or just quick switch is safer unless we build a full TransitionGroup.
                        isAnimating ? (direction === 'forward' ? "translate-x-[10%]" : "translate-x-[-10%]") : "translate-x-0"
                    )}>
                        <div className={cn(
                            "flex flex-col transition-opacity duration-200",
                            isAnimating ? "opacity-50" : "opacity-100"
                        )}>
                            {/* Title of current section if deep */}
                            {currentItem && (
                                <div className="px-4 py-4 pb-2">
                                    <h2 className="text-2xl font-bold text-[#00008f]">{currentItem.label}</h2>
                                    {/* Optional Description if data had it */}
                                </div>
                            )}

                            {/* Use Your Insurance / Contextual Header if at Root */}
                            {history.length === 0 && (
                                <div className="px-4 py-4 pt-6">
                                    {/* "We are AXA" or similar usually goes here in data, but let's stick to list */}
                                </div>
                            )}

                            {currentItems.map((item, index) => (
                                <div key={index} className="border-b border-gray-100 last:border-none flex items-center justify-between px-4 py-5 bg-white hover:bg-gray-50 transition-colors">
                                    {/* Main Label Interaction */}
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            onClick={onClose} // Close menu on navigation
                                            className={cn(
                                                "flex-1 text-left text-lg",
                                                item.variant === 'secondary' ? "text-[#00008f] font-semibold" : "text-[#00008f] font-semibold"
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => item.children ? pushToHistory(item) : null}
                                            className={cn(
                                                "flex-1 text-left text-lg",
                                                item.variant === 'secondary' ? "text-[#00008f] font-semibold" : "text-[#00008f] font-semibold"
                                            )}
                                        >
                                            {item.label}
                                        </button>
                                    )}

                                    {/* Drill-down Action */}
                                    {item.children && item.children.length > 0 && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent any parent clicks if we nested them (we didn't, but good practice)
                                                pushToHistory(item);
                                            }}
                                            className="p-2 -mr-2 text-[#00008f] hover:bg-gray-100 rounded-full"
                                            aria-label={`Open ${item.label} submenu`}
                                        >
                                            <Plus className="w-6 h-6" />
                                        </button>
                                    )}
                                </div>
                            ))}

                            {/* Show Footer Actions only at Root Level */}
                            {history.length === 0 && (
                                <>
                                    <div className="px-4 py-8 flex flex-col items-center gap-4">
                                        <Button variant="secondary" size="lg" fullWidth>
                                            Pay your insurance
                                        </Button>
                                        <Button variant="primary" size="lg" fullWidth>
                                            Quote now
                                        </Button>
                                    </div>

                                    {/* Info / Meta Section */}
                                    {/* Hardcoding "We are AXA" as requested in previous step, but enabling navigation if it was data-driven would be better. */}
                                    <div className="bg-[#f7f7f8] p-4">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center justify-between text-[#00008f] font-semibold">
                                                <span>We are AXA</span>
                                                {/* If we want this to be drill-down too: */}
                                                <ChevronRight className="w-5 h-5 opacity-0" />
                                            </div>
                                            {/* Flattened for now or use static links */}
                                            <Link href="#" className="text-[#00008f] px-2">Who we are</Link>
                                            <Link href="#" className="text-[#00008f] px-2">I want to be AXA</Link>
                                            <Link href="#" className="text-[#00008f] px-2">AXA Mexico Foundation</Link>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col gap-4">
                                            <Link href="#" className="font-semibold text-[#00008f]">Tokenizer</Link>
                                            <Link href="#" className="font-semibold text-[#00008f]">Contact</Link>
                                            <Link href="#" className="font-semibold text-[#00008f]">Access</Link>
                                        </div>
                                    </div>


                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
