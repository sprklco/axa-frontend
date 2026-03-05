"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/cn";
import type { QuoteModalProps } from "@/types/quoteModal";

/**
 * Reusable "Get a quote" modal overlay.
 * Driven entirely by typed props — no hardcoded content.
 * Features fade-in on open and fade-out on close animations.
 */
export function QuoteModal({
    content,
    isOpen,
    onClose,
    className,
}: QuoteModalProps) {
    const { title, description, namePlaceholder, phonePlaceholder, emailPlaceholder, submitLabel } =
        content;

    /* ── Animation state ──────────────────────────── */
    const [visible, setVisible] = useState(false);
    const [animating, setAnimating] = useState<"in" | "out" | null>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    // Open → fade in
    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            // Force a reflow before adding the fade-in class
            requestAnimationFrame(() => {
                setAnimating("in");
            });
        }
    }, [isOpen]);

    // Close → fade out, then unmount
    const handleClose = useCallback(() => {
        setAnimating("out");
    }, []);

    const handleAnimationEnd = useCallback(() => {
        if (animating === "out") {
            setVisible(false);
            setAnimating(null);
            onClose();
        }
    }, [animating, onClose]);

    /* ── Keyboard: Escape to close ────────────────── */
    useEffect(() => {
        if (!visible) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [visible, handleClose]);

    /* ── Lock body scroll when open ───────────────── */
    useEffect(() => {
        if (visible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className={cn(
                "fixed inset-0 z-50 flex items-center justify-center p-4",
                animating === "in" && "modal-fade-in",
                animating === "out" && "modal-fade-out",
                className,
            )}
            onAnimationEnd={handleAnimationEnd}
            onClick={(e) => {
                if (e.target === overlayRef.current) handleClose();
            }}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

            {/* Panel */}
            <div
                ref={panelRef}
                className="relative mx-auto flex w-full max-w-[1038px] flex-col items-center gap-2 rounded-xl bg-white px-6 pb-6 pt-5"
            >
                {/* Close button */}
                <div className="flex w-full items-center justify-end">
                    <button
                        type="button"
                        onClick={handleClose}
                        aria-label="Close"
                        className="flex h-6 w-6 items-center justify-center text-[#1a1d21] transition-opacity hover:opacity-60"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="flex w-full flex-col items-center gap-10">
                    <div className="flex w-full flex-col items-center gap-8">
                        {/* Titles */}
                        <div className="flex w-full flex-col items-center gap-10">
                            <div className="flex w-full flex-col items-start gap-4 text-center">
                                <h2 className="w-full font-headline text-[32px] font-light leading-[40px] text-[#1a1d21]">
                                    {title}
                                </h2>
                                <p className="w-full font-source-sans text-[16px] leading-[24px] text-[#434956]">
                                    {description}
                                </p>
                            </div>

                            {/* Unified Text Field */}
                            <div className="flex h-[56px] w-fit items-center justify-center rounded-lg bg-[#f7f7f8] px-4 py-2">
                                <div className="flex items-center justify-center gap-8">
                                    {/* Name */}
                                    <div className="flex w-[117px] items-center gap-2 pr-4">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="shrink-0"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                                                fill="rgba(43,48,59,0.4)"
                                            />
                                        </svg>
                                        <input
                                            type="text"
                                            placeholder={namePlaceholder}
                                            className="w-full bg-transparent font-source-sans text-[16px] leading-[24px] text-[#1a1d21] placeholder:text-[rgba(43,48,59,0.4)] outline-none"
                                        />
                                    </div>

                                    {/* Divider */}
                                    <div className="h-4 w-px rotate-0 bg-[rgba(43,48,59,0.15)]" />

                                    {/* Phone */}
                                    <div className="flex w-[140px] items-center gap-2 pr-4">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="shrink-0"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                                                fill="rgba(43,48,59,0.4)"
                                            />
                                        </svg>
                                        <input
                                            type="tel"
                                            placeholder={phonePlaceholder}
                                            className="w-full bg-transparent font-source-sans text-[16px] leading-[24px] text-[#1a1d21] placeholder:text-[rgba(43,48,59,0.4)] outline-none"
                                        />
                                    </div>

                                    {/* Divider */}
                                    <div className="h-4 w-px rotate-0 bg-[rgba(43,48,59,0.15)]" />

                                    {/* Email */}
                                    <div className="flex w-[206px] items-center gap-2">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="shrink-0"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
                                                fill="rgba(43,48,59,0.4)"
                                            />
                                        </svg>
                                        <input
                                            type="email"
                                            placeholder={emailPlaceholder}
                                            className="w-full bg-transparent font-source-sans text-[16px] leading-[24px] text-[#1a1d21] placeholder:text-[rgba(43,48,59,0.4)] outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="button"
                            className="flex h-[56px] items-center justify-center gap-2 rounded-full border border-[rgba(0,0,0,0.3)] px-8 py-4 font-source-sans text-[16px] font-semibold leading-[24px] text-[rgba(0,0,0,0.3)] transition-colors hover:border-[#00008f] hover:text-[#00008f]"
                        >
                            {submitLabel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
