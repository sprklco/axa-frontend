"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { animation } from "@/lib/tokens";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { PauseButton } from "@/components/ui/PauseButton";
import { CTAButton } from "@/components/ui/CTAButton";
import type { HeroSlide } from "@/types/hero";

interface HeroBannerProps {
    slides: HeroSlide[];
}

/**
 * Hero Banner Carousel Component
 * Mobile-first design matching Figma specifications exactly
 * Features: auto-advance, progress bars, pause control, dissolve transitions
 */
export function HeroBanner({ slides }: HeroBannerProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const totalSlides = slides.length;

    // Go to next slide
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setProgress(0);
    }, [totalSlides]);

    // Go to specific slide
    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
        setProgress(0);
    }, []);

    // Toggle pause/play
    const togglePause = useCallback(() => {
        setIsPaused((prev) => !prev);
    }, []);

    // Auto-advance effect
    useEffect(() => {
        if (isPaused) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
            return;
        }

        // Progress update interval (every 50ms for smooth animation)
        const progressStep = (100 / animation.slideInterval) * 50;
        progressIntervalRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100;
                return prev + progressStep;
            });
        }, 50);

        // Slide advance interval
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, animation.slideInterval);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
    }, [isPaused, nextSlide, currentSlide]);

    const activeSlide = slides[currentSlide];

    return (
        <section
            className="relative flex min-h-[548px] w-full flex-col items-center overflow-hidden md:min-h-[704px] lg:items-start"
            aria-label="Hero banner carousel"
            aria-roledescription="carousel"
        >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0" aria-hidden="true">
                {/* Base hero image - same for all slides in this version */}
                <Image
                    src="/images/hero-overlay.png"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient Overlay */}
                <div className="hero-gradient-overlay absolute inset-0" />
            </div>

            {/* Content Container */}
            <div className="relative flex w-full flex-1 flex-col justify-end px-4 pb-8 pt-[170px] md:px-8 md:pb-12 lg:max-w-[1440px] lg:mx-auto lg:px-[72px] lg:pb-12">
                {/* Text Content with Dissolve Transition */}
                <div
                    key={`text-${currentSlide}`}
                    className="flex flex-col gap-4 text-white animate-fade-in-up"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Slide ${currentSlide + 1} of ${totalSlides}`}
                >
                    {/* Eyebrow */}
                    <p className="font-source-sans text-base font-semibold leading-6 lg:text-2xl lg:leading-8 lg:font-normal">
                        {activeSlide.eyebrow}
                    </p>

                    {/* Headline */}
                    <h1 className="font-headline text-[40px] font-light leading-[48px] tracking-[-1.5px] md:text-[56px] md:leading-[64px] lg:text-[64px] lg:leading-[72px] lg:max-w-[730px]">
                        {activeSlide.headline.split("\n").map((line, i) => (
                            <span key={i}>
                                {line}
                                {i < activeSlide.headline.split("\n").length - 1 && <br />}
                            </span>
                        ))}
                    </h1>

                    {/* Description */}
                    <p className="font-source-sans text-base font-normal leading-6 md:max-w-[600px] lg:text-lg lg:leading-[26px] lg:max-w-[600px]">
                        {activeSlide.description}
                    </p>
                </div>

                {/* CTA Button */}
                <div key={`cta-${currentSlide}`} className="mt-4 flex flex-col gap-4 md:mt-8 lg:mt-8 lg:flex-row animate-fade-in-up-delay">
                    <CTAButton href={activeSlide.ctaHref}>
                        {activeSlide.ctaText}
                    </CTAButton>
                </div>

                {/* Progress Controls */}
                <div className="mt-6 flex flex-col gap-6 md:mt-8">
                    {/* Progress Bars */}
                    <div
                        className="flex w-full items-center justify-between gap-2"
                        role="tablist"
                        aria-label="Carousel navigation"
                    >
                        {slides.map((slide, index) => (
                            <div key={slide.id} className="flex-1" role="presentation">
                                <ProgressBar
                                    isActive={index === currentSlide}
                                    isCompleted={index < currentSlide}
                                    progress={index === currentSlide ? progress : 0}
                                    onClick={() => goToSlide(index)}
                                    ariaLabel={`Go to slide ${index + 1}: ${slide.eyebrow}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex h-12 w-full items-center justify-end">
                        <PauseButton isPaused={isPaused} onToggle={togglePause} />
                    </div>
                </div>
            </div>
        </section>
    );
}
