"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { BranchLocation } from "@/types/branches";

export interface BranchLocationsPanelProps {
    branches: ReadonlyArray<BranchLocation>;
    selectedBranchId?: string | null;
    onSelectBranch?: (id: string | null) => void;
    className?: string;
}

type MobileView = "collapsed" | "list" | "detail";

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

const ChevronUpIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        aria-hidden="true"
        className="shrink-0 text-[#00008f]"
    >
        <path
            d="M13.5 11.25L9 6.75L4.5 11.25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        aria-hidden="true"
        className="shrink-0 text-[#00008f]"
    >
        <path
            d="M11.25 4.5L6.75 9L11.25 13.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const PAGE_SIZE = 3;

export function BranchLocationsPanel({
    branches,
    selectedBranchId,
    onSelectBranch,
    className,
}: BranchLocationsPanelProps) {
    const [pageIndex, setPageIndex] = useState(0);
    const [mobileView, setMobileView] = useState<MobileView>("collapsed");
    const isInitialMount = useRef(true);

    if (!branches.length) return null;

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

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        if (selectedBranchId) {
            setMobileView("detail");
        }
    }, [selectedBranchId]);

    const start = pageIndex * PAGE_SIZE;
    const pageBranches = branches.slice(start, start + PAGE_SIZE);
    const selectedBranch = selectedBranchId
        ? branches.find((b) => b.id === selectedBranchId)
        : null;

    const handleSelect = (id: string | null) => {
        onSelectBranch?.(id);
    };

    const handleMobileSelect = (id: string) => {
        onSelectBranch?.(id);
        setMobileView("detail");
    };

    const handleMobileBack = () => {
        setMobileView("list");
    };

    const toggleMobileSheet = () => {
        setMobileView((prev) => (prev === "collapsed" ? "list" : "collapsed"));
    };

    return (
        <>
            {/* ═══════ Desktop panel (md+) ═══════ */}
            <div
                className={cn(
                    "pointer-events-none absolute left-7 top-16 bottom-6 hidden w-full max-w-[444px] flex-col justify-between md:flex",
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
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-headline text-[20px] font-bold leading-[28px] text-[#1a1d21]">
                                                {branch.name}
                                            </h3>
                                            <div className="flex items-center gap-1">
                                                <span className="font-source-sans text-[18px] leading-[26px] text-[#1a1d21]">
                                                    {branch.rating
                                                        .toFixed(1)
                                                        .replace(".", ",")}
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
                                                {branch.rating
                                                    .toFixed(1)
                                                    .replace(".", ",")}
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
                                            className="flex h-6 w-6 items-center justify-center rounded-full text-[#1a1d21] transition-colors hover:bg-[#f2f2f3]"
                                        >
                                            <span className="text-[16px] leading-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                </header>
                                <div className="flex flex-col gap-1 font-source-sans text-[14px] leading-[22px] text-[#1a1d21]">
                                    <p>{branch.phone}</p>
                                    {branch.addressLines.map((line) => (
                                        <p key={line}>{line}</p>
                                    ))}
                                    <p className="text-[#434956]">
                                        {branch.city}
                                    </p>
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
                                    pageIndex === 0
                                        ? "cursor-default opacity-40"
                                        : "hover:bg-[#f2f2f3]"
                                )}
                                aria-label="Previous branches page"
                            >
                                <span className="-rotate-180">
                                    <ChevronRightIcon />
                                </span>
                            </button>

                            <div className="flex items-center gap-2">
                                {Array.from({ length: pageCount }).map(
                                    (_, index) => {
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
                                                    "min-w-[32px] rounded-full px-3 py-1 text-center font-source-sans text-[18px] leading-[26px] transition-colors",
                                                    isActive
                                                        ? "bg-[#00008f] text-white"
                                                        : "bg-transparent text-[#8080c7] hover:bg-[#f7f7f8]"
                                                )}
                                                aria-current={
                                                    isActive
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {index + 1}
                                            </button>
                                        );
                                    }
                                )}
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
                                        ? "cursor-default opacity-40"
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

            {/* ═══════ Mobile bottom sheet ═══════ */}
            <div className="absolute inset-x-0 bottom-0 z-10 md:hidden">
                {/* Collapsed state */}
                {mobileView === "collapsed" && (
                    <button
                        type="button"
                        onClick={toggleMobileSheet}
                        className="flex w-full flex-col items-center rounded-t-[16px] bg-[#f7f7f8] py-6"
                    >
                        <div className="flex items-center gap-1">
                            <span className="font-source-sans text-[16px] font-semibold leading-6 text-[#00008f]">
                                Our Offices
                            </span>
                            <ChevronUpIcon />
                        </div>
                    </button>
                )}

                {/* Expanded list state */}
                {mobileView === "list" && (
                    <div className="flex max-h-[85%] flex-col items-center gap-5 rounded-t-[16px] bg-[#f7f7f8] px-4 pb-3 pt-4">
                        <button
                            type="button"
                            onClick={toggleMobileSheet}
                            className="flex items-center gap-1"
                        >
                            <span className="font-source-sans text-[16px] font-semibold leading-6 text-[#00008f]">
                                Our Offices
                            </span>
                            <ChevronUpIcon />
                        </button>

                        <p className="font-source-sans text-[16px] font-semibold leading-6 text-[#606776]">
                            {branches.length} offices nearby
                        </p>

                        <div className="flex w-full flex-col gap-2">
                            {pageBranches.map((branch) => (
                                <button
                                    key={branch.id}
                                    type="button"
                                    onClick={() =>
                                        handleMobileSelect(branch.id)
                                    }
                                    className="flex flex-col rounded-[8px] bg-white px-4 pb-3 text-left"
                                >
                                    <div className="h-7" />
                                    <div className="flex flex-col gap-2">
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center gap-6">
                                                <h3 className="font-headline text-[18px] font-bold leading-[26px] text-[#1a1d21]">
                                                    {branch.name}
                                                </h3>
                                                <div className="flex items-center gap-1">
                                                    <span className="font-source-sans text-[16px] leading-6 text-[#1a1d21]">
                                                        {branch.rating
                                                            .toFixed(1)
                                                            .replace(".", ",")}
                                                    </span>
                                                    <StarIcon />
                                                </div>
                                            </div>
                                            <ChevronRightIcon />
                                        </div>
                                        <p className="font-source-sans text-[14px] leading-[22px] text-[#434956]">
                                            {branch.phone}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {pageCount > 1 && (
                            <div className="flex items-center justify-center gap-6">
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (pageIndex > 0) {
                                            setPageIndex(pageIndex - 1);
                                        }
                                    }}
                                    disabled={pageIndex === 0}
                                    className={cn(
                                        "flex h-6 w-6 items-center justify-center rounded-full text-[#00008f] transition-colors",
                                        pageIndex === 0
                                            ? "cursor-default opacity-40"
                                            : "hover:bg-[#f2f2f3]"
                                    )}
                                    aria-label="Previous branches page"
                                >
                                    <span className="rotate-180">
                                        <ChevronRightIcon />
                                    </span>
                                </button>

                                <div className="flex items-center">
                                    {Array.from({ length: pageCount }).map(
                                        (_, index) => {
                                            const isActive =
                                                index === pageIndex;
                                            return (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => {
                                                        if (
                                                            index !== pageIndex
                                                        ) {
                                                            setPageIndex(index);
                                                        }
                                                    }}
                                                    className={cn(
                                                        "flex items-center justify-center rounded-full px-4 py-1 font-source-sans text-[16px] leading-6 transition-colors",
                                                        isActive
                                                            ? "min-w-[32px] bg-[#00008f] px-3 text-white"
                                                            : "bg-transparent text-[#8080c7]"
                                                    )}
                                                    aria-current={
                                                        isActive
                                                            ? "page"
                                                            : undefined
                                                    }
                                                >
                                                    {index + 1}
                                                </button>
                                            );
                                        }
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => {
                                        if (pageIndex < pageCount - 1) {
                                            setPageIndex(pageIndex + 1);
                                        }
                                    }}
                                    disabled={pageIndex === pageCount - 1}
                                    className={cn(
                                        "flex h-6 w-6 items-center justify-center rounded-full text-[#00008f] transition-colors",
                                        pageIndex === pageCount - 1
                                            ? "cursor-default opacity-40"
                                            : "hover:bg-[#f2f2f3]"
                                    )}
                                    aria-label="Next branches page"
                                >
                                    <ChevronRightIcon />
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Detail state (selected branch) */}
                {mobileView === "detail" && selectedBranch && (
                    <div className="flex flex-col gap-4 rounded-t-[16px] bg-[#f7f7f8] px-4 pb-5 pt-4">
                        <button
                            type="button"
                            onClick={handleMobileBack}
                            className="flex items-center gap-1 self-start"
                        >
                            <ChevronLeftIcon />
                            <span className="font-source-sans text-[16px] font-semibold leading-6 text-[#00008f]">
                                Our Offices
                            </span>
                        </button>

                        <div className="flex flex-col gap-3 rounded-[8px] bg-white px-4 pb-4 pt-5">
                            <div className="flex items-center justify-between">
                                <h3 className="font-headline text-[18px] font-bold leading-[26px] text-[#1a1d21]">
                                    {selectedBranch.name}
                                </h3>
                                <div className="flex items-center gap-1">
                                    <span className="font-source-sans text-[16px] leading-6 text-[#1a1d21]">
                                        {selectedBranch.rating
                                            .toFixed(1)
                                            .replace(".", ",")}
                                    </span>
                                    <StarIcon />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 font-source-sans text-[14px] leading-[22px] text-[#1a1d21]">
                                <p>{selectedBranch.phone}</p>
                                {selectedBranch.addressLines.map((line) => (
                                    <p key={line}>{line}</p>
                                ))}
                                <p className="text-[#434956]">
                                    {selectedBranch.city}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
