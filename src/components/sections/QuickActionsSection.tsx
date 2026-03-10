"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";
import type { QuickActionsSectionData, QuickActionCard } from "@/types/quickActions";

interface QuickActionsSectionProps {
    data: QuickActionsSectionData;
    className?: string;
}

/* ──────────────────────────────────────────────
   Card icons — shared between mobile & desktop
   ────────────────────────────────────────────── */
const ICON_CAR_ACCIDENT = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96.2472 75.8586"
        fill="none"
        className="h-full w-full"
    >
        <g id="Icon">
            <path
                d="M55.9101 22.5256L50.2461 13.7585L63.9541 15.5511L68.3527 2.50589L73.9112 13.3217C74.4385 14.346 75.6737 14.7678 76.7131 14.3008L90.0295 8.26024L82.7235 23.0077L93.9611 29.9671L83.1453 33.5975C82.1963 33.9138 81.5938 34.8628 81.6841 35.857L83.07 49.324L77.4964 44.6091"
                stroke="#00008F"
                strokeWidth="1.957"
                strokeMiterlimit="10"
            />
            <path
                d="M0 9.97733H6.29665C10.3187 9.97733 11.2828 10.7456 15.9525 14.4362C19.1611 16.9669 28.4102 25.0561 28.7718 25.3725C29.54 26.0504 29.7961 27.1199 29.4496 28.0689C29.0881 29.0179 28.1843 29.6506 27.16 29.6506H0"
                stroke="#00008F"
                strokeWidth="1.957"
                strokeLinejoin="round"
            />
            <path
                d="M55.4959 54.3398C61.9432 67.0084 49.3499 79.5866 36.6813 73.1243C34.6025 72.0547 32.8852 70.3525 31.8308 68.2587C25.3835 55.6051 37.9617 43.0118 50.6303 49.4742C52.7091 50.5437 54.4264 52.2459 55.4959 54.3398Z"
                stroke="#00008F"
                strokeWidth="1.957"
                strokeLinejoin="round"
            />
            <path d="M2.03125 39.4117H7.06254" stroke="#00008F" strokeWidth="1.957" strokeLinejoin="round" />
            <path d="M65.7383 40.7671H71.0709" stroke="#00008F" strokeWidth="1.957" strokeLinejoin="round" />
            <path d="M0 61.2993H30.0974" stroke="#00008F" strokeWidth="1.957" strokeLinejoin="round" />
            <path
                d="M55.3289 55.1876H58.211L64.0984 48.5152V35.1297C64.0984 31.7732 61.6352 28.701 58.4546 28.0378L39.8856 22.191C39.8856 22.191 26.2701 10.9575 21.9391 7.34383C16.4036 2.7151 13.3313 1.10452 6.88896 1.10452H0"
                stroke="#00008F"
                strokeWidth="1.957"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);

const ICON_MECHANICAL = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="87"
        viewBox="0 0 60 87"
        fill="none"
        className="h-full w-full"
    >
        <g clipPath="url(#clip0_17361_57682)">
            <path d="M57.045 85.8254C58.2785 83.6572 58.8371 81.3717 58.8371 79.4496V67.2136C58.8371 64.9867 57.045 63.1818 54.834 63.1818C53.2281 63.1818 51.8433 64.1311 51.2149 65.5024V63.0997C51.2149 60.8143 49.3646 58.9624 47.0954 58.9624C45.2102 58.9624 43.6276 60.24 43.1388 61.9746C43.1388 58.939 41.7191 56.9465 39.031 56.9465C36.9829 56.9465 35.2956 58.4467 34.9697 60.4158V44.6754C34.9697 42.3899 33.1311 40.5381 30.8503 40.5381C28.5694 40.5381 26.7308 42.3899 26.7308 44.6754V67.7644C24.1939 62.9122 21.2963 60.908 18.7246 60.908H18.6548C16.211 60.9432 14.3142 62.4551 13.9302 63.3107C13.2203 64.9046 19.062 67.5183 23.2048 77.8322C24.5198 81.1021 25.1947 83.5751 27.1381 85.8489" stroke="#00008F" strokeWidth="1.62912" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M53.9848 37.6938C53.3797 36.1819 52.0182 35.4669 50.7149 35.4669C50.2494 35.4669 49.8072 35.5607 49.3999 35.7248L45.6295 37.3891C43.8374 38.1626 42.9996 40.3074 43.7443 42.1592C44.3495 43.6711 45.711 44.3861 47.0143 44.3861C47.4682 44.3861 47.922 44.2923 48.3293 44.1165L52.0996 42.4522C53.8917 41.6787 54.7296 39.5456 53.9848 37.6821V37.6938Z" stroke="#00008F" strokeWidth="1.62912" strokeMiterlimit="10" />
            <path d="M48.3894 52.4926L51.799 50.9924C53.4166 50.2892 54.173 48.3554 53.498 46.6793C52.9511 45.3081 51.7176 44.6635 50.5423 44.6635C50.1233 44.6635 49.716 44.7455 49.3436 44.9096L45.934 46.4098C44.3165 47.113 43.5601 49.0351 44.235 50.7229C44.782 52.0941 46.0155 52.7388 47.1908 52.7388C47.6097 52.7388 48.017 52.6567 48.3778 52.5043L48.3894 52.4926Z" stroke="#00008F" strokeWidth="1.62912" strokeMiterlimit="10" />
            <path d="M43.7561 33.0034C44.3612 34.5153 45.7343 35.2303 47.026 35.2303C47.4915 35.2303 47.9337 35.1365 48.341 34.9607L50.9011 33.7887C52.6932 33.0034 53.5311 30.8703 52.7863 29.0185C52.1812 27.5066 50.808 26.7916 49.5163 26.7916C49.0509 26.7916 48.597 26.8854 48.2014 27.0612L45.6412 28.2332C43.8492 29.0068 43.0113 31.1399 43.7561 33.0034Z" stroke="#00008F" strokeWidth="1.62912" strokeMiterlimit="10" />
            <path d="M29.7695 5.57129H32.4228" stroke="#00008F" strokeWidth="1.62912" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M14.9883 9.65601H47.1993" stroke="#00008F" strokeWidth="1.62912" strokeMiterlimit="10" />
            <path d="M47.2031 23.4523L54.0922 20.487C56.117 19.608 57.0596 17.1936 56.2217 15.0957C55.5352 13.3845 54.0573 12.1539 51.567 12.8805C50.9386 13.0563 48.0293 14.0995 47.2148 14.4511" stroke="#00008F" strokeWidth="1.62912" strokeMiterlimit="10" />
            <path d="M47.1993 27.5217V6.1087C47.1993 3.96388 45.6632 2.08862 43.6733 1.83078C39.1349 1.39712 35.1318 1.18616 31.1054 1.18616C27.079 1.18616 23.0643 1.40884 18.4794 1.8425C16.5244 2.10034 14.9883 3.9756 14.9883 6.12042V52.1227C14.9883 54.2675 16.5244 56.1428 18.5259 56.4006C21.3304 56.6702 24.0534 56.8577 26.7532 56.9632" stroke="#00008F" strokeWidth="1.62912" strokeMiterlimit="10" />
            <path d="M47.152 52.7388C46.8843 54.6023 45.4646 56.1494 43.6609 56.3838C40.8564 56.6534 38.1334 56.8409 35.4336 56.9464" stroke="#00008F" strokeWidth="1.62912" strokeMiterlimit="10" />
            <path d="M34.9844 47.1744H44.8758" stroke="#00008F" strokeWidth="1.62912" strokeMiterlimit="10" />
            <path d="M14.9883 47.1744H26.7532" stroke="#00008F" strokeWidth="1.62912" strokeMiterlimit="10" />
            <path d="M14.989 13.8752C13.5925 9.65591 8.30937 8.71828 6.80821 9.60903C5.09758 10.6404 8.89122 17.1921 4.80666 29.3578C3.1193 34.3741 1.54832 39.2615 1.23412 43.4222C0.547544 52.3648 4.99285 58.8344 10.8113 62.0809" stroke="#00008F" strokeWidth="1.62912" strokeMiterlimit="10" />
            <path d="M25.332 27.3187L31.3483 32.1826L39.5174 21.1304" stroke="#00008F" strokeWidth="1.62912" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_17361_57682">
                <rect width="60" height="87" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const ICON_ASSISTANCE = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="92"
        height="114"
        viewBox="0 0 92 114"
        fill="none"
        className="h-full w-full"
    >
        <rect x="1.115" y="1.115" width="70.77" height="82.77" fill="#F7F7F8" stroke="#00008F" strokeWidth="2.23" />
        <path d="M16.5341 14H11V19.4944H16.5341V14Z" fill="#F7F7F8" stroke="#00008F" strokeWidth="2.22881" strokeLinejoin="round" />
        <path d="M20.8438 16.7395H47.3925" stroke="#00008F" strokeWidth="2.22881" strokeLinejoin="round" />
        <path d="M16.5341 27.6531H11V33.1475H16.5341V27.6531Z" fill="#F7F7F8" stroke="#00008F" strokeWidth="2.22881" strokeLinejoin="round" />
        <path d="M16.5341 41H11V46.4944H16.5341V41Z" fill="#F7F7F8" stroke="#00008F" strokeWidth="2.22881" strokeLinejoin="round" />
        <path d="M20.8438 30.4077H47.3925" stroke="#00008F" strokeWidth="2.22881" strokeLinejoin="round" />
        <path d="M20.8438 43.7546H47.3925" stroke="#00008F" strokeWidth="2.22881" strokeLinejoin="round" />
        <path d="M55 40L87.0429 95.5H22.9571L55 40Z" fill="#F7F7F8" />
        <path d="M79.5879 91.1957H30.4121L54.999 48.6088L79.5879 91.1957Z" fill="#F7F7F8" stroke="#00008F" strokeWidth="2.23" />
        <line y1="-1.115" x2="19.1379" y2="-1.115" transform="matrix(-4.37115e-08 1 1 4.37115e-08 55 60.4138)" stroke="#00008F" strokeWidth="2.23" />
        <line y1="-1.115" x2="2.55172" y2="-1.115" transform="matrix(4.37115e-08 1 1 -4.37115e-08 55 83.3793)" stroke="#00008F" strokeWidth="2.23" />
    </svg>
);

const ICON_CLAIM = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 61.242 66.0141"
        fill="none"
        className="h-full w-full"
    >
        <g id="Icon" clipPath="url(#clip0_qa)">
            <path d="M57.1734 49.5626C57.1734 49.5626 56.3216 45.5209 55.4599 40.5057C55.4104 40.2303 55.0835 39.6305 54.2911 39.4731C45.0895 37.644 38.3442 37.6932 29.3209 39.5026C28.6671 39.6305 28.3403 40.2598 28.2808 40.5647C27.4191 45.5602 26.5772 49.5724 26.5772 49.5724" stroke="#00008F" strokeWidth="1.75121" strokeMiterlimit="10" />
            <path d="M60.2534 54.725C60.2534 51.6077 57.9158 49.0705 55.0434 49.0705H28.6865C25.8042 49.0705 23.4765 51.5978 23.4765 54.725C23.4765 56.6917 24.4076 58.4225 25.8141 59.4353V64.1654C25.8141 64.6472 26.2004 65.0308 26.6857 65.0308H31.6183C32.1037 65.0308 32.4999 64.6472 32.4999 64.1654V60.3695H51.2399V64.1654C51.2399 64.6472 51.6361 65.0308 52.1116 65.0308H57.0442C57.5295 65.0308 57.9158 64.6472 57.9158 64.1654V59.4353C59.3223 58.4225 60.2534 56.6917 60.2534 54.725Z" stroke="#00008F" strokeWidth="1.75121" strokeMiterlimit="10" />
            <path d="M29.0207 54.7243H29.5357" stroke="#00008F" strokeWidth="1.75121" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M54.191 54.7243H54.7061" stroke="#00008F" strokeWidth="1.75121" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M26.5567 48.6776L23.1495 47.7925" stroke="#00008F" strokeWidth="1.75121" strokeMiterlimit="10" />
            <path d="M57.1722 48.6776L60.5795 47.7925" stroke="#00008F" strokeWidth="1.75121" strokeMiterlimit="10" />
            <path d="M35.0159 8.20184C35.0159 6.95295 33.9957 5.93024 32.7378 5.93024H26.8642C26.676 5.93024 26.0619 5.87123 25.8737 5.18287C25.428 2.74409 23.3083 0.98385 20.8024 0.98385C18.2964 0.98385 16.1768 2.74409 15.741 5.18287C15.5528 5.87123 14.9387 5.93024 14.7406 5.93024H8.88679C7.62887 5.93024 6.59876 6.94311 6.59876 8.20184V14.3676H35.006V8.20184H35.0159Z" stroke="#00008F" strokeWidth="1.75121" strokeLinejoin="round" />
            <path d="M10.7678 20.0709H6.41951V24.3879H10.7678V20.0709Z" stroke="#00008F" strokeWidth="1.75121" strokeLinejoin="round" />
            <path d="M14.1555 22.2233H35.0152" stroke="#00008F" strokeWidth="1.75121" strokeLinejoin="round" />
            <path d="M10.7678 30.7982H6.41951V35.1152H10.7678V30.7982Z" stroke="#00008F" strokeWidth="1.75121" strokeLinejoin="round" />
            <path d="M14.1555 32.9627H35.0152" stroke="#00008F" strokeWidth="1.75121" strokeLinejoin="round" />
            <path d="M10.7678 41.5384H6.41951V45.8554H10.7678V41.5384Z" stroke="#00008F" strokeWidth="1.75121" strokeLinejoin="round" />
            <path d="M14.1555 43.6916H23.0501" stroke="#00008F" strokeWidth="1.75121" strokeLinejoin="round" />
            <path d="M20.7123 5.40869H20.9005" stroke="#00008F" strokeWidth="1.75121" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.7219 53.2292H0.991714V9.53782H3.68585" stroke="#00008F" strokeWidth="1.75121" strokeLinejoin="round" />
            <path d="M37.7976 9.53782H40.7294V35.1155" stroke="#00008F" strokeWidth="1.75121" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_qa">
                <rect width="61.242" height="66.0141" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

/* Arrow icon shared by all cards */
const ARROW_ICON = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 11 18.6837"
        fill="none"
        className="h-full w-full"
    >
        <path
            d="M1.65817 18.6837L0 17.0255L7.68365 9.34183L0 1.65817L1.65817 0L11 9.34183L1.65817 18.6837Z"
            fill="currentColor"
        />
    </svg>
);

/* ──────────────────────────────────────────────
   Icon key → SVG map (rendering concern)
   ────────────────────────────────────────────── */
const ICON_MAP: Record<string, React.ReactNode> = {
    "car-accident": ICON_CAR_ACCIDENT,
    "mechanical": ICON_MECHANICAL,
    "assistance": ICON_ASSISTANCE,
    "claim": ICON_CLAIM,
};

export function QuickActionsSection({ data, className }: QuickActionsSectionProps) {
    const { eyebrow, title, tabs, mobileCards, desktopCards } = data;
    const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");

    return (
        <section className={cn("bg-white py-16 lg:py-16", className)}>
            {/* ─── Mobile layout (< lg) ─── */}
            <Container className="lg:hidden">
                {/* Header */}
                <div className="mb-8 text-center">
                    <p className="mb-2 font-source-sans text-[18px] font-semibold text-[#606776]">
                        {eyebrow}
                    </p>
                    <h2 className="mb-8 font-headline text-[34px] font-light leading-[42px] text-[#1a1d21]">
                        {title}
                    </h2>


                    {/* Tabs */}
                    <div className="inline-flex items-center rounded-full bg-[#f7f7f8] p-2">
                        <div className="flex items-center gap-2">
                            {tabs.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={cn(
                                            "flex min-w-[80px] items-center justify-center rounded-full px-4 py-2 text-[16px] transition-colors",
                                            isActive
                                                ? "bg-[#00008f] font-semibold text-white shadow-sm"
                                                : "bg-transparent text-[#00008f] hover:bg-white/50"
                                        )}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Carousel */}
                <div className="-mx-4 flex overflow-x-auto px-4 pb-4 scrollbar-hide">
                    <div className="flex gap-3">
                        {mobileCards.map((card) => (
                            <a
                                key={card.id}
                                href={card.href}
                                className="flex w-[222px] shrink-0 flex-col gap-4 rounded bg-[#f7f7f8] p-5 pt-10 transition-colors hover:bg-gray-100"
                            >
                                {/* Icon */}
                                <div className="relative h-12 w-12 text-[#00008f]">
                                    {ICON_MAP[card.iconKey]}
                                </div>

                                {/* Content */}
                                <div className="flex w-full items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[18px] font-semibold text-[#00008f]">
                                            {card.title}
                                        </span>
                                    </div>
                                    <div className="relative h-4 w-4 text-[#00008f]">
                                        {ARROW_ICON}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>

            {/* ─── Desktop layout (lg+) ─── */}
            <Container className="hidden lg:flex lg:flex-col lg:items-center lg:gap-16 lg:py-[64px]">
                {/* Header */}
                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="font-source-sans text-[18px] font-semibold leading-[26px] text-[#606776]">
                        {eyebrow}
                    </p>
                    <h2 className="font-headline text-[48px] font-light leading-[56px] text-[#1a1d21]">
                        {title}
                    </h2>

                </div>

                {/* Cards */}
                <div className="flex w-full max-w-[1296px] items-start justify-center gap-4">
                    {desktopCards.map((card) => (
                        <a
                            key={card.id}
                            href={card.href}
                            className="flex w-[306px] shrink-0 items-center gap-0 rounded-lg bg-[#f7f7f8] pb-6 pl-6 pr-5 pt-14 transition-colors hover:bg-gray-100"
                        >
                            <div className="flex w-[262px] flex-col items-start justify-center gap-4">
                                {/* Icon */}
                                <div className="relative h-[112px] w-[112px] text-[#00008f]">
                                    {ICON_MAP[card.iconKey]}
                                </div>

                                {/* Text + Arrow */}
                                <div className="flex w-[240px] items-center justify-between">
                                    <div className="flex flex-col text-[#00008f]">
                                        <span className="font-source-sans text-[20px] font-semibold leading-7">
                                            {card.title}
                                        </span>
                                    </div>
                                    <div className="relative h-6 w-6 text-[#00008f]">
                                        {ARROW_ICON}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    );
}
