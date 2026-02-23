"use client";

import { Container } from "@/components/layout/Container";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/CTAButton";

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
}

export interface ComparisonTableSectionProps {
    data: ComparisonData;
}

export function ComparisonTableSection({ data }: ComparisonTableSectionProps) {
    if (!data || !data.packages || data.packages.length === 0) return null;

    return (
        <section className="w-full bg-white py-12 md:py-20 lg:py-24">
            <Container className="flex flex-col items-center">
                {/* Header Sequence */}
                <div className="flex w-full flex-col items-center gap-3 text-center mb-12">
                    <p className="font-source-sans text-[18px] font-semibold leading-[26px] text-[#606776]">
                        {data.title}
                    </p>
                    <h2 className="font-headline text-[32px] md:text-[48px] font-light leading-tight md:leading-[56px] text-[#1a1d21]">
                        {data.subtitle}
                    </h2>
                </div>

                {/* Table Container - Enable X scrolling for responsive */}
                <div className="flex w-full justify-center overflow-x-auto pb-6 scrollbar-hide px-4 md:px-0">
                    <div className="min-w-[1000px] md:min-w-max mx-auto">
                        {/* Table Header Row (Plan Names) */}
                        <div className="flex items-end pt-2">
                            {/* Empty top-left cell for feature names column */}
                            <div className="w-[180px] shrink-0" aria-hidden="true" />
                            {data.packages.map((pkg) => (
                                <div
                                    key={pkg.id}
                                    className="flex w-[160px] shrink-0 items-end justify-center"
                                >
                                    <div className="flex h-[40px] w-[137px] items-center justify-center rounded-t-lg bg-[#0c0e45]">
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
                                        {/* Feature Name Cell (Sticky conceptually) */}
                                        <div
                                            className={`flex w-[180px] shrink-0 flex-col items-start justify-center px-2 py-3 ${isAlternateRow ? "bg-[#f8faff]" : "bg-white"
                                                }`}
                                        >
                                            <span className="font-source-sans text-[12px] md:text-[14px] leading-snug text-[#1d2433]">
                                                {feature.label}
                                            </span>
                                            {feature.subLabel && (
                                                <span className="font-source-sans text-[10px] md:text-[12px] leading-snug text-[#1d2433] opacity-70">
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
                                                    className={`flex w-[160px] shrink-0 flex-col items-center justify-center px-2 py-3 ${isAlternateRow ? "bg-[#f8faff]" : "bg-white"
                                                        }`}
                                                >
                                                    {value === true ? (
                                                        <Check className="h-5 w-5 text-[#00008f]" aria-label="Included" />
                                                    ) : value === false ? (
                                                        <span className="text-[#1d2433] opacity-50">-</span>
                                                    ) : (
                                                        <span className="font-source-sans text-[12px] md:text-[14px] leading-snug text-center text-[#1d2433] whitespace-pre-wrap">
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

                {/* CTA Button */}
                {data.ctaText && (
                    <div className="mt-8 flex w-full justify-center">
                        <Button variant="secondary" size="md">
                            {data.ctaText}
                        </Button>
                    </div>
                )}
            </Container>
        </section>
    );
}
