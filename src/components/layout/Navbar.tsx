"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { MobileMenu } from "./MobileMenu";

type NavTab = "individuals" | "corporate";

/**
 * Top section with Individuals/Corporate tabs
 * White background, non-sticky, sits above everything
 */
export function TopTabs() {
    const [activeTab, setActiveTab] = useState<NavTab>("individuals");

    return (
        <div className="w-full bg-white px-4 py-3">
            <div className="flex items-center gap-1">
                <button
                    onClick={() => setActiveTab("individuals")}
                    className={cn(
                        "rounded-md px-4 py-2 text-sm font-semibold transition-colors",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00008f]/50",
                        activeTab === "individuals"
                            ? "bg-[#00008f] text-white"
                            : "bg-transparent text-[#00008f] hover:bg-gray-100"
                    )}
                    aria-pressed={activeTab === "individuals"}
                >
                    Individuals
                </button>
                <button
                    onClick={() => setActiveTab("corporate")}
                    className={cn(
                        "rounded-md px-4 py-2 text-sm font-semibold transition-colors",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00008f]/50",
                        activeTab === "corporate"
                            ? "bg-[#00008f] text-white"
                            : "bg-transparent text-[#00008f] hover:bg-gray-100"
                    )}
                    aria-pressed={activeTab === "corporate"}
                >
                    Corporate
                </button>
            </div>
        </div>
    );
}

/**
 * Main Navbar with logo, search, and menu
 * Sticky at top when scrolling
 */
export function MainNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Mock data matching Figma design
    const navItems = [
        {
            label: "Use your insurance",
            href: "#",
            children: [
                { label: "Report a claim", href: "#" },
                { label: "Track a claim", href: "#" },
            ]
        },
        {
            label: "Motor",
            href: "#",
            children: [
                { label: "Car Insurance", href: "#" },
                { label: "Motorcycle Insurance", href: "#" },
            ]
        },
        {
            label: "Medical",
            href: "#",
            children: [
                { label: "Health Insurance", href: "#" },
                { label: "Dental Insurance", href: "#" },
            ]
        },
        {
            label: "Damages",
            href: "#",
            children: [
                { label: "Home Insurance", href: "#" },
                { label: "Business Insurance", href: "#" },
            ]
        },
        {
            label: "Life",
            href: "#",
            children: [
                { label: "Life Insurance", href: "#" },
                {
                    label: "Savings", href: "#", children: [
                        { label: "Insurance", href: "#" },
                        { label: "Savings", href: "#" },
                    ]
                },
            ]
        },
        {
            label: "General Terms and Conditions",
            href: "#", // Plain link in design, no children
            variant: "secondary" as const
        },
        {
            label: "Regulation",
            href: "#",
            children: [
                { label: "Regulations", href: "#" },
            ]
        },
    ];

    return (
        <div className="sticky top-[14px] z-50 mt-7 bg-transparent px-4 pb-4">
            <header
                className="flex h-16 items-center justify-between rounded-xl bg-white px-4 shadow-sm"
                role="banner"
            >
                {/* Logo */}
                <Link href="/" className="flex items-center" aria-label="AXA Home">
                    <div className="relative h-10 w-10">
                        <Image
                            src="/images/axa-logo.svg"
                            alt="AXA Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* Search Button */}
                    <button
                        className="flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00008f]/50"
                        aria-label="Search"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                stroke="#00008f"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Divider */}
                    <div className="h-5 w-px bg-gray-200" aria-hidden="true" />

                    {/* Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00008f]/50"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M4 6H20M4 12H20M4 18H20"
                                stroke="#00008f"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Dropdown */}
            <div className="relative w-full">
                <MobileMenu
                    items={navItems}
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                />
            </div>
        </div>
    );
}
