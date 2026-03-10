"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { JobVacancy } from "@/types/careers";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export interface JobVacanciesBannerSectionProps {
    data: {
        title: string;
        heading: string;
        description: string;
        imageSrc: string;
        jobs: JobVacancy[];
    };
    className?: string;
}

export function JobVacanciesBannerSection({
    data,
    className,
}: JobVacanciesBannerSectionProps) {
    return (
        <section className={cn("py-[48px] bg-white", className)}>
            <Container className="px-4 md:px-4 max-w-[1440px]">
                {/* Outer container with background image */}
                <div className="relative w-full overflow-hidden rounded-[12px] min-h-[494px] md:h-[603px] flex items-end px-4 pb-6 md:p-[48px]">
                    {/* Background Image & Overlay */}
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                        <Image
                            src={data.imageSrc}
                            alt="Career opportunities waiting for you"
                            fill
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* Glassmorphism Card */}
                    <div className={cn(
                        "relative z-10 w-full md:w-[480px] lg:w-[456px]",
                        "px-6 py-8 md:px-[40px] md:py-[40px] md:pl-[32px]",
                        "backdrop-blur-[46px] bg-[#535353]/50 rounded-[8px]",
                        "flex flex-col gap-8 md:gap-[32px]",
                        "items-start shrink-0 text-white"
                    )}>

                        <div className="flex flex-col gap-4 md:gap-[24px]">
                            <p className="font-source-sans font-normal text-[14px] leading-[22px] text-white">
                                {data.title}
                            </p>

                            <h2 className="font-headline font-light text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] text-white pr-4">
                                {data.heading}
                            </h2>

                            <p className="font-source-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-white">
                                {data.description}
                            </p>
                        </div>

                        {/* List of Job Vacancies */}
                        <div className="flex flex-col gap-4 w-full md:w-[373px]">
                            {data.jobs.map((job, index) => (
                                <div key={index} className="flex items-center justify-between w-full h-[24px]">
                                    <p className="font-source-sans font-semibold text-[16px] leading-[24px] text-white">
                                        {job.title}
                                    </p>

                                    <Link
                                        href={job.ctaHref}
                                        className="group flex items-center gap-2 font-source-sans font-semibold text-[16px] leading-[24px] text-white whitespace-nowrap"
                                    >
                                        <span>{job.ctaText}</span>
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
