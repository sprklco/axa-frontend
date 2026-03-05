"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { X } from "lucide-react";

export interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    showCloseButton?: boolean;
}

export function Dialog({
    isOpen,
    onClose,
    children,
    className,
    showCloseButton = true,
}: DialogProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen && !dialog.open) {
            dialog.showModal();
        } else if (!isOpen && dialog.open) {
            dialog.close();
        }
    }, [isOpen]);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const handleCancel = (e: Event) => {
            e.preventDefault();
            onClose();
        };

        const handleClick = (e: MouseEvent) => {
            if (e.target === dialog) {
                // Clicked on the backdrop
                onClose();
            }
        };

        dialog.addEventListener("cancel", handleCancel);
        dialog.addEventListener("click", handleClick);

        return () => {
            dialog.removeEventListener("cancel", handleCancel);
            dialog.removeEventListener("click", handleClick);
        };
    }, [onClose]);

    // Use Tailwind group and peer classes to animate presence if desired
    // Actually, just standard fade-in is enough for our requirements.
    return (
        <dialog
            ref={dialogRef}
            className={cn(
                "fixed inset-0 m-auto",
                "bg-white rounded-[12px] p-0 shadow-2xl",
                "backdrop:bg-black/40 backdrop:backdrop-blur-sm",
                "w-full max-w-[1038px]", // Max width from Figma
                "dialog-fade-in",
                className
            )}
        >
            <style>{`
                dialog.dialog-fade-in[open] {
                    animation: dialogFadeIn 0.3s ease-out forwards;
                }
                dialog.dialog-fade-in[open]::backdrop {
                    animation: backdropFadeIn 0.3s ease-out forwards;
                }
                @keyframes dialogFadeIn {
                    from { opacity: 0; transform: scale(0.96); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes backdropFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
            <div className="relative flex flex-col items-center p-6 pb-6 pt-5 md:px-10 md:py-8">
                {showCloseButton && (
                    <div className="absolute top-4 right-4 md:top-5 md:right-5">
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00008f] rounded-full p-1 transition-colors"
                            aria-label="Close dialog"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                )}
                {children}
            </div>
        </dialog>
    );
}
