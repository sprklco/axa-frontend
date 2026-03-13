"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";

/* ──────────────────────────────────────────────
   Mobile: Accordion sections data
   ────────────────────────────────────────────── */
interface AccordionSection {
    id: string;
    title: string;
    links: { label: string; href: string }[];
}

const accordionSections: AccordionSection[] = [
    {
        id: "we-are-axa",
        title: "WE ARE AXA",
        links: [
            { label: "AXA and you", href: "/about" },
            { label: "Need help?", href: "/help" },
            { label: "Join our team", href: "/careers" },
            { label: "Complaints", href: "/complaint" },
        ],
    },
    {
        id: "insurance",
        title: "INSURANCE",
        links: [
            { label: "Motor Insurance", href: "/motor" },
            { label: "Medical Insurance", href: "/health-individuals" },
            { label: "Home Insurance", href: "/home-insurance" },
            { label: "Life Insurance", href: "/life-insurance" },
            { label: "SME Insurance", href: "/sme-insurance" },
            { label: "Foreigner Insurance", href: "/foreigner-insurance" },
            { label: "Travel Insurance", href: "/travel-insurance" },
        ],
    },
    {
        id: "reach-us",
        title: "REACH US",
        links: [
            { label: "Contact us", href: "/contact" },
            { label: "AXA Branches", href: "/branches" },
            { label: "Get a Callback", href: "/callback" },
        ],
    },
];

/* ──────────────────────────────────────────────
   Desktop: Column data (same content, flat)
   ────────────────────────────────────────────── */
const desktopColumns = [
    {
        id: "we-are-axa",
        title: "WE ARE AXA",
        links: [
            { label: "AXA and you", href: "/about" },
            { label: "Need help?", href: "/help" },
            { label: "Join our team", href: "/careers" },
            { label: "Complaints", href: "/complaint" },
        ],
    },
    {
        id: "insurance",
        title: "INSURANCE",
        links: [
            { label: "Motor Insurance", href: "/motor" },
            { label: "Medical Insurance", href: "/health-individuals" },
            { label: "Home Insurance", href: "/home-insurance" },
            { label: "Life Insurance", href: "/life-insurance" },
            { label: "SME Insurance", href: "/sme-insurance" },
            { label: "Foreigner Insurance", href: "/foreigner-insurance" },
            { label: "Travel Insurance", href: "/travel-insurance" },
        ],
    },
    {
        id: "reach-us",
        title: "REACH US",
        links: [
            { label: "Contact us", href: "/contact" },
            { label: "AXA Branches", href: "/branches" },
            { label: "Get a Callback", href: "/callback" },
        ],
    },
];

const footerLinks = [
    { label: "FAQ", href: "/faq" },
    { label: "Legal", href: "/legal" },
    { label: "Privacy Notice", href: "/privacy-policy" },
];

const socialLinks = [
    {
        id: "instagram",
        href: "https://instagram.com/axa",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12.3663 9.24445C10.646 9.24445 9.2421 10.6484 9.2421 12.3687C9.2421 14.089 10.646 15.4929 12.3663 15.4929C14.0866 15.4929 15.4905 14.089 15.4905 12.3687C15.4905 10.6484 14.0866 9.24445 12.3663 9.24445ZM21.7366 12.3687C21.7366 11.0749 21.7484 9.79288 21.6757 8.50148C21.603 7.00148 21.2609 5.67023 20.164 4.57335C19.0648 3.47413 17.7359 3.13429 16.2359 3.06163C14.9421 2.98898 13.6601 3.0007 12.3687 3.0007C11.0749 3.0007 9.79288 2.98898 8.50148 3.06163C7.00148 3.13429 5.67023 3.47648 4.57335 4.57335C3.47413 5.67257 3.13429 7.00148 3.06163 8.50148C2.98898 9.79523 3.0007 11.0773 3.0007 12.3687C3.0007 13.6601 2.98898 14.9444 3.06163 16.2359C3.13429 17.7359 3.47648 19.0671 4.57335 20.164C5.67257 21.2632 7.00148 21.603 8.50148 21.6757C9.79523 21.7484 11.0773 21.7366 12.3687 21.7366C13.6624 21.7366 14.9444 21.7484 16.2359 21.6757C17.7359 21.603 19.0671 21.2609 20.164 20.164C21.2632 19.0648 21.603 17.7359 21.6757 16.2359C21.7507 14.9444 21.7366 13.6624 21.7366 12.3687ZM12.3663 17.1757C9.70617 17.1757 7.55929 15.0288 7.55929 12.3687C7.55929 9.70851 9.70617 7.56163 12.3663 7.56163C15.0265 7.56163 17.1734 9.70851 17.1734 12.3687C17.1734 15.0288 15.0265 17.1757 12.3663 17.1757ZM17.3702 8.48742C16.7491 8.48742 16.2476 7.98585 16.2476 7.36476C16.2476 6.74367 16.7491 6.2421 17.3702 6.2421C17.9913 6.2421 18.4929 6.74367 18.4929 7.36476C18.4931 7.51224 18.4642 7.65831 18.4078 7.7946C18.3515 7.93089 18.2688 8.05472 18.1645 8.15901C18.0602 8.26329 17.9364 8.34598 17.8001 8.40234C17.6638 8.45869 17.5177 8.4876 17.3702 8.48742Z" fill="white" />
            </svg>
        ),
    },
    {
        id: "facebook",
        href: "https://facebook.com/axa",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M16.5 1.65144V4.98317H14.592C13.8953 4.98317 13.4253 5.13462 13.1823 5.4375C12.9392 5.74038 12.8177 6.19471 12.8177 6.80048V9.1857H16.3785L15.9045 12.9213H12.8177V22.5H9.09896V12.9213H6V9.1857H9.09896V6.43449C9.09896 4.86959 9.52025 3.65595 10.3628 2.79357C11.2054 1.93119 12.3275 1.5 13.7292 1.5C14.9201 1.5 15.8438 1.55048 16.5 1.65144Z" fill="white" />
            </svg>
        ),
    },
    {
        id: "linkedin",
        href: "https://linkedin.com/company/axa",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.67258 22.5V9.34338H2.26032V22.5H6.67258ZM4.46702 7.54599C6.00566 7.54599 6.96338 6.53572 6.96338 5.27321C6.93471 3.98223 6.00571 3 4.49622 3C2.98696 3 2 3.98225 2 5.27321C2 6.53578 2.95749 7.54599 4.43822 7.54599H4.46689H4.46702ZM9.11476 22.5H13.527V15.1527C13.527 14.7595 13.5557 14.3667 13.6722 14.0856C13.9912 13.2999 14.7172 12.4863 15.936 12.4863C17.5326 12.4863 18.1714 13.6928 18.1714 15.4614V22.4999H22.5834V14.956C22.5834 10.9148 20.4066 9.0345 17.5036 9.0345C15.1233 9.0345 14.0783 10.3531 13.4977 11.2512H13.5271V9.34311H9.11485C9.17276 10.5777 9.11485 22.4997 9.11485 22.4997L9.11476 22.5Z" fill="white" />
            </svg>
        ),
    },
];

/* ──────────────────────────────────────────────
   Phone icon for desktop "Call us"
   ────────────────────────────────────────────── */
const PHONE_ICON = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

/* ──────────────────────────────────────────────
   Mobile: Accordion Item
   ────────────────────────────────────────────── */
function AccordionItem({ section }: { section: AccordionSection }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80"
                aria-expanded={isOpen}
            >
                <span>{section.title}</span>
                <svg
                    className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        isOpen && "rotate-180"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={cn(
                    "grid transition-all duration-200",
                    isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                )}
            >
                <div className="overflow-hidden">
                    <ul className="space-y-3">
                        {section.links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-white/70 transition-colors hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

/* ──────────────────────────────────────────────
   Footer Component
   ────────────────────────────────────────────── */
export function Footer() {
    return (
        <footer className="bg-[#04060c] text-white">

            {/* ═══════════════════════════════════
                MOBILE LAYOUT (< lg)
               ═══════════════════════════════════ */}
            <div className="lg:hidden">
                {/* Social Follow Section */}
                <div className="px-4 pt-12 pb-8 text-center">
                    <p className="mb-6 font-source-sans text-[16px] text-white/60">Follow AXA</p>
                    <div className="flex items-center justify-center gap-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.id}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white transition-colors hover:text-white/70"
                                aria-label={`Follow AXA on ${social.id}`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Accessibility & Contact */}
                <div className="px-4 pb-8 text-center">
                    <p className="mb-2 font-source-sans text-[16px] text-white/60">
                        Accessibility statement :<br />
                        Compliant (AA)
                    </p>
                    <p className="font-source-sans text-[16px] text-white/60">Call us at 04 - 727 000</p>
                </div>

                {/* Accordion Navigation */}
                <nav className="px-4" aria-label="Footer navigation">
                    {accordionSections.map((section) => (
                        <AccordionItem key={section.id} section={section} />
                    ))}
                </nav>

                {/* Footer Links */}
                <div className="flex flex-col items-center gap-4 px-4 py-8">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-source-sans text-[16px] text-white/60 transition-colors hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 px-4 py-6 text-center">
                    <p className="font-source-sans text-[16px] text-white/60">© 2026,AXA, All Rights Reserved</p>
                </div>
            </div>

            {/* ═══════════════════════════════════
                DESKTOP LAYOUT (lg+)
               ═══════════════════════════════════ */}
            <Container className="hidden lg:flex lg:flex-col lg:gap-[50px] lg:px-[128px] lg:pt-[92px]">

                {/* Top Section: 4-column layout */}
                <div className="flex w-full items-start ">

                    {/* Column 1: Follow AXA + Accessibility + Call */}
                    <div className="flex w-[250px] flex-col gap-4">
                        {/* Follow AXA */}
                        <div className="flex flex-col gap-2 px-3">
                            <p className="font-source-sans text-[16px] text-white/60">
                                Follow AXA
                            </p>
                            <div className="flex items-center">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.id}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center rounded-full p-3 text-white transition-colors hover:text-white/70"
                                        aria-label={`Follow AXA on ${social.id}`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Accessibility */}
                        <div className="px-3">
                            <p className="font-source-sans text-[16px] leading-normal text-white/60">
                                Accessibility statement :Compliant (AA)
                            </p>
                        </div>

                        {/* Call us */}
                        <div className="flex items-center gap-2.5">
                            <p className="font-source-sans text-[16px] leading-[24px] text-white">
                                Call us
                            </p>
                            <div className="flex items-center gap-1 text-[#dddfe4]">
                                {PHONE_ICON}
                                <span className="font-source-sans text-[16px] font-semibold leading-[24px]">
                                    04 - 727 000
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Columns 2–4: Link menus */}
                    <div className="flex items-start gap-12">
                        {desktopColumns.map((col) => (
                            <div key={col.id} className="flex w-[160px] flex-col gap-6">
                                <p className="font-source-sans text-[16px] font-bold uppercase leading-normal text-white/60">
                                    {col.title}
                                </p>
                                <ul className="flex flex-col gap-4">
                                    {col.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="font-source-sans text-[16px] leading-normal text-white transition-colors hover:text-white/70"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex w-full items-center justify-center py-6 font-source-sans text-[16px] text-white">
                    <div className="flex flex-1 items-start gap-10">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="transition-colors hover:text-white/70"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <p className="shrink-0 text-right">
                        © 2026,AXA, All Rights Reserved
                    </p>
                </div>
            </Container>
        </footer>
    );
}
