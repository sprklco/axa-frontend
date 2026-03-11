'use client';

import React from 'react';
import { cn } from '@/lib/cn';
import { CarClaimData } from '@/types/carClaim';
import { Check } from 'lucide-react';

interface VehicleDescriptionStepProps {
    data: CarClaimData;
    updateData: (fields: Partial<CarClaimData>) => void;
    onNext: () => void;
    className?: string;
}

/** Car outline SVG icon */
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

export function VehicleDescriptionStep({
    data,
    updateData,
    onNext,
    className,
}: VehicleDescriptionStepProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={cn('flex flex-col items-center w-full', className)}
        >
            {/* Icon + Title */}
            <div className="flex flex-col items-center gap-[24px] mb-[40px]">
                <CarIcon className="w-[60px] md:w-[77px] h-auto" />
                <h2 className="font-['Publico_Headline_Web:Light',serif] text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-[#1a1d21] text-center">
                    Description of your vehicle
                </h2>
            </div>

            {/* Fields row */}
            <div className="flex flex-col md:flex-row items-start gap-[16px] md:gap-[24px] w-full max-w-[882px] mb-[32px]">
                {/* Plate number */}
                <div className="flex items-center border border-[#c9c9c9] rounded-[8px] px-[16px] py-[12px] w-full md:flex-1">
                    <input
                        type="text"
                        placeholder="Plate number:"
                        value={data.plateNumber}
                        onChange={(e) => updateData({ plateNumber: e.target.value })}
                        className="flex-1 bg-transparent border-none outline-none font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#1a1d21] placeholder-[#434956]"
                    />
                </div>

                {/* Make (prefilled with checkmark) */}
                <div className="flex items-center border border-[#c9c9c9] rounded-[8px] px-[16px] py-[12px] w-full md:flex-1">
                    <span className="flex-1 font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#1a1d21]">
                        {data.vehicleMake || 'Vehicle make'}
                    </span>
                    {data.vehicleMake && (
                        <Check size={20} className="text-[#00875a] shrink-0" />
                    )}
                </div>

                {/* Policy Number */}
                <div className="flex items-center border border-[#c9c9c9] rounded-[8px] px-[16px] py-[12px] w-full md:flex-1">
                    <input
                        type="text"
                        placeholder="Policy Number:"
                        value={data.policyNumber}
                        onChange={(e) => updateData({ policyNumber: e.target.value })}
                        className="flex-1 bg-transparent border-none outline-none font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#1a1d21] placeholder-[#434956]"
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
