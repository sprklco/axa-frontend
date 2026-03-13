"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import type { ValueCard } from "@/types/about";

interface ValuesSectionProps {
    eyebrow: string;
    heading: string;
    description: string;
    values: ValueCard[];
    className?: string;
}

function PlusIcon() {
    return (
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white">
            <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6.5 1V12M1 6.5H12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}

function ValueCardItem({ value }: { value: ValueCard }) {
    return (
        <div className="group flex h-[368px] w-full max-w-[312px] shrink-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-[12px] bg-[#f7f7f8] p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="relative mb-2 h-[150px] w-[150px]">
                <Image
                    src={value.imageSrc}
                    alt={value.title}
                    fill
                    className="object-contain"
                />
            </div>
            <h3 className="font-brand-text text-center text-[32px] font-bold leading-[40px] text-[#1a1d21] whitespace-pre-line">
                {value.title}
            </h3>
            <p className="font-source-sans text-center text-[16px] leading-[24px] text-[#434956]">
                {value.subtitle}
            </p>
        </div>
    );
}

export function ValuesSection({
    eyebrow,
    heading,
    description,
    values,
    className,
}: ValuesSectionProps) {
    return (
        <section
            className={`flex flex-col items-center justify-center bg-white px-4 md:px-[72px] py-16 ${className ?? ""}`}
        >
            <Container className="flex flex-col items-center gap-16">
                {/* Titles */}
                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="font-source-sans text-[18px] font-semibold leading-[26px] text-[#606776]">
                        {eyebrow}
                    </p>
                    <h2 className="font-headline text-[34px] leading-[42px] md:text-[48px] font-light md:leading-[56px] text-[#1a1d21]">
                        {heading}
                    </h2>
                    <p className="max-w-[822px] font-source-sans text-[16px] leading-[24px] text-[#1a1d21]">
                        {description}
                    </p>
                </div>

                {/* Cards — 4 column grid layout */}
                <div className="grid w-full max-w-[1296px] grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((value) => (
                        <ValueCardItem key={value.id} value={value} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
