import React from 'react';
import { cn } from '@/lib/cn';
import { Phone } from 'lucide-react';

interface ClaimHeaderBlockProps {
    title: string;
    helpButtonLabel?: string;
    onHelpClick?: () => void;
    className?: string;
}

export function ClaimHeaderBlock({
    title,
    helpButtonLabel = 'Need help?',
    onHelpClick,
    className,
}: ClaimHeaderBlockProps) {
    return (
        <div
            className={cn(
                'flex items-center justify-between w-full px-[24px] md:px-[142px] py-[16px]',
                className
            )}
        >
            {/* Spacer for centering */}
            <div className="w-[140px] hidden md:block" />

            {/* Title */}
            <h1 className="font-['Publico_Headline_Web:Light',serif] text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-[#1a1d21] text-center flex-1 md:flex-none">
                {title}
            </h1>

            {/* Need help button */}
            <button
                onClick={onHelpClick}
                className="hidden md:flex items-center gap-[8px] border border-[#00008f] rounded-full px-[20px] py-[8px] text-[#00008f] hover:bg-[#00008f]/5 transition-colors whitespace-nowrap"
            >
                <Phone size={16} className="fill-[#00008f]" />
                <span className="font-['Source_Sans_Pro',sans-serif] font-semibold text-[14px] leading-[22px]">
                    {helpButtonLabel}
                </span>
            </button>
        </div>
    );
}
