import React from 'react';
import { cn } from '@/lib/cn';
import { ClaimProgressPhase } from '@/data/carClaimSteps';

interface ClaimProgressBlockProps {
    phases: ClaimProgressPhase[];
    currentPhase: number;
    currentSubStep: number;
    activeLabel?: string;
    className?: string;
}

export function ClaimProgressBlock({
    phases,
    currentPhase,
    currentSubStep,
    activeLabel,
    className,
}: ClaimProgressBlockProps) {
    return (
        <div className={cn('flex flex-col items-center w-full max-w-[1156px] mx-auto', className)}>
            {/* Phase labels and bars */}
            <div className="flex w-full gap-0">
                {phases.map((phase, phaseIdx) => {
                    const isPhaseCompleted = phaseIdx < currentPhase;
                    const isPhaseActive = phaseIdx === currentPhase;

                    return (
                        <div
                            key={phaseIdx}
                            className="flex flex-col items-start flex-1"
                        >
                            {/* Phase label */}
                            <span
                                className={cn(
                                    "font-['Source_Sans_Pro',sans-serif] text-[12px] md:text-[14px] leading-[20px] mb-[8px] md:mb-[12px]",
                                    isPhaseCompleted || isPhaseActive
                                        ? 'font-semibold text-[#1a1d21]'
                                        : 'font-normal text-[#999]'
                                )}
                            >
                                {phase.label}
                            </span>

                            {/* Sub-step bars */}
                            <div className="flex gap-[3px] md:gap-[4px] w-full">
                                {Array.from({ length: phase.subSteps }).map((_, subIdx) => {
                                    let isFilled = false;
                                    if (isPhaseCompleted) {
                                        isFilled = true;
                                    } else if (isPhaseActive) {
                                        isFilled = subIdx <= currentSubStep;
                                    }

                                    return (
                                        <div
                                            key={subIdx}
                                            className="flex-1 h-[5px] md:h-[6px] rounded-[2px] overflow-hidden bg-black/20"
                                        >
                                            <div
                                                className={cn(
                                                    'h-full transition-all duration-300',
                                                    isFilled ? 'w-full bg-[#00008f]' : 'w-0'
                                                )}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Active sub-step label */}
            {activeLabel && (
                <span className="font-['Source_Sans_Pro',sans-serif] text-[12px] md:text-[14px] leading-[20px] text-[#434956] mt-[8px] md:mt-[12px]">
                    {activeLabel}
                </span>
            )}
        </div>
    );
}
