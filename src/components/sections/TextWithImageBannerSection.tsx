"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SharedBannerData } from "@/types/careers";
import { cn } from "@/lib/cn";

export interface TextWithImageBannerSectionProps {
    data: SharedBannerData;
    className?: string;
}

export function TextWithImageBannerSection({
    data,
    className,
}: TextWithImageBannerSectionProps) {
    return (
        <section className={cn("bg-[#f7f7f8] py-[32px] px-4 md:py-[72px] md:px-[72px]", className)}>
            <Container className="px-0 md:px-0 max-w-[1440px]">
                {/* Outer container mimicking the design */}
                <div className="bg-white flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 rounded-[12px] p-6 lg:py-[24px] lg:pl-[24px] lg:pr-[24px] w-full">

                    {/* Text Content */}
                    <div className="flex flex-col gap-5 items-start justify-end flex-1 max-w-[690px] text-[#1a1d21] order-2 md:order-1">
                        <h2 style={{ fontWeight: 300 }} className="font-headline font-light text-[32px] md:text-[42px] leading-[40px] md:leading-[56px]">
                            {data.title}
                        </h2>

                        <div className="font-source-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px]">
                            {/* Handling the hardcoded spans explicitly as per the design requirements */}
                            {/* Note: since the Figma specifically bolds "'Care' and 'Dare'", "'Care'", and "'Dare'" 
                                we will handle this gracefully. For a fully CMS driven approach, use a markdown renderer 
                                or rich text approach here. */}
                            <p className="mb-6 whitespace-pre-wrap">
                                <span className="font-semibold">{`‘Care’ and ‘Dare’`}</span>
                                {` are two words that drive everything we do - for the progress of our people and society at large.`}
                            </p>

                            <p className="mb-6 whitespace-pre-wrap">
                                <span className="font-semibold">{`'Care' `}</span>
                                {`means understanding the real needs of those around us. Listening, supporting, and making sure we always act with empathy and respect. It is about creating a space where people can thrive, collaborate, and grow.`}
                            </p>

                            <p className="mb-6 whitespace-pre-wrap">
                                <span className="font-semibold">{`'Dare' `}</span>
                                {`is the courage to challenge convention. To question what’s possible, and to embrace complexity as an opportunity to learn and evolve. It is about taking calculated risks, experimenting to drive change, and finding new paths forward.`}
                            </p>

                            {data.secondaryDescription && (
                                <p className="whitespace-pre-wrap">
                                    {data.secondaryDescription}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative w-full md:w-[521px] h-[182px] md:h-[520px] rounded-[12px] overflow-hidden shrink-0 order-1 md:order-2">
                        <Image
                            src={data.imageSrc}
                            alt={data.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(min-width: 768px) 521px, 100vw"
                        />
                    </div>

                </div>
            </Container>
        </section>
    );
}
