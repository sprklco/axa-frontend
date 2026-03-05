"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/CTAButton";

export interface BannerData {
    preHeading?: string;
    heading: string;
    description?: string;
    ctaText: string;
    ctaHref: string;
}

export interface BannerSectionProps {
    data: BannerData;
    /** Optional icon to display inside the CTA button */
    icon?: ReactNode;
}

export function BannerSection({ data, icon }: BannerSectionProps) {
    return (
        <section className="w-full bg-[#0c0e45] py-20 px-6">
            <Container className="flex w-full items-center">
                <div className="flex w-full max-w-[800px] flex-col items-start gap-8">
                    {/* Text Content */}
                    <div className="flex flex-col gap-6 text-white w-full">
                        {data.preHeading && (
                            <p className="font-source-sans text-[14px] leading-[22px]">
                                {data.preHeading}
                            </p>
                        )}
                        <h2 className="font-headline text-[32px] md:text-[48px] font-light leading-tight md:leading-[56px] text-white">
                            {data.heading}
                        </h2>
                        {data.description && (
                            <p className="font-source-sans text-[18px] leading-[26px]">
                                {data.description}
                            </p>
                        )}
                    </div>

                    {/* CTA Button */}
                    <Button
                        variant="ghost"
                        size="md"
                        href={data.ctaHref}
                        icon={icon}
                    >
                        {data.ctaText}
                    </Button>
                </div>
            </Container>
        </section>
    );
}
