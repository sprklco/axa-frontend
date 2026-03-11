 "use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import type { BranchLocation } from "@/types/branches";

export interface BranchLocationsPanelProps {
    branches: ReadonlyArray<BranchLocation>;
    selectedBranchId?: string | null;
    onSelectBranch?: (id: string | null) => void;
    className?: string;
}

const StarIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        aria-hidden="true"
        className="shrink-0"
    >
        <path
            d="M8 1.5L9.944 5.36L14.24 5.98L11.12 8.94L11.888 13.22L8 11.16L4.112 13.22L4.88 8.94L1.76 5.98L6.056 5.36L8 1.5Z"
            fill="#FFD053"
        />
    </svg>
);

const ChevronRightIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        aria-hidden="true"
        className="shrink-0 text-[#1a1d21]"
    >
        <path
            d="M6.25 3.5L10 7.5L6.25 11.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export function BranchLocationsPanel({
    branches,
    selectedBranchId,
    onSelectBranch,
    className,
}: BranchLocationsPanelProps) {
    const [pageIndex, setPageIndex] = useState(0);

    if (!branches.length) return null;

    const PAGE_SIZE = 3;
    const pageCount = Math.ceil(branches.length / PAGE_SIZE);

    useEffect(() => {
        if (pageIndex > pageCount - 1) {
            setPageIndex(Math.max(pageCount - 1, 0));
        }
    }, [pageIndex, pageCount]);

    useEffect(() => {
        if (!selectedBranchId) return;
        const index = branches.findIndex((b) => b.id === selectedBranchId);
        if (index === -1) return;
        const desiredPage = Math.floor(index / PAGE_SIZE);
        if (desiredPage !== pageIndex) {
            setPageIndex(desiredPage);
        }
    }, [selectedBranchId, branches, pageIndex]);

    const start = pageIndex * PAGE_SIZE;
    const pageBranches = branches.slice(start, start + PAGE_SIZE);

    const handleSelect = (id: string | null) => {
        if (onSelectBranch) {
            onSelectBranch(id);
        }
    };

    return (
        <div
            className={cn(
                "pointer-events-none absolute left-7 top-16 bottom-6 flex w-full max-w-[444px] flex-col justify-between",
                className
            )}
        >
            <div className="flex flex-col gap-3">
                {pageBranches.map((branch) => {
                const isExpanded = selectedBranchId === branch.id;

                if (!isExpanded) {
                    return (
                        <button
                            key={branch.id}
                            type="button"
                            onClick={() => handleSelect(branch.id)}
                            className="pointer-events-auto flex flex-col gap-1 rounded-[8px] bg-white px-8 pb-3 pt-5 text-left shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-200 ease-out hover:bg-[#f7f7f8]"
                        >
                            <header className="flex items-center justify-between gap-4">
                                {/* Collapsed: star aligned to the left next to title */}
                                <div className="flex items-center gap-3">
                                    <h3 className="font-headline text-[20px] font-bold leading-[28px] text-[#1a1d21]">
                                        {branch.name}
                                    </h3>
                                    <div className="flex items-center gap-1">
                                        <span className="font-source-sans text-[18px] leading-[26px] text-[#1a1d21]">
                                            {branch.rating.toFixed(1).replace(".", ",")}
                                        </span>
                                        <StarIcon />
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <ChevronRightIcon />
                                </div>
                            </header>
                            <p className="font-source-sans text-[14px] leading-[22px] text-[#434956]">
                                {branch.phone}
                            </p>
                        </button>
                    );
                }

                // Expanded variant
                return (
                    <article
                        key={branch.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleSelect(branch.id)}
                        className="pointer-events-auto flex cursor-pointer flex-col gap-3 rounded-[8px] bg-white px-8 pb-6 pt-6 text-left shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out hover:bg-[#f7f7f8]"
                    >
                        <header className="flex items-start justify-between gap-4">
                            <div className="flex max-w-[280px] flex-col gap-1">
                                <h3 className="font-headline text-[24px] font-bold leading-[32px] text-[#1a1d21]">
                                    {branch.name}
                                </h3>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1">
                                    <span className="font-source-sans text-[18px] leading-[26px] text-[#1a1d21]">
                                        {branch.rating.toFixed(1).replace(".", ",")}
                                    </span>
                                    <StarIcon />
                                </div>
                                <button
                                    type="button"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        handleSelect(null);
                                    }}
                                    aria-label="Close branch details"
                                    className="flex h-6 w-6 items-center justify-center rounded-full text-[#1a1d21] hover:bg-[#f2f2f3] transition-colors"
                                >
                                    <span className="text-[16px] leading-none">×</span>
                                </button>
                            </div>
                        </header>
                        <div className="flex flex-col gap-1 font-source-sans text-[14px] leading-[22px] text-[#1a1d21]">
                            <p>{branch.phone}</p>
                            {branch.addressLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                            <p className="text-[#434956]">{branch.city}</p>
                        </div>
                    </article>
                );
            })}
            </div>

            {pageCount > 1 && (
                <div className="pointer-events-auto flex w-full items-center justify-center">
                    <div className="inline-flex w-full max-w-[444px] items-center justify-center gap-8 rounded-[8px] bg-white px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                        <button
                            type="button"
                            onClick={() => {
                                if (pageIndex > 0) {
                                    handleSelect(null);
                                    setPageIndex(pageIndex - 1);
                                }
                            }}
                            disabled={pageIndex === 0}
                            className={cn(
                                "flex h-6 w-6 items-center justify-center rounded-full text-[#00008f] transition-colors",
                                pageIndex === 0 ? "opacity-40 cursor-default" : "hover:bg-[#f2f2f3]"
                            )}
                            aria-label="Previous branches page"
                        >
                            <span className="-rotate-180">
                                <ChevronRightIcon />
                            </span>
                        </button>

                        <div className="flex items-center gap-2">
                            {Array.from({ length: pageCount }).map((_, index) => {
                                const isActive = index === pageIndex;
                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => {
                                            if (index !== pageIndex) {
                                                handleSelect(null);
                                                setPageIndex(index);
                                            }
                                        }}
                                        className={cn(
                                            "min-w-[32px] rounded-full px-3 py-1 text-center text-[18px] leading-[26px] font-source-sans transition-colors",
                                            isActive
                                                ? "bg-[#00008f] text-white"
                                                : "bg-transparent text-[#8080c7] hover:bg-[#f7f7f8]"
                                        )}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {index + 1}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                if (pageIndex < pageCount - 1) {
                                    handleSelect(null);
                                    setPageIndex(pageIndex + 1);
                                }
                            }}
                            disabled={pageIndex === pageCount - 1}
                            className={cn(
                                "flex h-6 w-6 items-center justify-center rounded-full text-[#00008f] transition-colors",
                                pageIndex === pageCount - 1
                                    ? "opacity-40 cursor-default"
                                    : "hover:bg-[#f2f2f3]"
                            )}
                            aria-label="Next branches page"
                        >
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

