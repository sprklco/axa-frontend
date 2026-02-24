"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/CTAButton";
import { cn } from "@/lib/cn";

export interface HighlightBanner {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  lead: string;
  bullets: string[];
  optionalHeading?: string;
  optionalBullets?: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface HighlightBannerTab {
  id: string;
  label: string;
  banner: HighlightBanner;
}

export interface HighlightBannersSectionProps {
  tabs: readonly HighlightBannerTab[];
  className?: string;
}

export function HighlightBannersSection({
  tabs,
  className,
}: HighlightBannersSectionProps) {
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id ?? "");

  const activeTab =
    tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  if (!activeTab) {
    return null;
  }

  const { banner } = activeTab;

  return (
    <section className={cn("bg-[#f7f7f8] py-12 md:py-16 lg:py-20", className)}>
      <Container className="flex flex-col gap-8 lg:gap-10">
        {/* Tabs */}
        <div className="flex justify-center">
          <div className="flex items-center gap-[18px] rounded-full bg-[#fafafa] p-2">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={cn(
                    "relative flex items-center justify-center rounded-full px-[18px] py-[13px]",
                    "font-source-sans text-[18px] leading-[26px] transition-colors",
                    isActive
                      ? "bg-[#00008f] text-white"
                      : "text-[#00008f]"
                  )}
                  aria-pressed={isActive}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active banner */}
        <article className="flex flex-col gap-8 rounded-[12px] bg-white p-4 md:flex-row md:items-stretch md:gap-10 md:px-6 md:py-6 lg:gap-20 lg:px-10 lg:py-6">
          <div className="relative h-[260px] overflow-hidden rounded-[8px] md:h-auto md:min-h-[320px] md:w-[320px] lg:min-h-[374px] lg:w-[504px]">
            <Image
              src={banner.imageSrc}
              alt={banner.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 504px, (min-width: 768px) 320px, 100vw"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 rounded-[8px] bg-black/10" />
          </div>

          <div className="flex flex-1 flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-[47px] w-[51px] rounded-sm bg-gradient-to-b from-[#ff1721] to-[#ff6171]" />
                <h2 className="font-headline text-[32px] leading-[40px] text-[#1a1d21]">
                  {banner.title}
                </h2>
              </div>

              <p className="font-source-sans text-[18px] leading-[26px] text-[#1a1d21] max-w-[489px]">
                {banner.lead}
              </p>

              <ul className="font-source-sans list-disc space-y-1 text-[18px] leading-[26px] text-[#1a1d21] pl-7">
                {banner.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>

              {banner.optionalHeading && (
                <div className="font-source-sans text-[18px] leading-[26px] text-[#1a1d21]">
                  <p className="mb-1">{banner.optionalHeading}</p>
                  {banner.optionalBullets && (
                    <ul className="list-disc space-y-1 pl-7">
                      {banner.optionalBullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            <div>
              <Button
                variant="secondary"
                size="md"
                href={banner.ctaHref}
                className="rounded-full border-[#00008f] text-[#00008f]"
              >
                {banner.ctaLabel}
              </Button>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}


