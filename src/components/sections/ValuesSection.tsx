"use client";

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
        <div className="group h-[368px] w-[312px] shrink-0 cursor-pointer overflow-hidden rounded-[12px] bg-[#f7f7f8] transition-colors duration-500 hover:bg-[#00008f]">
            <div className="flex h-full flex-col items-center justify-end px-5 py-6">
                {/* Text container — slides up on hover to make room for + icon */}
                <div className="flex w-full translate-y-[25px] flex-col items-center gap-2 transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="font-brand-text text-center text-[32px] font-bold leading-[40px] text-[#1a1d21] whitespace-pre-line transition-colors duration-500 group-hover:text-white">
                        {value.title}
                    </h3>
                    <p className="font-source-sans text-center text-[16px] leading-[24px] text-[#434956] transition-colors duration-500 group-hover:text-white">
                        {value.subtitle}
                    </p>
                </div>

                {/* Plus icon — fades in on hover */}
                <div className="mt-[21px] translate-y-[25px] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <PlusIcon />
                </div>
            </div>
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

                {/* Cards — 3+2 grid layout */}
                <div className="flex flex-wrap items-start justify-center gap-[30px]">
                    {values.map((value) => (
                        <ValueCardItem key={value.id} value={value} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
