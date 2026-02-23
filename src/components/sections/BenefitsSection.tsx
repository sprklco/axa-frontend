"use client";

import { Container } from "@/components/layout/Container";
import Image from "next/image";
import { CSSProperties } from "react";

export interface BenefitItem {
    id: string;
    iconUrl: string;
    title: string;
    description: string;
    IconStyle?: CSSProperties
}

export interface BenefitsSectionProps {
    heading: string;
    benefits: BenefitItem[];
}

export function BenefitsSection({ heading, benefits }: BenefitsSectionProps) {
    if (!benefits || benefits.length === 0) return null;

    return (
        <section className="w-full bg-white py-16 md:py-20 px-6">
            <Container className="flex w-full flex-col items-center gap-12 md:gap-16">
                <h2 className="font-headline text-[32px] md:text-[48px] font-light leading-tight md:leading-[56px] text-center text-[#1a1d21] whitespace-pre-wrap max-w-[800px]">
                    {heading}
                </h2>

                <div className="flex w-full flex-wrap justify-center gap-8 md:gap-4 lg:gap-8">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="flex w-[266px] min-w-[227px] flex-col items-center justify-end gap-2 px-4 md:px-8 pb-6 text-center"
                        >
                            <div className="relative mb-4 flex h-[112px] w-[112px] items-center justify-center">
                                {/* Using unoptimized standard img tag since we will substitute real remote SVGs later, but this acts as placeholder */}
                                <img
                                    src={benefit.iconUrl}
                                    alt={benefit.title}
                                    style={benefit.IconStyle}
                                    className="h-auto w-auto max-h-[76px] max-w-[104px] object-contain"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="font-source-sans text-[20px] leading-[28px] text-[#1a1d21]">
                                    {benefit.title}
                                </h3>
                                <p className="font-source-sans text-[16px] leading-[24px] text-[#434956] whitespace-pre-wrap">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
