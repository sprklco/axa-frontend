'use client';

import React from 'react';
import { cn } from '@/lib/cn';
import { CarClaimData } from '@/types/carClaim';
import { MapPin } from 'lucide-react';

interface AccidentLocationStepProps {
    data: CarClaimData;
    updateData: (fields: Partial<CarClaimData>) => void;
    onNext: () => void;
    className?: string;
}

/** Car outline SVG icon (reused) */
function CarIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 77 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.5 38.5C15.5 41.8137 12.8137 44.5 9.5 44.5C6.18629 44.5 3.5 41.8137 3.5 38.5C3.5 35.1863 6.18629 32.5 9.5 32.5C12.8137 32.5 15.5 35.1863 15.5 38.5Z"
                stroke="#00008f"
                strokeWidth="2"
                strokeDasharray="4 4"
            />
            <path
                d="M73.5 38.5C73.5 41.8137 70.8137 44.5 67.5 44.5C64.1863 44.5 61.5 41.8137 61.5 38.5C61.5 35.1863 64.1863 32.5 67.5 32.5C70.8137 32.5 73.5 35.1863 73.5 38.5Z"
                stroke="#00008f"
                strokeWidth="2"
                strokeDasharray="4 4"
            />
            <path
                d="M1 30L6 14H22L30 4H52L62 14H72L76 30V38H62M1 30V38H15M1 30H76"
                stroke="#00008f"
                strokeWidth="2"
            />
            <line x1="15" y1="38" x2="62" y2="38" stroke="#00008f" strokeWidth="2" />
            <line x1="30" y1="14" x2="30" y2="30" stroke="#00008f" strokeWidth="2" />
            <line x1="52" y1="14" x2="52" y2="30" stroke="#00008f" strokeWidth="2" />
        </svg>
    );
}

export function AccidentLocationStep({
    data,
    updateData,
    onNext,
    className,
}: AccidentLocationStepProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (data.accidentLocation) {
            onNext();
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={cn('flex flex-col items-center w-full', className)}
        >
            {/* Icon + Title */}
            <div className="flex flex-col items-center gap-[24px] mb-[36px]">
                <CarIcon className="w-[60px] md:w-[77px] h-auto" />
                <h2 className="font-['Publico_Headline_Web:Light',serif] text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-[#1a1d21] text-center">
                    Indicate accident location
                </h2>
            </div>

            {/* Location Input */}
            <div className="w-full max-w-[372px] mb-[24px]">
                <div className="flex items-center border border-[#c9c9c9] rounded-[8px] px-[16px] py-[12px] gap-[8px]">
                    <input
                        type="text"
                        placeholder="Type location"
                        value={data.accidentLocation}
                        onChange={(e) => updateData({ accidentLocation: e.target.value })}
                        className="flex-1 bg-transparent border-none outline-none font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#1a1d21] placeholder-[#999]"
                    />
                    <MapPin size={20} className="text-[#00008f] shrink-0" />
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full max-w-[1398px] h-[250px] md:h-[284px] rounded-[8px] overflow-hidden mb-[32px] bg-[#e8e8e8] flex items-center justify-center">
                <span className="font-['Source_Sans_Pro',sans-serif] text-[14px] text-[#999]">
                    Map will be displayed here
                </span>
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
