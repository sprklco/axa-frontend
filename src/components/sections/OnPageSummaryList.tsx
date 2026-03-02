"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export interface OnPageSummaryItem {
  id: string;
  label: string;
  /** ID of the target section element in the DOM */
  targetId: string;
}

export interface OnPageSummaryListProps {
  items: OnPageSummaryItem[];
  /** Pixels to offset scroll position (e.g. fixed navbar height). */
  scrollOffset?: number;
  className?: string;
}

export function OnPageSummaryList({
  items,
  scrollOffset = 160,
  className,
}: OnPageSummaryListProps) {
  const [activeId, setActiveId] = useState<string | null>(
    items[0]?.id ?? null,
  );

  const handleClick = useCallback(
    (item: OnPageSummaryItem) => {
      const target = document.getElementById(item.targetId);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const targetTop = window.scrollY + rect.top - scrollOffset;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });

      setActiveId(item.id);
    },
    [scrollOffset],
  );

  useEffect(() => {
    if (!items.length) return;

    const sections = items
      .map((item) => document.getElementById(item.targetId))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top,
          );

        if (!visible[0]) return;

        const matched = items.find(
          (item) => item.targetId === visible[0].target.id,
        );

        if (matched && matched.id !== activeId) {
          setActiveId(matched.id);
        }
      },
      {
        threshold: 0.3,
        root: null,
        rootMargin: `-${scrollOffset}px 0px -40% 0px`,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items, scrollOffset, activeId]);

  if (!items.length) return null;

  return (
    <nav
      aria-label="On-page section navigation"
      className={cn("bg-white", className)}
    >
      <ul className="flex flex-col">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleClick(item)}
                className={cn(
                  "flex w-full items-center border-b border-[rgba(0,0,0,0.05)] px-3 py-4 text-left outline-none transition-transform duration-200 ease-out",
                  isActive && "translate-x-1 md:translate-x-2",
                )}
              >
                <span className="font-source-sans text-[16px] leading-[22px] tracking-[-0.43px] text-[#00008f]">
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

