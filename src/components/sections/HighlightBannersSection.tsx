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
  footnote?: string;
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
  const hasMultipleTabs = tabs.length > 1;

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
        {hasMultipleTabs && (
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
        )}

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
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-[32px] w-[38px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 51 47"
                    className="h-[32px] w-auto"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M35.1919 0H51C50.7954 0.355851 50.1725 1.13294 49.903 1.48984L47.7898 4.30122L40.46 14.0554L15.7014 47H0C0.684482 46.0397 1.45686 45.0426 2.16702 44.0943L6.10362 38.8357L18.0382 22.8978L29.3963 7.72791L33.1128 2.76417C33.7886 1.86145 34.4957 0.880691 35.1919 0Z"
                      fill="#FF1721"
                    />
                  </svg>
                </div>
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

              {banner.footnote && (
                <p className="font-source-sans text-[18px] leading-[26px] text-[#1a1d21]">
                  {banner.footnote}
                </p>
              )}

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


