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
  options?: {
    id: string;
    title: string;
    bullets: string[];
  }[];
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
          <div className="relative h-[575px] w-full overflow-hidden rounded-[8px] md:h-auto md:min-h-[320px] md:w-[320px] lg:min-h-[374px] lg:w-[504px]">
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

              {banner.options && banner.options.length > 0 ? (
                <div className="font-source-sans text-[18px] leading-[26px] text-[#1a1d21]">
                  {banner.optionalHeading && (
                    <p className="mb-2">{banner.optionalHeading}</p>
                  )}
                  <div className="space-y-3">
                    {banner.options.map((option) => (
                      <div key={option.id}>
                        <p className="font-bold text-[18px] leading-[26px]">
                          {option.title}
                        </p>
                        {option.bullets && option.bullets.length > 0 && (
                          <ul className="list-disc space-y-1 pl-7">
                            {option.bullets.map((bullet, index) => (
                              <li key={index}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                banner.optionalHeading && (
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
                )
              )}
            </div>

            <div className="w-full md:w-auto mt-4 md:mt-0">
              <Button
                variant="secondary"
                size="md"
                href={banner.ctaHref}
                className="w-full md:w-fit rounded-full border-[#00008f] text-[#00008f]"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0006 15.6841C11.8329 15.6841 11.666 15.6192 11.5381 15.4925L6.03813 10.048C5.78016 9.79257 5.78016 9.3783 6.03813 9.12282C6.2961 8.86735 6.71424 8.86735 6.97221 9.12282L12.0006 14.1005L17.029 9.12282C17.2869 8.86735 17.7051 8.86735 17.963 9.12282C18.221 9.3783 18.221 9.79257 17.963 10.048L12.463 15.4925C12.3352 15.6192 12.1683 15.6841 12.0006 15.6841Z" fill="currentColor" />
                    <path d="M12 15.0234C11.6361 15.0234 11.3408 14.7311 11.3408 14.3708V3.65234C11.3408 3.29201 11.6361 2.99966 12 2.99966C12.3639 2.99966 12.6592 3.29201 12.6592 3.65234V14.3708C12.6592 14.7311 12.3639 15.0234 12 15.0234Z" fill="currentColor" />
                    <path d="M18.8258 21.0003H5.17424C4.81057 21.0003 4.51562 20.7082 4.51562 20.3476C4.51562 19.9871 4.81057 19.6949 5.17424 19.6949H18.8258C19.1894 19.6949 19.4844 19.9871 19.4844 20.3476C19.4844 20.7082 19.1894 21.0003 18.8258 21.0003Z" fill="currentColor" />
                  </svg>
                }
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


