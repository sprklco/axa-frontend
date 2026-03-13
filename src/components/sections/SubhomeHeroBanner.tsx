"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/CTAButton";
import { CallbackModal } from "@/components/ui/CallbackModal";
import { User, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/cn";

export interface SubhomeHeroBannerProps {
    title?: string;
    heading?: string;
    description?: string;
    imageSrc?: string;
    ctaText?: string;
    ctaHref?: string;
    showCallback?: boolean;
}

export function SubhomeHeroBanner({
    title,
    heading,
    description,
    imageSrc = "/images/motor-hero-bg.png",
    ctaText,
    ctaHref = "#",
    showCallback = true,
}: SubhomeHeroBannerProps) {
    const [isCallbackOpen, setIsCallbackOpen] = useState(false);

    return (
        <section
            className={cn(
                "relative flex w-full flex-col overflow-hidden md:items-start",
                showCallback
                    ? "min-h-[500px] items-center md:min-h-[742px]"
                    : "min-h-[500px] items-start md:min-h-[742px]"
            )}
        >
            {/* Background Image & Gradient Overlay */}
            <div className="absolute inset-0" aria-hidden="true">
                <Image
                    src={imageSrc}
                    alt={title || "AXA"}
                    fill
                    className="object-cover object-right md:object-center"
                    priority
                />
                {/* Mobile: bottom-to-top gradient for readability */}
                <div
                    className="absolute inset-0 md:hidden"
                    style={{
                        backgroundImage: showCallback
                            ? "linear-gradient(to top, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0) 100%)"
                            : "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.8) 100%)",
                    }}
                />
                {/* Desktop: left-to-right gradient */}
                <div
                    className="absolute inset-0 hidden md:block"
                    style={{
                        backgroundImage: showCallback
                            ? "linear-gradient(264.76deg, rgba(0, 0, 0, 0) 25.59%, rgba(0, 0, 0, 0.63) 97.76%)"
                            : "linear-gradient(269.35deg, rgba(0, 0, 0, 0) 0.33728%, rgba(0, 0, 0, 0.624) 53.953%, rgba(0, 0, 0, 0.49) 97.697%)",
                    }}
                />
            </div>

            {/* Content Container */}
            <Container
                className={cn(
                    "relative flex w-full flex-1 flex-col justify-end",
                    showCallback
                        ? "gap-8 pb-8 pt-[170px] md:gap-12 md:pb-12 md:pt-[180px]"
                        : "gap-0 pb-8 pt-[170px] md:gap-8 md:pb-12 md:pt-[180px]"
                )}
            >
                {/* Text Content */}
                <div
                    className={cn(
                        "flex w-full flex-col gap-4 animate-fade-in-up",
                        !showCallback && "md:pb-10"
                    )}
                >
                    {title && (
                        <p
                            className={cn(
                                "font-source-sans font-semibold text-white md:font-normal",
                                showCallback ? "text-base md:text-2xl" : "text-base md:text-[24px] md:leading-[32px]"
                            )}
                        >
                            {title}
                        </p>
                    )}
                    {heading && (
                        <h1
                            className={cn(
                                "font-headline font-light tracking-[-1.5px] text-white md:leading-[72px]",
                                showCallback
                                    ? "text-[40px] max-md:leading-[48px] leading-[72px] md:text-[64px] md:w-[730px]"
                                    : "text-[40px] max-md:leading-[44px] leading-[66px] md:text-[64px] md:w-[876px]"
                            )}
                        >
                            {heading}
                        </h1>
                    )}
                    {description && (
                        <p
                            className={cn(
                                "font-source-sans leading-[24px] text-white",
                                showCallback
                                    ? "text-base md:w-[550px]"
                                    : "text-base md:text-[18px] md:leading-[26px] md:w-[657px]"
                            )}
                        >
                            {description}
                        </p>
                    )}
                    {ctaText && (
                        <div className="mt-4 w-full md:w-auto">
                            <Button variant="ghost" size="md" href={ctaHref} className="w-full md:w-auto">
                                {ctaText}
                            </Button>
                        </div>
                    )}
                </div>

                {/* ─── Mobile: "Get a callback" button + "Or call us" ─── */}
                {showCallback && (
                    <div className="flex flex-col items-center gap-8 md:hidden animate-fade-in-up-delay">
                        <div className="flex w-full flex-col items-center gap-4">
                            <Button
                                variant="ghost"
                                size="lg"
                                fullWidth
                                onClick={() => setIsCallbackOpen(true)}
                                className="h-[56px]"
                            >
                                Get a callback
                            </Button>
                        </div>

                        {/* Or Call Us */}
                        <div className="flex items-center gap-1">
                            <span className="font-source-sans text-base text-white">
                                Or call us at
                            </span>
                            <div className="flex items-center gap-1">
                                <Phone className="h-[18px] w-[18px] text-white/80" />
                                <span className="font-source-sans text-base font-semibold text-white/80">
                                    04 - 727 000
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* ─── Desktop: Inline Fast Leads form ─── */}
                {showCallback && (
                    <div className="hidden md:flex w-full flex-col gap-2 md:items-end animate-fade-in-up-delay">
                        {/* The Input Row */}
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 rounded-xl md:rounded-lg bg-[#535353]/50 p-4 md:h-[56px] md:p-2 backdrop-blur-lg">

                            {/* Name Input */}
                            <div className="flex w-full md:w-auto items-center gap-2 px-4">
                                <User className="h-[18px] w-[18px] shrink-0 text-white/60" />
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-transparent p-0 text-base font-source-sans text-white/60 placeholder:text-white/60 focus:outline-none md:w-[80px]"
                                />
                            </div>

                            {/* Divider */}
                            <div className="hidden h-4 w-px bg-white/20 md:block" />

                            {/* Phone Input */}
                            <div className="flex w-full md:w-auto items-center gap-2 px-4">
                                <Phone className="h-[18px] w-[18px] shrink-0 text-white/60" />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="w-full bg-transparent p-0 text-base font-source-sans text-white/60 placeholder:text-white/60 focus:outline-none md:w-[100px]"
                                />
                            </div>

                            {/* Divider */}
                            <div className="hidden h-4 w-px bg-white/20 md:block" />

                            {/* Email Input */}
                            <div className="flex w-full md:w-auto items-center gap-2 px-4">
                                <Mail className="h-[18px] w-[18px] shrink-0 text-white/60" />
                                <input
                                    type="email"
                                    placeholder="E-mail address"
                                    className="w-full bg-transparent p-0 text-base font-source-sans text-white/60 placeholder:text-white/60 focus:outline-none md:w-[150px]"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                className="ml-2 whitespace-nowrap px-4 font-source-sans text-base font-semibold text-white transition-opacity hover:opacity-80"
                            >
                                <span className="border-b-2 border-white pb-0.5">
                                    Get a callback
                                </span>
                            </button>
                        </div>

                        {/* Or Call Us */}
                        <div className="mt-2 flex items-center gap-2 pr-2">
                            <span className="font-source-sans text-base text-white">
                                Or call us at
                            </span>
                            <div className="flex items-center gap-1 rounded bg-white/10 px-2 py-1">
                                <Phone className="h-[14px] w-[14px] text-white/80" />
                                <span className="font-source-sans text-base font-semibold text-white/80">
                                    04 - 727 000
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </Container>

            {/* Callback Modal (mobile) */}
            <CallbackModal
                isOpen={isCallbackOpen}
                onClose={() => setIsCallbackOpen(false)}
            />
        </section>
    );
}
