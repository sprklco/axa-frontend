"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/CTAButton";
import { cn } from "@/lib/cn";

export interface OverlayBannerSectionProps {
    imageSrc: string;
    subtitle: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    className?: string;
}

export function OverlayBannerSection({
    imageSrc,
    subtitle,
    title,
    description,
    ctaText,
    ctaHref,
    className,
}: OverlayBannerSectionProps) {
    return (
        <section className={cn("py-0 md:py-[80px] bg-white", className)}>
            <Container className="px-4 md:px-4">
                {/* Outer rounded container with background image */}
                <div className="relative w-full overflow-hidden rounded-[12px] h-[494px] md:h-[600px] flex items-end px-4 pb-6 md:p-0">
                    {/* Background Image & Overlay */}
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                        <Image
                            src={imageSrc}
                            alt="Background Banner"
                            fill
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* Glassmorphism Card — pinned to bottom, with padding around it */}
                    <div className={cn(
                        "relative z-10 w-full md:w-[600px] lg:w-[640px]",
                        "m-0 md:m-[48px]",
                        "px-6 py-8 md:px-[40px] md:py-[40px] md:pl-[32px]",
                        "backdrop-blur-[46px] bg-[#535353]/50 rounded-[8px]",
                        "flex flex-col gap-4 md:gap-[24px]",
                        "items-start shrink-0 text-white"
                    )}>

                        <p className="font-source-sans font-semibold text-[14px] leading-[22px] tracking-wide text-white">
                            {subtitle}
                        </p>

                        <h2 className="font-headline font-light text-[32px] leading-[40px] text-white -tracking-tight">
                            {title}
                        </h2>

                        <p className="font-source-sans text-[16px] leading-[24px] text-white opacity-90">
                            {description}
                        </p>

                        <div className="mt-2 text-white">
                            <Button variant="inverse" href={ctaHref} size="sm" className="px-8 whitespace-nowrap min-w-fit">
                                {ctaText}
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
