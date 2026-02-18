"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

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
            { label: "About Us", href: "/about" },
            { label: "Our History", href: "/history" },
            { label: "Careers", href: "/careers" },
        ],
    },
    {
        id: "use-your-insurance",
        title: "USE YOUR INSURANCE",
        links: [
            { label: "Make a Claim", href: "/claims" },
            { label: "Find a Doctor", href: "/doctors" },
            { label: "Policy Documents", href: "/documents" },
        ],
    },
    {
        id: "individual-products",
        title: "AXA INDIVIDUAL PRODUCTS",
        links: [
            { label: "Motor Insurance", href: "/motor" },
            { label: "Health Insurance", href: "/health" },
            { label: "Life Insurance", href: "/life" },
            { label: "Home Insurance", href: "/home" },
        ],
    },
    {
        id: "business-products",
        title: "AXA BUSINESS PRODUCTS",
        links: [
            { label: "Commercial Insurance", href: "/commercial" },
            { label: "Employee Benefits", href: "/benefits" },
            { label: "Corporate Solutions", href: "/corporate" },
        ],
    },
    {
        id: "axa-team",
        title: "AXA TEAM",
        links: [
            { label: "Suppliers", href: "/suppliers" },
            { label: "Agents", href: "/agents" },
        ],
    },
];

const footerLinks = [
    { label: "Usage policies", href: "/usage-policies" },
    { label: "FAQ", href: "/faq" },
    { label: "Regulation", href: "/regulation" },
    { label: "Site Map", href: "/sitemap" },
    { label: "Privacy Notice", href: "/privacy" },
    { label: "Help us to improve", href: "/feedback" },
];

const socialLinks = [
    {
        id: "facebook",
        href: "https://facebook.com/axa",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        id: "linkedin",
        href: "https://linkedin.com/company/axa",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        id: "youtube",
        href: "https://youtube.com/axa",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        id: "instagram",
        href: "https://instagram.com/axa",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
        ),
    },
];

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

export function Footer() {
    return (
        <footer className="bg-black text-white">
            {/* Social Follow Section */}
            <div className="px-4 pt-12 pb-8 text-center">
                <p className="mb-6 text-sm text-white/60">Follow AXA</p>
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
                <p className="mb-2 text-sm text-white/60">
                    Accessibility statement :<br />
                    Compliant (AA)
                </p>
                <p className="text-sm text-white/60">Call us at 800 900 1292</p>
            </div>

            {/* Accordion Navigation */}
            <nav className="px-4" aria-label="Footer navigation">
                {accordionSections.map((section) => (
                    <AccordionItem key={section.id} section={section} />
                ))}
            </nav>

            {/* Certification Badges */}
            <div className="flex items-center justify-center gap-4 px-4 py-8">
                <div className="flex items-center gap-4 opacity-80 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                    {/* Top Employer - Placeholder (Extraction failed) */}
                    <div className="flex h-8 items-center rounded bg-white/10 px-2">
                        <span className="text-xs font-bold">TOP</span>
                        <span className="text-[8px] ml-1">EMPLOYER</span>
                    </div>

                    {/* Downloaded Badges */}
                    <div className="relative h-8 w-12">
                        <Image
                            src="/images/badge-aenor.png"
                            alt="AENOR"
                            fill
                            sizes="100px"
                            className="object-contain"
                        />
                    </div>
                    <div className="relative h-8 w-12">
                        <Image
                            src="/images/badge-bureau.png"
                            alt="Bureau Veritas"
                            fill
                            sizes="100px"
                            className="object-contain"
                        />
                    </div>
                    <div className="relative h-8 w-8">
                        <Image
                            src="/images/badge-q.png"
                            alt="Quality"
                            fill
                            sizes="100px"
                            className="object-contain"
                        />
                    </div>
                    <div className="relative h-8 w-8">
                        <Image
                            src="/images/badge-check.png"
                            alt="Certified"
                            fill
                            sizes="100px"
                            className="object-contain"
                        />
                    </div>

                    {/* Calidad AXA - Placeholder (Extraction failed) */}
                    <div className="flex h-8 items-center rounded bg-white/10 px-2">
                        <span className="text-xs">Calidad</span>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col items-center gap-4 px-4 py-8">
                {footerLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 px-4 py-6 text-center">
                <p className="text-sm text-white/60">© 2026, All Rights Reserved</p>
            </div>
        </footer>
    );
}
