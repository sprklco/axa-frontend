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
        viewBox="0 0 81.4811 59.5556"
        fill="none"
        className="h-full w-full"
    >
        <g id="Icon">
            <path
                d="M19.5968 46.5197L26.0095 47.4536L26.305 55.6084C26.305 57.4761 27.5306 58.7574 29.4019 58.7574C31.2732 58.7574 32.5426 57.4761 32.5426 55.6084L32.7724 42.0025"
                stroke="#00008F" strokeWidth="1.59525" strokeLinejoin="round"
            />
            <path d="M29.3355 40.1567C24.8378 38.6799 19.1911 38.6908 19.1911 38.6908" stroke="#00008F" strokeWidth="1.59525" strokeLinejoin="round" />
            <path
                d="M19.5762 58.758C20.8237 58.758 21.9728 58.0848 22.5746 56.9881C23.1656 55.8913 23.2203 54.5232 22.126 52.1668C20.6596 48.9961 16.9827 40.5373 16.9827 40.5373C16.9827 40.5373 20.003 37.3665 26.2297 34.8691C26.2297 34.8691 28.3308 38.485 29.064 39.7663C29.4032 40.3635 30.016 40.9064 31.0666 41.3408C33.3866 42.3072 39.7993 44.5875 39.7993 44.5875C41.1234 45.1522 42.6336 45.1196 43.334 43.7188C44.0781 42.2421 43.7498 40.8196 41.8347 39.94L34.2948 36.6499L31.559 28.3647C30.213 24.2711 25.4418 24.4014 22.2464 25.194C16.8076 26.5405 10.1979 30.6451 7.36356 36.6933C6.14886 39.2777 5.07643 41.7426 13.4699 52.0257L3.91644 52.5577C2.03421 52.5577 0.797624 53.7413 0.797624 55.609C0.797624 57.4767 2.04515 58.758 3.91644 58.758H19.5762Z"
                stroke="#00008F" strokeWidth="1.59525" strokeLinejoin="round"
            />
            <path d="M59.4399 17.3536L54.2419 17.093C52.0423 16.9518 50.1382 18.6023 49.9959 20.7849C49.8536 22.9675 51.517 24.8569 53.7166 24.998L57.7437 25.1826" stroke="#00008F" strokeWidth="1.59525" strokeMiterlimit="10" />
            <path d="M70.7116 48.1816V56.7925C70.7116 57.8132 69.8799 58.6493 68.8403 58.6493H58.2582C57.2296 58.6493 56.3869 57.824 56.3869 56.7925V46.1727" stroke="#00008F" strokeWidth="1.59525" strokeMiterlimit="10" />
            <path d="M81.4057 48.1801H62.5615C56.3895 48.1801 51.3994 42.7725 51.3994 36.0944C51.3994 29.4164 56.4005 23.9979 62.5615 23.9979H81.4057" stroke="#00008F" strokeWidth="1.59525" strokeMiterlimit="10" />
            <path d="M64.1033 41.8176C61.1705 41.8176 58.7958 39.4613 58.7958 36.5512C58.7958 33.6411 61.1705 31.2739 64.1033 31.2848C67.0361 31.2848 69.4107 33.6411 69.4107 36.5512C69.4107 39.4613 67.0361 41.8176 64.1033 41.8176Z" stroke="#00008F" strokeWidth="1.59525" strokeMiterlimit="10" />
            <path d="M81.4059 0.794071C76.361 1.27185 70.9223 2.0971 63.8858 3.50872C62.485 3.79105 61.7737 5.13752 61.6643 5.76732C61.5439 6.47313 57.9436 25.0848 57.9436 25.0848" stroke="#00008F" strokeWidth="1.59525" strokeMiterlimit="10" />
            <path d="M44.5565 17.3432L44.7206 17.1369" stroke="#00008F" strokeWidth="1.59525" strokeLinejoin="round" />
            <path d="M35.2041 18.3205L47.4714 28.191" stroke="#00008F" strokeWidth="1.59525" strokeLinejoin="round" />
            <path d="M35.4745 18.5264C37.499 16.0724 41.1322 15.182 44.2291 17.6903C47.2932 20.1661 46.6257 23.4454 44.6121 25.8994" stroke="#00008F" strokeWidth="1.59525" strokeLinejoin="round" />
            <path d="M44.5056 25.8556C43.8271 27.3323 42.5358 28.5268 40.8505 29.0588C37.7098 30.0361 34.3503 28.2987 33.3544 25.1715C32.5665 22.6848 33.5186 20.0679 35.5212 18.6129" stroke="#00008F" strokeWidth="1.59525" strokeLinejoin="round" />
        </g>
    </svg>
);

const ICON_ASSISTANCE = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 62.489 65.3526"
        fill="none"
        className="h-full w-full"
    >
        <g id="Icon">
            <g id="Frame 387">
                <path d="M15.9381 20.6758L17.6085 17.4399C20.6448 15.864 23.9332 14.5297 23.9332 14.5297L19.2685 5.6415L24.301 3.00446C24.301 3.00446 20.8234 -1.16648 14.8454 1.98536C9.1931 4.9586 12.9438 11.3568 12.6706 14.2355L10.7165 17.3454" stroke="#00008F" strokeWidth="1.61485" strokeLinejoin="round" />
                <path d="M15.7795 9.35L16.9457 8.78266C17.0508 8.73013 17.1873 8.77216 17.2399 8.87722L19.0679 12.3968C19.11 12.4808 19.173 12.5859 18.9734 12.691L17.8072 13.2688" stroke="#00008F" strokeWidth="1.61485" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.7131 14.1082C23.7131 14.1082 26.844 12.1541 26.7179 7.3738L21.6224 10.1369" stroke="#00008F" strokeWidth="1.61485" strokeLinejoin="round" />
                <path d="M3.5089 27.935L1.19755 31.3705C0.630219 32.4737 0.714268 33.7344 1.23958 34.7115C1.59679 35.3944 2.16412 35.9827 2.88904 36.382C4.06573 37.0228 5.45254 37.0544 6.60822 36.4555C7.18606 36.1508 7.71137 35.6675 8.04756 35.0477L9.74956 31.7803" stroke="#00008F" strokeWidth="1.61485" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <path d="M59.7275 65.2108L61.5661 54.7362C62.4907 46.5204 57.8049 41.8872 49.7467 40.1326L39.976 44.8499L35.2272 38.3466C29.848 37.2119 23.6284 33.1461 18.9216 27.6093" stroke="#00008F" strokeWidth="1.61485" strokeLinejoin="round" />
            <path d="M11.4844 34.7426C16.0335 41.6767 23.724 47.8753 29.4919 49.7664L26.9179 65.2105" stroke="#00008F" strokeWidth="1.61485" strokeLinejoin="round" />
            <path d="M48.5921 65.2109L50.3362 55.4296" stroke="#00008F" strokeWidth="1.61485" strokeLinejoin="round" />
            <path d="M46.6487 9.07589L46.7432 8.51907" stroke="#00008F" strokeWidth="1.61485" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M57.2584 23.4073L26.8747 18.1542" stroke="#00008F" strokeWidth="1.61485" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M56.5963 23.2707C57.647 17.1246 54.2955 10.6318 46.5945 9.3185C38.9985 8.01574 34.9852 13.2373 33.9346 19.3834" stroke="#00008F" strokeWidth="1.61485" strokeMiterlimit="10" />
            <path d="M34.1443 19.488C32.831 22.3983 32.7049 25.8443 34.0917 28.9961C36.6762 34.9006 43.5683 37.5796 49.4622 34.9846C54.148 32.9254 56.8165 28.1556 56.4068 23.3123" stroke="#00008F" strokeWidth="1.61485" strokeLinejoin="round" />
            <path d="M14.0144 18.5848C12.8272 17.8599 11.5664 17.324 10.1061 17.2925C7.46905 17.2295 6.40792 19.2152 5.05263 22.2935C4.06505 24.5208 3.04595 26.643 3.58177 28.1769C4.15961 29.8159 5.06314 30.11 7.37449 30.6984C8.16245 30.898 8.93991 31.0031 9.71736 31.0031C12.449 31.0031 14.9809 29.7318 16.1576 27.1053C17.6075 23.8904 16.4308 20.0451 14.0144 18.5848Z" stroke="#00008F" strokeWidth="1.61485" strokeLinejoin="round" />
        </g>
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
                                        <span className="text-[14px] text-[#00008f]">
                                            {card.subtitle}
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
                                        <span className="font-source-sans text-[16px] font-normal leading-6">
                                            {card.subtitle}
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
