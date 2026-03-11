import React from 'react';
import { cn } from '@/lib/cn';

interface ComplaintProgressBlockProps {
    currentStep: number;
    onStepClick?: (step: number) => void;
    className?: string;
}

const steps = [
    "Customer data",
    "Policy information",
    "Claim data",
    "Nonconformity data"
];

export function ComplaintProgressBlock({ currentStep, onStepClick, className }: ComplaintProgressBlockProps) {
    if (currentStep > 4) return null;

    return (
        <div className={cn("flex flex-col items-center relative w-full max-w-[628px] md:w-[628px] mx-auto px-4 md:px-0", className)}>
            <div className="flex gap-[8px] md:gap-[12px] w-full">
                {steps.map((stepName, idx) => {
                    const stepNum = idx + 1;
                    const isActive = stepNum === currentStep;
                    const isCompleted = stepNum < currentStep;
                    const isClickable = stepNum < currentStep;

                    return (
                        <button
                            key={stepNum}
                            onClick={() => isClickable && onStepClick?.(stepNum)}
                            disabled={!isClickable}
                            className={cn(
                                "flex flex-col items-center flex-1 md:w-[148px] relative transition-opacity",
                                isClickable ? "cursor-pointer hover:opacity-80" : "cursor-default"
                            )}
                        >
                            {/* Active Step text goes ABOVE the bar */}
                            <div className="h-[44px] md:h-[24px] mb-[8px] md:mb-[16px] flex items-end justify-center w-full">
                                {isActive && (
                                    <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] text-[14px] leading-[22px] text-[#00008f] text-center whitespace-pre-wrap md:whitespace-nowrap">
                                        {stepName}
                                    </span>
                                )}
                            </div>

                            {/* Progress Bar Segment */}
                            <div className="w-full h-[6px] bg-black/30 rounded-[2px] overflow-hidden relative">
                                <div
                                    className={cn(
                                        "h-full bg-[#00008f] transition-all duration-300",
                                        (isActive || isCompleted) ? "w-full" : "w-0"
                                    )}
                                />
                            </div>

                            {/* Completed Step text goes BELOW the bar - Hidden on Mobile unless it's a specific design choice */}
                            <div className="hidden md:flex h-[24px] mt-[16px] items-start justify-center w-full">
                                {isCompleted && (
                                    <span className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] leading-[22px] text-[#1a1d21] text-center whitespace-nowrap">
                                        {stepName}
                                    </span>
                                )}
                            </div>

                            {/* Mobile specific layout if needed: show "Customer data" below bar on step 2 */}
                            {isCompleted && (
                                <div className="md:hidden h-[22px] mt-[4px] flex items-start justify-center w-full">
                                    <span className="font-['Source_Sans_Pro:Regular',sans-serif] text-[12px] leading-[18px] text-[#434956] text-center whitespace-nowrap">
                                        {stepName}
                                    </span>
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
