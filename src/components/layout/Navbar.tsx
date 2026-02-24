"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/CTAButton";
import { MobileMenu } from "./MobileMenu";

interface NavChipDropdown {
    /** Left block */
    image: string;
    subtitle: string;
    heading: string;
    ctaLabel: string;
    ctaHref: string;
    /** Right block — sitemap links */
    links: { label: string; href: string }[];
}

interface NavChipConfig {
    label: string;
    href: string;
    dropdown?: NavChipDropdown;
}

const NAV_CHIPS: NavChipConfig[] = [
    {
        label: "Motor",
        href: "/motor",
        dropdown: {
            image: "/images/motor-insurance.png",
            subtitle: "Motor Quotation",
            heading: "Calculate your motor insurance and drive towards your best choice",
            ctaLabel: "Quote now",
            ctaHref: "#",
            links: [
                { label: "Compulsory", href: "#" },
                { label: "Third Party Liability", href: "#" },
                { label: "All Risk", href: "#" },
            ],
        },
    },
    {
        label: "Medical",
        href: "#",
        dropdown: {
            image: "/images/health-insurance.png",
            subtitle: "Health Quotation",
            heading: "Calculate your health insurance now",
            ctaLabel: "Quote now",
            ctaHref: "#",
            links: [
                { label: "Individual medical insurance", href: "/medical-individuals" },
                { label: "Corporate medical insurance", href: "/health-corporate" },
            ],
        },
    },
    { label: "Home", href: "#" },
    { label: "Life", href: "#" },
    { label: "SME", href: "#" },
    { label: "Foreigner", href: "#" },
    { label: "Travel", href: "#" },
    { label: "Marine", href: "#" },
];

/* ------------------------------------------------------------------ */
/*  MainNavbar                                                         */
/* ------------------------------------------------------------------ */

/**
 * Main Navbar with logo, search, and menu
 * Mobile: logo + search + hamburger
 * Desktop (lg+): logo + nav chips + search + Pay/Quote CTA buttons
 * Nav chips with dropdown show an animated panel on hover
 */
const QUOTE_ITEMS = [
    { label: "Motor Quotation", icon: "/images/quote/icon-motor.svg", href: "#" },
    { label: "Medical Quotation", icon: "/images/quote/icon-medical.svg", href: "#" },
    { label: "Home Quotation", icon: "/images/quote/icon-home.svg", href: "#" },
    { label: "Life Quotation", icon: "/images/quote/icon-life.svg", href: "#" },
    { label: "SME Quotation", icon: "/images/quote/icon-sme.svg", href: "#" },
    { label: "Foreigner Quotation", icon: "/images/quote/icon-foreigner.svg", href: "#" },
    { label: "Travel Quotation", icon: "/images/quote/icon-travel.svg", href: "#" },
    { label: "Marine Quotation", icon: "/images/quote/icon-marine.svg", href: "#" },
    { label: "Call 04 - 727 000", icon: null, href: "tel:04727000" },
];

export function MainNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeChip, setActiveChip] = useState<string | null>(null);
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);
    const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const quoteRef = useRef<HTMLDivElement>(null);

    /** Schedule opening a chip dropdown (debounced) */
    const openChip = useCallback((label: string) => {
        if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = setTimeout(() => setActiveChip(label), 150);
        setIsQuoteOpen(false);
    }, []);

    /** Schedule closing the dropdown (debounced) */
    const scheduleClose = useCallback(() => {
        if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = setTimeout(() => setActiveChip(null), 150);
    }, []);

    /** Cancel any pending close (stays open when moving between chip & panel) */
    const cancelClose = useCallback(() => {
        if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    }, []);

    /** Close immediately */
    const closeDropdown = useCallback(() => {
        if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
        setActiveChip(null);
    }, []);

    /** Close on Escape */
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeDropdown();
                setIsQuoteOpen(false);
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [closeDropdown]);

    /** Close quote dropdown on click outside */
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (quoteRef.current && !quoteRef.current.contains(e.target as Node)) {
                setIsQuoteOpen(false);
            }
        };
        document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick);
    }, []);

    /** Cleanup timer on unmount */
    useEffect(() => {
        return () => {
            if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
        };
    }, []);

    const activeDropdown = NAV_CHIPS.find((c) => c.label === activeChip)?.dropdown ?? null;
    const isDropdownOpen = activeDropdown !== null;

    // Mobile menu nav items
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
            href: "/motor",
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
            href: "#",
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
        <div ref={navRef} className="sticky top-[14px] z-50 bg-transparent px-4 lg:px-[72px] pb-4 pt-[7px]">
            <header
                className="flex h-16 lg:h-[72px] items-center justify-between rounded-xl bg-white px-4 lg:px-6 shadow-sm"
                role="banner"
            >
                {/* Logo */}
                <Link href="/" className="flex shrink-0 items-center" aria-label="AXA Home">
                    <div className="relative h-10 w-10">
                        <Image
                            src="/images/axa-logo.svg"
                            alt="AXA Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                {/* ===== Desktop Nav (lg+) ===== */}
                <div className="hidden lg:flex flex-1 items-center justify-end ">
                    {/* Nav Chips */}
                    <nav className="flex items-center gap-5 mr-6" aria-label="Main navigation">
                        {NAV_CHIPS.map((chip) => (
                            <Link
                                href={chip.href}
                                key={chip.label}
                                onMouseEnter={() => chip.dropdown ? openChip(chip.label) : closeDropdown()}
                                onMouseLeave={scheduleClose}
                                className={cn(
                                    "rounded-[4px] px-2 py-0.5 text-[16px] font-semibold leading-6 text-[#00008f]",
                                    "font-['Source_Sans_Pro',sans-serif]",
                                    "transition-colors hover:bg-[#00008f]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00008f]/50",
                                    activeChip === chip.label && "bg-[#00008f]/10"
                                )}
                                aria-expanded={chip.dropdown ? activeChip === chip.label : undefined}
                                aria-haspopup={chip.dropdown ? "true" : undefined}
                            >
                                {chip.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4 py-1">
                        {/* Search Button */}
                        <button
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00008f]/50"
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

                        {/* Pay your insurance — outlined button */}
                        <Button variant="secondary" size="sm">
                            Pay your insurance
                        </Button>

                        {/* Quote your insurance — filled primary button + dropdown */}
                        <div ref={quoteRef} className="relative">
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() => {
                                    setIsQuoteOpen((prev) => !prev);
                                    closeDropdown();
                                }}
                                aria-expanded={isQuoteOpen}
                                aria-haspopup="true"
                            >
                                <span className="inline-flex items-center gap-2">
                                    Quote your insurance
                                    {/* Dropdown chevron */}
                                    <svg
                                        width="12"
                                        height="8"
                                        viewBox="0 0 12 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className={cn(
                                            "shrink-0 transition-transform duration-200",
                                            isQuoteOpen && "rotate-180"
                                        )}
                                    >
                                        <path
                                            d="M1 1.5L6 6.5L11 1.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </Button>

                            {/* Quote Dropdown Panel */}
                            <div
                                className={cn(
                                    "absolute right-0 top-[calc(100%+8px)] z-50 w-[208px] overflow-hidden rounded-lg bg-white shadow-lg border border-black/5 transition-all duration-200",
                                    isQuoteOpen
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 -translate-y-1 pointer-events-none"
                                )}
                                role="menu"
                                aria-label="Quote your insurance options"
                            >
                                <div className="flex flex-col px-2 pt-6 pb-[19px]">
                                    {QUOTE_ITEMS.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="flex items-center gap-2 border-b border-black/5 px-3 py-4 text-[16px] font-normal leading-[22px] tracking-[-0.43px] text-[#00008f] font-['Source_Sans_3',sans-serif] transition-colors hover:bg-[#00008f]/5"
                                            role="menuitem"
                                            onClick={() => setIsQuoteOpen(false)}
                                        >
                                            {item.icon && (
                                                <Image
                                                    src={item.icon}
                                                    alt=""
                                                    width={21}
                                                    height={21}
                                                    className="shrink-0"
                                                />
                                            )}
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== Mobile Actions (<lg) ===== */}
                <div className="flex items-center gap-2 lg:hidden">
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

            {/* ===== Desktop Dropdown Panel ===== */}
            <div
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                className={cn(
                    "absolute left-0 right-0 top-full z-50 hidden lg:block overflow-hidden transition-all duration-300 ease-in-out px-4 lg:px-[72px]",
                    isDropdownOpen
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none"
                )}
                role="region"
                aria-label={activeChip ? `${activeChip} dropdown` : undefined}
            >
                {activeDropdown && (
                    <div className="rounded-b-xl bg-white px-6 py-10 shadow-lg">
                        <div className="flex items-start  gap-36">
                            {/* Left Block — Image + Content */}
                            <div className="flex flex-col gap-3">
                                <div className="relative h-[168px] w-[305px] overflow-hidden rounded-lg">
                                    <Image
                                        src={activeDropdown.image}
                                        alt={activeDropdown.subtitle}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[16px] font-semibold leading-6 text-[#606776] font-['Source_Sans_Pro',sans-serif]">
                                        {activeDropdown.subtitle}
                                    </p>
                                    <div className="max-w-[305px] max-h-[96px] overflow-hidden text-[24px] font-light leading-8 text-[#1a1d21] font-['Publico_Headline_Web',serif]">
                                        {activeDropdown.heading}
                                    </div>
                                </div>
                                <Link
                                    href={activeDropdown.ctaHref}
                                    className="flex items-center gap-1 text-[16px] font-semibold leading-6 text-[#00008f] font-['Source_Sans_Pro',sans-serif] transition-colors hover:text-[#00007a]"
                                >
                                    {activeDropdown.ctaLabel}
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M5 12H19M19 12L12 5M19 12L12 19"
                                            stroke="#00008f"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>

                            {/* Right Block — Sitemap Links */}
                            <div className="flex w-[392px] flex-col gap-4">
                                {activeDropdown.links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-[18px] font-normal leading-[26px] text-[#00008f] font-['Source_Sans_Pro',sans-serif] transition-colors hover:text-[#00007a] hover:underline"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Menu Dropdown */}
            <div className="relative w-full lg:hidden">
                <MobileMenu
                    items={navItems}
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                />
            </div>

            {/* Scrim — fixed overlay inside the sticky container, no layout shift */}
            {isDropdownOpen && (
                <div
                    className="fixed inset-0 -z-10 hidden bg-black/20 lg:block"
                    onClick={closeDropdown}
                    aria-hidden="true"
                />
            )}
        </div>
    );
}

