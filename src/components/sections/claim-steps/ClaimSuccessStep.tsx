'use client';

import React from 'react';
import { cn } from '@/lib/cn';
import { CheckCircle2, Phone, ArrowRight, Copy } from 'lucide-react';
import Link from 'next/link';

interface ClaimSuccessStepProps {
    claimReference?: string;
    onReportAnother?: () => void;
    className?: string;
}

export function ClaimSuccessStep({
    claimReference = 'DXRES56',
    onReportAnother,
    className,
}: ClaimSuccessStepProps) {
    const handleCopy = () => {
        navigator.clipboard.writeText(claimReference);
    };

    return (
        <div className={cn('flex flex-col items-center w-full max-w-[820px] mx-auto', className)}>
            {/* Checkmark icon */}
            <div className="mb-[32px] md:mb-[48px]">
                <div className="w-[120px] h-[120px] md:w-[176px] md:h-[176px] rounded-full bg-gradient-to-b from-[#00008f]/20 to-[#00008f]/5 flex items-center justify-center">
                    <CheckCircle2
                        strokeWidth={1.5}
                        className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] text-[#00008f]"
                    />
                </div>
            </div>

            {/* Title */}
            <h2 className="font-['Publico_Headline_Web:Light',serif] text-[28px] md:text-[48px] leading-[36px] md:leading-[56px] text-[#1a1d21] text-center mb-[32px] md:mb-[48px]">
                We have successfully received your claim
            </h2>

            {/* Claim reference card */}
            <div className="bg-[#f5f5f9] rounded-[16px] px-[48px] py-[24px] md:py-[29px] flex flex-col items-center gap-[8px] mb-[24px] w-full max-w-[552px]">
                <span className="font-['Source_Sans_Pro',sans-serif] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#1a1d21] text-center">
                    Here is your claim refrence:
                </span>
                <div className="flex items-center gap-[8px]">
                    <span className="font-['Publico_Headline_Web:Bold',serif] text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] text-[#00008f] font-bold">
                        {claimReference}
                    </span>
                    <button
                        onClick={handleCopy}
                        className="text-[#434956] hover:text-[#00008f] transition-colors"
                        aria-label="Copy claim reference"
                    >
                        <Copy size={20} />
                    </button>
                </div>
                <p className="font-['Source_Sans_Pro',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#434956] text-center max-w-[360px]">
                    Please save this claim reference in case you need to follow up or we call you for more questions
                </p>
            </div>

            {/* Follow up */}
            <div className="flex items-center gap-[8px] mb-[16px]">
                <span className="font-['Source_Sans_Pro',sans-serif] text-[16px] md:text-[18px] leading-[24px] text-[#1a1d21]">
                    Follow up here
                </span>
                <div className="flex items-center gap-[4px]">
                    <Phone size={16} className="text-[#00008f] fill-[#00008f]" />
                    <span className="font-['Source_Sans_Pro',sans-serif] font-semibold text-[16px] md:text-[18px] leading-[24px] text-[#00008f]">
                        04 - 727 000
                    </span>
                </div>
            </div>

            {/* Report another claim link */}
            {onReportAnother ? (
                <button
                    onClick={onReportAnother}
                    className="flex items-center gap-[4px] font-['Source_Sans_Pro',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#00008f] underline underline-offset-4 mb-[32px] md:mb-[48px] hover:opacity-80 transition-opacity"
                >
                    Report another claim
                    <ArrowRight size={16} />
                </button>
            ) : (
                <Link
                    href="/car-claim"
                    className="flex items-center gap-[4px] font-['Source_Sans_Pro',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#00008f] underline underline-offset-4 mb-[32px] md:mb-[48px] hover:opacity-80 transition-opacity"
                >
                    Report another claim
                    <ArrowRight size={16} />
                </Link>
            )}

            {/* Tagline */}
            <p className="font-['Source_Sans_Pro',sans-serif] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#434956] text-center">
                AXA - reinventing insurance
            </p>
        </div>
    );
}
