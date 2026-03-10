"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";
import type { ProductsSectionData } from "@/types/products";

interface ProductsSectionProps {
    data: ProductsSectionData;
    className?: string;
}

// 1 large card + 3 visible small cards + 1 extra card that peeks in during drag
const VISIBLE_SMALL = 3;
const EXTRA_PEEK = 1;
const TOTAL_RENDERED = 1 + VISIBLE_SMALL + EXTRA_PEEK;
const DRAG_THRESHOLD = 60;

export function ProductsSection({ data, className }: ProductsSectionProps) {
    const { eyebrow, title, products } = data;
    const n = products.length;

    /* ── Mobile: update active index on scroll ── */
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (!scrollRef.current) return;
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
    };

    /* ── Desktop: infinite carousel state ── */
    const [startIndex, setStartIndex] = useState(0);
    // animKey forces the animation wrapper to remount, triggering CSS entrance animation
    const [animKey, setAnimKey] = useState(0);
    const [animDir, setAnimDir] = useState<"forward" | "backward">("forward");
    // Live drag offset applied to the outer drag-wrapper (no animation)
    const [dragOffset, setDragOffset] = useState(0);
    // Pointer drag tracking (image-only drag via pointer capture)
    const dragRef = useRef<{ startX: number; lastX: number } | null>(null);

    const activeProduct = products[startIndex];

    /** Advance the carousel by `steps` (positive = forward, negative = backward). */
    const advanceBy = useCallback(
        (steps: number) => {
            setAnimDir(steps > 0 ? "forward" : "backward");
            setStartIndex((prev) => ((prev + steps) % n + n) % n);
            setAnimKey((k) => k + 1);
        },
        [n]
    );

    /* ── Image-only drag handlers (pointer capture keeps events on target) ── */
    const handleImagePointerDown = useCallback(
        (e: React.PointerEvent<HTMLDivElement>) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            dragRef.current = { startX: e.clientX, lastX: e.clientX };
            setDragOffset(0);
        },
        []
    );

    const handleImagePointerMove = useCallback(
        (e: React.PointerEvent<HTMLDivElement>) => {
            if (!dragRef.current) return;
            dragRef.current.lastX = e.clientX;
            setDragOffset(e.clientX - dragRef.current.startX);
        },
        []
    );

    const handleImagePointerUp = useCallback(
        (e: React.PointerEvent<HTMLDivElement>) => {
            if (!dragRef.current) return;
            const delta = dragRef.current.lastX - dragRef.current.startX;
            dragRef.current = null;
            setDragOffset(0);
            if (Math.abs(delta) > DRAG_THRESHOLD) {
                // Suppress the click event that would fire after this pointerup
                e.preventDefault();
                advanceBy(delta < 0 ? 1 : -1);
            }
        },
        [advanceBy]
    );

    const handleImagePointerCancel = useCallback(() => {
        dragRef.current = null;
        setDragOffset(0);
    }, []);

    // Products to render: active first, then wrapped around
    const displayedProducts = Array.from({ length: TOTAL_RENDERED }, (_, i) =>
        products[(startIndex + i) % n]
    );

    // Only show the animation class after the first interaction (animKey 0 = initial mount)
    const animClass =
        animKey === 0
            ? ""
            : animDir === "forward"
              ? "carousel-from-right"
              : "carousel-from-left";

    return (
        <section className={cn("bg-white py-16 lg:py-0", className)}>
            {/* ─── Mobile layout (< lg) ─── */}
            <Container className="overflow-hidden lg:hidden">
                {/* Header */}
                <div className="mb-8 px-4 text-center">
                    <p className="mb-2 font-source-sans text-[16px] font-semibold text-[#606776]">
                        {eyebrow}
                    </p>
                    <h2 className="mb-8 font-headline text-[34px] font-light leading-[42px] text-[#1a1d21]">
                        {title}
                    </h2>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex snap-x snap-mandatory items-start gap-4 overflow-x-auto overflow-y-hidden pb-12 pt-8 scrollbar-hide"
                    style={{
                        paddingLeft: "calc(50% - 150px)",
                        paddingRight: "calc(50% - 150px)",
                    }}
                >
                    {products.map((product, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={product.id}
                                data-product-card
                                className={cn(
                                    "flex shrink-0 snap-center flex-col gap-4 transition-all duration-500 ease-out",
                                    isActive
                                        ? "z-10 w-[300px] scale-100 opacity-100"
                                        : "z-0 -mx-20 w-[300px] scale-[0.45] opacity-60 hover:opacity-100"
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

                                {/* Description — only visible for active card */}
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
                        {eyebrow}
                    </p>
                    <h2 className="font-headline text-[48px] font-light leading-[56px] text-[#1a1d21]">
                        {title}
                    </h2>
                </div>

                {/* Cards row: [description] [infinite carousel] */}
                <div className="flex w-full items-start gap-8">
                    {/*
                     * Description panel — sits on top of any cards that slide under it
                     * during left-drag, thanks to z-10 + bg-white backing.
                     */}
                    <div className="relative z-10 flex h-[381px] w-[346px] shrink-0 flex-col justify-end gap-1 bg-white">
                        <h4
                            key={`desc-${startIndex}`}
                            className="carousel-desc-fade font-['Publico_Text_Web'] text-[20px] font-bold leading-7 text-[#1a1d21]"
                        >
                            {activeProduct.description}
                        </h4>
                        <p
                            key={`sub-${startIndex}`}
                            className="carousel-desc-fade font-source-sans text-[18px] leading-[26px] text-[#434956]"
                        >
                            {activeProduct.subtext}
                        </p>
                    </div>

                    {/*
                     * Carousel area
                     * ─ Outer div: overflow-hidden clips extra cards
                     * ─ Drag-wrapper: live translateX for visual drag feedback (no CSS transition)
                     * ─ Anim-wrapper: remounts via `key` on each index change, driving CSS animation
                     */}
                    <div className="flex-1 overflow-hidden">
                        {/* Drag offset wrapper — instant transform, no transition */}
                        <div
                            style={{
                                transform: `translateX(${dragOffset}px)`,
                                willChange: dragRef.current ? "transform" : "auto",
                            }}
                        >
                            {/* Animation wrapper — remounts to trigger CSS entrance animation */}
                            <div
                                key={animKey}
                                className={cn("flex items-start gap-4", animClass)}
                            >
                                {displayedProducts.map((product, slotIndex) => {
                                    const isLarge = slotIndex === 0;
                                    return (
                                        <button
                                            key={slotIndex}
                                            type="button"
                                            onClick={() => {
                                                if (isLarge) {
                                                    // Large card = navigate to product
                                                    window.location.href = `#${product.id}`;
                                                } else {
                                                    // Small card = make it the selected card
                                                    advanceBy(slotIndex);
                                                }
                                            }}
                                            className={cn(
                                                "relative shrink-0 cursor-pointer overflow-hidden",
                                                isLarge
                                                    ? "h-[381px] w-[383px] rounded-xl"
                                                    : "h-[182px] w-[181px] rounded-lg"
                                            )}
                                        >
                                            {/*
                                             * Image layer — this is the ONLY draggable surface.
                                             * Pointer capture ensures move/up events follow the
                                             * pointer even after it leaves this element.
                                             */}
                                            <div
                                                className="absolute inset-0 select-none touch-none"
                                                onPointerDown={handleImagePointerDown}
                                                onPointerMove={handleImagePointerMove}
                                                onPointerUp={handleImagePointerUp}
                                                onPointerCancel={handleImagePointerCancel}
                                            >
                                                <Image
                                                    src={product.image}
                                                    alt={product.title}
                                                    fill
                                                    sizes={isLarge ? "383px" : "181px"}
                                                    className="object-cover"
                                                    priority={slotIndex === 0}
                                                    draggable={false}
                                                />
                                            </div>

                                            {/* Gradient overlay — non-interactive */}
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-25% via-black/50 via-[65%] to-black/70" />

                                            {/* Title — non-interactive so clicks pass to button */}
                                            <div
                                                className={cn(
                                                    "pointer-events-none absolute bottom-0 left-0 right-0 flex items-end",
                                                    isLarge ? "px-8 py-6" : "px-5 py-3"
                                                )}
                                            >
                                                <h3
                                                    className={cn(
                                                        "font-['Publico_Text_Web'] font-bold text-white",
                                                        isLarge
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
                    </div>
                </div>
            </Container>
        </section>
    );
}
