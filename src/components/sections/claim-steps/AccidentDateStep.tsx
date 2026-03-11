'use client';

import React from 'react';
import { cn } from '@/lib/cn';
import { CarClaimData } from '@/types/carClaim';
import { Calendar } from 'lucide-react';

interface AccidentDateStepProps {
    data: CarClaimData;
    updateData: (fields: Partial<CarClaimData>) => void;
    onNext: () => void;
    className?: string;
}

/** Calendar outline icon */
function CalendarIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 56 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="1" y="5" width="54" height="46" rx="4" stroke="#00008f" strokeWidth="2" />
            <line x1="1" y1="18" x2="55" y2="18" stroke="#00008f" strokeWidth="2" />
            <line x1="14" y1="1" x2="14" y2="9" stroke="#00008f" strokeWidth="2" strokeLinecap="round" />
            <line x1="42" y1="1" x2="42" y2="9" stroke="#00008f" strokeWidth="2" strokeLinecap="round" />
            <rect x="10" y="24" width="8" height="6" rx="1" fill="#00008f" />
            <rect x="24" y="24" width="8" height="6" rx="1" fill="#00008f" />
            <rect x="38" y="24" width="8" height="6" rx="1" fill="#00008f" />
            <rect x="10" y="34" width="8" height="6" rx="1" fill="#00008f" opacity="0.3" />
            <rect x="24" y="34" width="8" height="6" rx="1" fill="#00008f" opacity="0.3" />
            <rect x="38" y="34" width="8" height="6" rx="1" fill="#00008f" opacity="0.3" />
            <rect x="10" y="44" width="8" height="4" rx="1" fill="#00008f" opacity="0.15" />
        </svg>
    );
}

export function AccidentDateStep({
    data,
    updateData,
    onNext,
    className,
}: AccidentDateStepProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (data.accidentDate) {
            onNext();
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={cn('flex flex-col items-center w-full', className)}
        >
            {/* Icon + Title */}
            <div className="flex flex-col items-center gap-[16px] mb-[40px]">
                <CalendarIcon className="w-[48px] md:w-[56px] h-auto" />
                <h2 className="font-['Publico_Headline_Web:Light',serif] text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-[#1a1d21] text-center">
                    Indicate accident date
                </h2>
            </div>

            {/* Date Input */}
            <div className="w-full max-w-[372px] mb-[32px]">
                <div className="flex items-center border border-[#c9c9c9] rounded-[8px] px-[16px] py-[12px] gap-[8px]">
                    <input
                        type="date"
                        value={data.accidentDate}
                        onChange={(e) => updateData({ accidentDate: e.target.value })}
                        placeholder="DD/MM/YY"
                        className="flex-1 bg-transparent border-none outline-none font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#1a1d21] placeholder-[#999]"
                    />
                </div>
            </div>

            {/* Continue */}
            <button
                type="submit"
                className="border border-[#00008f] rounded-full px-[32px] py-[14px] font-['Source_Sans_Pro',sans-serif] font-semibold text-[16px] leading-[24px] text-[#00008f] hover:bg-[#00008f]/5 transition-colors"
            >
                Continue
            </button>
        </form>
    );
}
