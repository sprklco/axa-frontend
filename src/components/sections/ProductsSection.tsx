"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";

/* ──────────────────────────────────────────────
   Product data
   ────────────────────────────────────────────── */
const PRODUCTS = [
    {
        id: "motor",
        title: "Motor Insurance",
        image: "/images/motor-insurance.png",
        description: "Move with confidence and safety",
        subtext:
            "Our insurances adapt to your life so that you always gain in well-being.",
    },
    {
        id: "health",
        title: "Health Insurance",
        image: "/images/health-insurance.png",
        description: "Your health, our priority",
        subtext:
            "Access quality healthcare with our comprehensive health insurance plans.",
    },
    {
        id: "travel",
        title: "Travel Insurance",
        image: "/images/travel-insurance.png",
        description: "Journey with peace of mind",
        subtext:
            "Coverage for medical emergencies, trip cancellations, and lost luggage while you travel.",
    },
    {
        id: "life",
        title: "Life Insurance",
        image: "/images/life-insurance.png",
        description: "Protect your loved ones",
        subtext:
            "Ensure your family's future with our reliable life insurance policies.",
    },
    {
        id: "home",
        title: "Home Insurance",
        image: "/images/home-insurance.png",
        description: "Secure your sanctuary",
        subtext:
            "Protect your home and belongings with comprehensive coverage you can count on.",
    },
];

export function ProductsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const desktopScrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [desktopActiveIndex, setDesktopActiveIndex] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    /* ── Mobile: update active index on scroll ── */
    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const center = container.scrollLeft + container.offsetWidth / 2;
            const items = container.querySelectorAll("[data-product-card]");

            let closestIndex = 0;
            let minDistance = Infinity;

            items.forEach((item, index) => {
                const el = item as HTMLElement;
                const itemCenter = el.offsetLeft + el.offsetWidth / 2;
                const distance = Math.abs(center - itemCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        }
    };

    /* ── Desktop: subtle scroll hint animation on first visibility ── */
    const animateScrollHint = useCallback(() => {
        if (hasAnimated || !desktopScrollRef.current) return;
        const el = desktopScrollRef.current;
        setHasAnimated(true);
        // Subtle scroll hint — move 60px right then back
        el.scrollTo({ left: 60, behavior: "smooth" });
        setTimeout(() => el.scrollTo({ left: 0, behavior: "smooth" }), 600);
    }, [hasAnimated]);

    useEffect(() => {
        const ref = desktopScrollRef.current;
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) animateScrollHint();
            },
            { threshold: 0.5 }
        );
        observer.observe(ref);
        return () => observer.disconnect();
    }, [animateScrollHint]);

    const activeProduct = PRODUCTS[desktopActiveIndex];

    return (
        <section className="bg-white py-16 lg:py-0">
            {/* ─── Mobile layout (< lg) ─── */}
            <Container className="overflow-hidden lg:hidden">
                {/* Header */}
                <div className="mb-8 px-4 text-center">
                    <p className="mb-2 font-source-sans text-[16px] font-semibold text-[#606776]">
                        Our insurances
                    </p>
                    <h2 className="mb-8 font-headline text-[34px] font-light leading-[42px] text-[#1a1d21]">
                        Solutions designed for you
                    </h2>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex snap-x snap-mandatory items-start gap-4 overflow-x-auto overflow-y-hidden px-[50%] pb-12 pt-8 scrollbar-hide"
                    style={{
                        paddingLeft: "calc(50% - 150px)",
                        paddingRight: "calc(50% - 150px)",
                    }}
                >
                    {PRODUCTS.map((product, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={product.id}
                                data-product-card
                                className={cn(
                                    "flex shrink-0 snap-center flex-col gap-4 transition-all duration-500 ease-out",
                                    isActive
                                        ? "z-10 w-[300px] scale-100 opacity-100"
                                        : "z-0 w-[300px] -mx-20 scale-[0.45] opacity-60 hover:opacity-100"
                                )}
                                style={{ transformOrigin: "top center" }}
                            >
                                {/* Card Image */}
                                <div
                                    className={cn(
                                        "relative h-[300px] w-full overflow-hidden rounded-2xl bg-gray-200 transition-all duration-500",
                                        isActive ? "shadow-2xl" : "shadow-sm"
                                    )}
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        sizes="300px"
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3
                                            className={cn(
                                                "font-headline font-bold leading-[36px] text-white transition-all duration-500",
                                                isActive
                                                    ? "text-[32px]"
                                                    : "text-[40px]"
                                            )}
                                        >
                                            {product.title
                                                .split(" ")
                                                .map((word, i) => (
                                                    <span
                                                        key={i}
                                                        className="block"
                                                    >
                                                        {word}
                                                    </span>
                                                ))}
                                        </h3>
                                    </div>
                                </div>

                                {/* Description Below - Only visible for active */}
                                <div
                                    className={cn(
                                        "px-2 transition-all duration-500",
                                        isActive
                                            ? "translate-y-0 opacity-100 delay-100"
                                            : "pointer-events-none translate-y-4 opacity-0"
                                    )}
                                >
                                    <h4 className="mb-2 font-headline text-[20px] font-bold text-[#1a1d21]">
                                        {product.description}
                                    </h4>
                                    <p className="font-source-sans text-[16px] text-[#606776]">
                                        {product.subtext}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>

            {/* ─── Desktop layout (lg+) ─── */}
            <Container className="hidden lg:flex lg:flex-col lg:gap-16 lg:py-16">
                {/* Header — left-aligned */}
                <div className="flex flex-col gap-3">
                    <p className="font-source-sans text-[18px] font-semibold leading-[26px] text-[#606776]">
                        Our insurances
                    </p>
                    <h2 className="font-headline text-[48px] font-light leading-[56px] text-[#1a1d21]">
                        Solutions designed for you
                    </h2>
                </div>

                {/* Cards area — full width with scroll */}
                <div className="relative w-full">
                    {/* Scrollable cards container */}
                    <div
                        ref={desktopScrollRef}
                        className="flex min-h-[400px] items-start gap-4 overflow-x-auto pb-4 scrollbar-hide"
                    >
                        {/* Description text — left column, only visible on desktop */}
                        <div className="hidden shrink-0 self-end lg:flex lg:w-[346px] lg:flex-col lg:gap-1 lg:pb-0">
                            <h4 className="font-['Publico_Text_Web'] text-[20px] font-bold leading-7 text-[#1a1d21]">
                                {activeProduct.description}
                            </h4>
                            <p className="font-source-sans text-[18px] leading-[26px] text-[#434956]">
                                {activeProduct.subtext}
                            </p>
                        </div>

                        {/* Product cards */}
                        {PRODUCTS.map((product, index) => {
                            const isExpanded = index === desktopActiveIndex;
                            return (
                                <button
                                    key={product.id}
                                    onClick={() => {
                                        if (isExpanded) {
                                            // Navigate to product page
                                            window.location.href = `#${product.id}`;
                                        } else {
                                            setDesktopActiveIndex(index);
                                        }
                                    }}
                                    className={cn(
                                        "relative shrink-0 cursor-pointer overflow-hidden transition-all duration-500 ease-out",
                                        isExpanded
                                            ? "h-[381px] w-[383px] rounded-xl"
                                            : "h-[182px] w-[181px] rounded-lg"
                                    )}
                                >
                                    {/* Background image */}
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        sizes={isExpanded ? "383px" : "181px"}
                                        className="object-cover"
                                        priority={index === 0}
                                    />

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-25% via-black/50 via-[65%] to-black/70" />

                                    {/* Title text */}
                                    <div
                                        className={cn(
                                            "absolute bottom-0 left-0 right-0 flex items-end",
                                            isExpanded
                                                ? "px-8 py-6"
                                                : "px-5 py-3"
                                        )}
                                    >
                                        <h3
                                            className={cn(
                                                "font-['Publico_Text_Web'] font-bold text-white transition-all duration-500",
                                                isExpanded
                                                    ? "text-[32px] leading-[40px]"
                                                    : "text-[20px] leading-7"
                                            )}
                                        >
                                            {product.title}
                                        </h3>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
