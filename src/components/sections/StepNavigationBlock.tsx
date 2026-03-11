import React from 'react';
import { cn } from '@/lib/cn';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StepNavigationBlockProps {
    onPrev?: () => void;
    onNext?: () => void;
    showPrev?: boolean;
    showNext?: boolean;
    className?: string;
}

export function StepNavigationBlock({
    onPrev,
    onNext,
    showPrev = true,
    showNext = true,
    className,
}: StepNavigationBlockProps) {
    return (
        <div className={cn('flex items-center justify-center gap-[8px] mt-[40px] md:mt-[52px]', className)}>
            {showPrev && (
                <button
                    onClick={onPrev}
                    className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-full border border-[#00008f] flex items-center justify-center text-[#00008f] hover:bg-[#00008f]/5 transition-colors"
                    aria-label="Previous step"
                >
                    <ChevronLeft size={20} />
                </button>
            )}
            {showNext && (
                <button
                    onClick={onNext}
                    className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-full border border-[#c9c9c9] flex items-center justify-center text-[#c9c9c9] hover:border-[#00008f] hover:text-[#00008f] transition-colors"
                    aria-label="Next step"
                >
                    <ChevronRight size={20} />
                </button>
            )}
        </div>
    );
}
