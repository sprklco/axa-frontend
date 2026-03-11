import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import type { ClimatePillar } from "@/types/sustainability";

export interface ClimateTransitionSectionProps {
    eyebrow: string;
    heading: string;
    subtitle: string;
    pillars: ClimatePillar[];
    className?: string;
}

export function ClimateTransitionSection({
    eyebrow,
    heading,
    subtitle,
    pillars,
    className,
}: ClimateTransitionSectionProps) {
    return (
        <section className={cn("bg-white py-10 md:py-16 lg:py-[64px]", className)}>
            <Container className="flex flex-col items-center gap-12">
                {/* Section header */}
                <div className="flex flex-col items-center gap-3 text-center max-w-[760px]">
                    <p className="font-source-sans text-[16px] leading-[24px] md:text-[18px] font-semibold md:leading-[26px] text-[#606776]">
                        {eyebrow}
                    </p>
                    <h2 className="font-headline text-[34px] leading-[42px] md:text-[48px] font-light md:leading-[56px] text-[#1a1d21]">
                        {heading}
                    </h2>
                    <p className="font-source-sans text-[16px] leading-[24px] text-[#1a1d21]">
                        {subtitle}
                    </p>
                </div>

                {/* Pillars */}
                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.id}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Icon */}
                            <div className="flex h-[106px] w-full items-center justify-center">
                                <div className="relative size-[87px]">
                                    <Image
                                        src={pillar.iconSrc}
                                        alt={pillar.iconAlt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <p className="mt-2 font-source-sans text-[20px] leading-[28px] text-[#1a1d21]">
                                {pillar.title}
                            </p>

                            {/* Description */}
                            <p className="mt-4 font-source-sans text-[16px] leading-[24px] text-[#434956] max-w-[281px]">
                                {pillar.description}
                            </p>

                            {/* Divider + footer bullets */}
                            <div className="mt-6 w-full max-w-[313px] border-t border-[#00008f] pt-[10px]">
                                {pillar.footerBullets.map((bullet, i) => (
                                    <p
                                        key={i}
                                        className="font-source-sans text-[16px] leading-[24px] text-[#434956]"
                                    >
                                        {bullet}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
