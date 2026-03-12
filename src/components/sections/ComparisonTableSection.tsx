"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/CTAButton";
import Link from "next/link";

export interface FeatureRow {
    id: string;
    label: string;
    subLabel?: string;
}

export interface PackageColumn {
    id: string;
    label: string;
    features: Record<string, string | boolean>;
}

export interface ComparisonData {
    title: string;
    subtitle: string;
    features: FeatureRow[];
    packages: PackageColumn[];
    ctaText?: string;
    ctaHref?: string;
    labelWidthClassName?: string;
    packageWidthClassName?: string;
    headerWidthClassName?: string;
    minWidthClassName?: string;
}

export interface ComparisonTableSectionProps {
    data: ComparisonData;
}

export function ComparisonTableSection({ data }: ComparisonTableSectionProps) {
    const [openAccordion, setOpenAccordion] = useState<string | null>(
        data.packages[0]?.id ?? null
    );

    if (!data || !data.packages || data.packages.length === 0) return null;

    const labelWidthClass = data.labelWidthClassName || "w-[180px]";
    const packageWidthClass = data.packageWidthClassName || "w-[160px]";
    const headerWidthClass = data.headerWidthClassName || "w-[137px]";
    const minWidthClass = data.minWidthClassName || "min-w-[1000px] md:min-w-max";

    const toggleAccordion = (pkgId: string) => {
        setOpenAccordion((prev) => (prev === pkgId ? null : pkgId));
    };

    return (
        <section className="w-full bg-white py-12 md:py-20 lg:py-24">
            <Container className="flex flex-col items-center">
                {/* Header Sequence */}
                <div className="flex w-full flex-col items-center gap-3 text-center mb-12">
                    <p className="font-source-sans text-[16px] md:text-[18px] font-semibold leading-[24px] md:leading-[26px] text-[#606776]">
                        {data.title}
                    </p>
                    <h2 className="font-headline text-[34px] md:text-[48px] font-light leading-[42px] md:leading-[56px] text-[#1a1d21]">
                        {data.subtitle}
                    </h2>
                </div>

                {/* ===== DESKTOP TABLE (hidden on mobile) ===== */}
                <div className="hidden md:flex w-full justify-center overflow-x-auto pb-6 scrollbar-hide px-0">
                    <div className={`${minWidthClass} mx-auto`}>
                        {/* Table Header Row (Plan Names) */}
                        <div className="flex items-end pt-2">
                            <div className={`${labelWidthClass} shrink-0`} aria-hidden="true" />
                            {data.packages.map((pkg) => (
                                <div
                                    key={pkg.id}
                                    className={`flex ${packageWidthClass} shrink-0 items-end justify-center`}
                                >
                                    <div className={`flex h-[40px] justify-center items-center rounded-t-lg bg-[#0c0e45] ${headerWidthClass} px-2`}>
                                        <span className="font-brand-text text-[16px] font-bold leading-[26px] text-white text-center">
                                            {pkg.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Table Body */}
                        <div className="flex flex-col">
                            {data.features.map((feature, featureIndex) => {
                                const isAlternateRow = featureIndex % 2 === 0;

                                return (
                                    <div key={feature.id} className="flex min-h-[50px]">
                                        {/* Feature Name Cell */}
                                        <div
                                            className={`flex shrink-0 flex-col items-start justify-center px-2 py-3 ${labelWidthClass} ${isAlternateRow ? "bg-[#f8faff]" : "bg-white"
                                                }`}
                                        >
                                            <span className="font-source-sans text-[14px] leading-snug text-[#1d2433]">
                                                {feature.label}
                                            </span>
                                            {feature.subLabel && (
                                                <span className="font-source-sans text-[12px] leading-snug text-[#1d2433] opacity-70">
                                                    {feature.subLabel}
                                                </span>
                                            )}
                                        </div>

                                        {/* Package Value Cells */}
                                        {data.packages.map((pkg) => {
                                            const value = pkg.features[feature.id];
                                            return (
                                                <div
                                                    key={`${pkg.id}-${feature.id}`}
                                                    className={`flex shrink-0 flex-col items-center justify-center px-2 py-3 ${packageWidthClass} ${isAlternateRow ? "bg-[#f8faff]" : "bg-white"
                                                        }`}
                                                >
                                                    {value === true ? (
                                                        <Check className="h-5 w-5 text-[#00008f]" aria-label="Included" />
                                                    ) : value === false ? (
                                                        <span className="text-[#1d2433] opacity-50">-</span>
                                                    ) : (
                                                        <span className="font-source-sans text-[14px] leading-snug text-center text-[#1d2433] whitespace-pre-wrap">
                                                            {value}
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* ===== MOBILE ACCORDION (hidden on desktop) ===== */}
                <div className="flex md:hidden w-full flex-col gap-3 px-4">
                    {data.packages.map((pkg) => {
                        const isOpen = openAccordion === pkg.id;

                        return (
                            <div
                                key={pkg.id}
                                className="overflow-hidden rounded-[14px] border border-[#f3f4f6]"
                            >
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(pkg.id)}
                                    className={`flex h-[68px] w-full items-center justify-between px-5 transition-colors duration-200 ${isOpen
                                        ? "bg-[#0c0e45]"
                                        : "bg-white"
                                        }`}
                                    aria-expanded={isOpen}
                                >
                                    <span
                                        className={`font-headline text-[20px] font-bold leading-[28px] ${isOpen ? "text-white" : "text-[#0c0e45]"
                                            }`}
                                    >
                                        {pkg.label}
                                    </span>
                                    <ChevronDown
                                        className={`h-5 w-5 transition-transform duration-200 ${isOpen
                                            ? "rotate-180 text-white"
                                            : "text-[#0c0e45]"
                                            }`}
                                    />
                                </button>

                                {/* Accordion Body */}
                                {isOpen && (
                                    <div className="flex flex-col">
                                        {data.features.map((feature, featureIndex) => {
                                            const value = pkg.features[feature.id];
                                            const isAlternateRow = featureIndex % 2 === 0;

                                            return (
                                                <div
                                                    key={feature.id}
                                                    className={`flex flex-col gap-[6px] border-t border-[#f3f4f6] pb-4 pl-4 pt-[17px] ${isAlternateRow
                                                        ? "bg-[#f8faff]"
                                                        : "bg-white"
                                                        }`}
                                                >
                                                    {/* Feature Label */}
                                                    <span className="font-source-sans text-[12px] font-semibold uppercase leading-4 tracking-[0.6px] text-[#6a7282]">
                                                        {feature.label}
                                                        {feature.subLabel
                                                            ? ` ${feature.subLabel}`
                                                            : ""}
                                                    </span>

                                                    {/* Feature Value */}
                                                    <div className="min-h-[20px]">
                                                        {value === true ? (
                                                            <Check
                                                                className="h-6 w-6 text-[#00008f]"
                                                                aria-label="Included"
                                                            />
                                                        ) : value === false ? (
                                                            <span className="font-sans text-[14px] font-medium leading-5 tracking-[-0.15px] text-[#1d2433]">
                                                                -
                                                            </span>
                                                        ) : (
                                                            <span className="font-sans text-[14px] font-medium leading-5 tracking-[-0.15px] text-[#1d2433] whitespace-pre-wrap">
                                                                {value}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                {data.ctaText && (
                    <div className="mt-8 flex w-full justify-center px-4 md:px-0">
                        <Button variant="secondary" size="md" className="w-full md:w-auto">
                            <Link href={data.ctaHref || "#"}>
                                {data.ctaText}
                            </Link>
                        </Button>
                    </div>
                )}
            </Container>
        </section>
    );
}
