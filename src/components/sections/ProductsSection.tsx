"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/cn";

const PRODUCTS = [
    {
        id: "motor",
        title: "Motor Insurance",
        image: "/images/motor-insurance.png",
        description: "Move with confidence and safety",
        subtext: "Our insurances adapt to your life so that you always gain in well-being.",
    },
    {
        id: "health",
        title: "Health Insurance",
        image: "/images/health-insurance.png",
        description: "Your health, our priority",
        subtext: "Access quality healthcare with our comprehensive health insurance plans.",
    },
    {
        id: "life",
        title: "Life Insurance",
        image: "/images/life-insurance.png",
        description: "Protect your loved ones",
        subtext: "Ensure your family's future with our reliable life insurance policies.",
    },
    {
        id: "travel",
        title: "Travel Insurance",
        image: "/images/travel-insurance.png",
        description: "Journey with peace of mind",
        subtext: "Coverage for medical emergencies, trip cancellations, and lost luggage while you travel.",
    },
];

export function ProductsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Update active index on scroll
    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const center = container.scrollLeft + container.offsetWidth / 2;
            const items = container.querySelectorAll('[data-product-card]');

            let closestIndex = 0;
            let minDistance = Infinity;

            items.forEach((item, index) => {
                const itemCenter = (item as HTMLElement).offsetLeft + (item as HTMLElement).offsetWidth / 2;
                const distance = Math.abs(center - itemCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        }
    };

    useEffect(() => {
        // Initial centering logic if needed, or just let CSS snap handle it
    }, []);

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-lg overflow-hidden">
                {/* Header */}
                <div className="mb-8 px-4 text-center">
                    <p className="mb-2 font-['Source_Sans_3'] text-[16px] font-semibold text-[#606776]">
                        Our insurances
                    </p>
                    <h2 className="mb-8 font-['Publico_Headline_Web'] text-[34px] font-light leading-[42px] text-[#1a1d21]">
                        Solutions designed for you
                    </h2>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex snap-x snap-mandatory items-start gap-4 overflow-x-auto overflow-y-hidden px-[50%] pb-12 pt-8 scrollbar-hide"
                    style={{ paddingLeft: 'calc(50% - 150px)', paddingRight: 'calc(50% - 150px)' }}
                >
                    {PRODUCTS.map((product, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={product.id}
                                data-product-card
                                className={cn(
                                    "flex shrink-0 snap-center flex-col gap-4 transition-all duration-500 ease-out",
                                    isActive ? "z-10 w-[300px] scale-100 opacity-100" : "z-0 w-[300px] scale-[0.45] opacity-60 hover:opacity-100 -mx-20"
                                )}
                                style={{
                                    transformOrigin: "top center",
                                }}
                            >
                                {/* Card Image */}
                                <div className={cn(
                                    "relative w-full overflow-hidden rounded-2xl bg-gray-200 transition-all duration-500",
                                    isActive ? "h-[300px] shadow-2xl" : "h-[300px] shadow-sm"
                                )}>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        priority={index === 0}
                                    />
                                    {/* Placeholder Gradient */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className={cn(
                                            "font-['Publico_Headline_Web'] font-bold leading-[36px] text-white transition-all duration-500",
                                            isActive ? "text-[32px]" : "text-[40px]"
                                        )}>
                                            {product.title.split(" ").map((word, i) => (
                                                <span key={i} className="block">
                                                    {word}
                                                </span>
                                            ))}
                                        </h3>
                                    </div>
                                </div>

                                {/* Description Below - Only visible for active */}
                                <div className={cn(
                                    "px-2 transition-all duration-500",
                                    isActive ? "opacity-100 delay-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                                )}>
                                    <h4 className="mb-2 font-['Publico_Headline_Web'] text-[20px] font-bold text-[#1a1d21]">
                                        {product.description}
                                    </h4>
                                    <p className="font-['Source_Sans_3'] text-[16px] text-[#606776]">
                                        {product.subtext}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
