import React from 'react';
import { Phone, ArrowRightLeft } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ComplaintTitleBlockProps {
    className?: string;
}

export function ComplaintTitleBlock({ className }: ComplaintTitleBlockProps) {
    return (
        <div className={cn("flex flex-col items-center gap-[12px] md:gap-[24px] w-full max-w-[778px] mx-auto px-4 md:px-0", className)}>
            <div className="flex items-start md:items-end justify-center">
                <div className="relative shrink-0 w-[59.5px] h-[51px] md:w-[88px] md:h-[75.43px]">
                    <img
                        src="/images/complaint-switch.svg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                </div>
                <h1 className="font-['Publico_Headline_Web:Light',sans-serif] text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] tracking-[-1.5px] text-[#1a1d21] text-center md:whitespace-nowrap">
                    Unsatisfied with the service
                </h1>
            </div>

            <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] text-[#434956] text-center md:w-[690px] whitespace-pre-wrap">
                Your opinion is very valuable to us. Therefore, we invite you to complete the following form to share what happened.
            </p>

            <div className="flex items-center justify-center gap-[4px] md:gap-[8px]">
                <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] text-[#434956] text-center">
                    You can also call us at
                </p>
                <div className="flex items-center gap-[4px] md:gap-[8px] h-[24px] rounded-[3.8px]">
                    <div className="relative w-[20px] h-[20px] md:w-[28px] md:h-[28px] flex items-center justify-center">
                        <Phone strokeWidth={2.5} className="text-[#00008f] fill-[#00008f] w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />
                    </div>
                    <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#00008f] whitespace-nowrap">
                        800 900 1292
                    </span>
                </div>
            </div>
        </div>
    );
}
