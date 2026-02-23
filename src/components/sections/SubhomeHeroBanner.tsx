"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/CTAButton";
import { User, Phone, Mail } from "lucide-react";

export interface SubhomeHeroBannerProps {
    title?: string;
    heading?: string;
    description?: string;
    imageSrc?: string;
}

export function SubhomeHeroBanner({
    title,
    heading,
    description,
    imageSrc = "/images/motor-hero-bg.png",
}: SubhomeHeroBannerProps) {
    return (
        <section className="relative flex min-h-[500px] w-full flex-col items-center overflow-hidden md:min-h-[742px] lg:items-start">
            {/* Background Image & Gradient Overlay */}
            <div className="absolute inset-0" aria-hidden="true">
                <Image
                    src={imageSrc}
                    alt={title || "AXA"}
                    fill
                    className="object-cover object-right md:object-center"
                    priority
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(264.76deg, rgba(0, 0, 0, 0) 25.59%, rgba(0, 0, 0, 0.63) 97.76%)",
                    }}
                />
            </div>

            {/* Content Container - stacked flex-col to match the design's bottom alignment */}
            <Container className="relative flex w-full flex-1 flex-col justify-end gap-12 pb-12 pt-[180px] lg:pb-12">

                {/* Text Content (Left aligned visually but inside the flex-col) */}
                <div className="flex w-full flex-col gap-4 animate-fade-in-up">
                    {title && (
                        <p className="font-source-sans text-xl md:text-2xl text-white">
                            {title}
                        </p>
                    )}
                    {heading && (
                        <h1 className="font-headline text-[48px] font-light leading-[1.1] tracking-[-1.5px] text-white md:text-[64px] md:leading-[72px] lg:w-[730px]">
                            {heading}
                        </h1>
                    )}
                    {description && (
                        <p className="font-source-sans text-base leading-[24px] text-white md:w-[550px]">
                            {description}
                        </p>
                    )}
                    <div className="mt-4">
                        {/* The CTAButton is natively using "ghost" which maps precisely to the "Primary Button Inverse" in the design */}
                        {/* We use Variant Ghost: bg-white text-axa-blue */}
                        <Button variant="ghost" size="md">
                            Start now
                        </Button>
                    </div>
                </div>

                {/* Fast Leads - Form positioned towards bottom right on desktop */}
                <div className="flex w-full flex-col gap-2 md:items-end animate-fade-in-up-delay">
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
            </Container>
        </section>
    );
}
