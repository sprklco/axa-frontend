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
        <section className={cn("py-16 md:py-[80px] bg-white", className)}>
            <Container>
                <div className="relative w-full overflow-hidden rounded-[12px] h-[500px] md:h-[600px] flex items-end">
                    {/* Background Image & Overlay*/}
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                        <Image
                            src={imageSrc}
                            alt="Background Banner"
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                        {/* Slight dark overlay from Figma */}
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* Glassmorphism Card */}
                    {/* On Desktop: left aligned with exact paddings. On mobile: fills width at bottom */}
                    <div className={cn(
                        "relative z-10 w-full md:w-[600px] lg:w-[640px] m-0 md:m-[48px] p-6 sm:p-8 md:px-[40px] md:py-[40px] md:pl-[32px]",
                        "backdrop-blur-[46px] bg-[#535353]/50 md:rounded-[8px] flex flex-col gap-[24px]",
                        "items-start shrink-0 text-white"
                    )}>

                        <p className="font-semibold text-[14px] leading-[22px] tracking-wide text-white">
                            {subtitle}
                        </p>

                        <h2 className="font-light text-[24px] md:text-[32px] leading-[1.2] md:leading-[40px] max-w-[384px] text-white -tracking-tight">
                            {title}
                        </h2>

                        <p className="text-[14px] md:text-[16px] leading-normal max-w-[384px] text-white opacity-90">
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
