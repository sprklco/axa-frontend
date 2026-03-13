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
        <section className={cn("py-0 min-[1025px]:py-[80px] bg-white", className)}>
            <Container className="px-4">
                {/* Outer rounded container with background image */}
                <div className="relative w-full overflow-hidden rounded-[12px] h-[494px] min-[1025px]:h-[600px] flex items-end pb-6 px-4 min-[1025px]:items-center min-[1025px]:pb-0 min-[1025px]:px-0">
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

                    {/* Glassmorphism Card */}
                    <div className={cn(
                        "relative z-10 w-full min-[1025px]:w-[516px]",
                        "m-0 min-[1025px]:ml-[48px]",
                        "px-6 py-8 min-[1025px]:pl-[32px] min-[1025px]:pr-[40px] min-[1025px]:py-[40px]",
                        "backdrop-blur-[46px] bg-[#535353]/50 rounded-[8px]",
                        "flex flex-col gap-6 min-[1025px]:gap-[32px]",
                        "items-start shrink-0 text-white"
                    )}>
                        {/* Text Content Block */}
                        <div className="flex flex-col gap-4 min-[1025px]:gap-[24px] w-full">
                            <p className="font-source-sans font-normal text-[14px] leading-[22px] tracking-normal text-white">
                                {subtitle}
                            </p>

                            <h2 className="font-headline font-light text-[30px] md:text-[32px] min-[1025px]:text-[40px] leading-[38px] md:leading-[40px] min-[1025px]:leading-[48px] text-white -tracking-tight">
                                {title}
                            </h2>

                            <p className="font-source-sans font-normal text-[16px] min-[1025px]:text-[18px] leading-[24px] min-[1025px]:leading-[26px] text-white opacity-90">
                                {description}
                            </p>
                        </div>

                        <div className="text-white">
                            <Button 
                                variant="inverse" 
                                href={ctaHref} 
                                size="lg" 
                                className="px-[32px] h-[56px] text-[16px] whitespace-nowrap min-w-fit"
                            >
                                {ctaText}
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
