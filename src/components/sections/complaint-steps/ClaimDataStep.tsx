import React from "react";
import { ComplaintData } from "@/types/complaint";
import { TextField } from "@/components/ui/TextField";

interface ComplaintStep3Props {
    data: ComplaintData;
    updateData: (fields: Partial<ComplaintData>) => void;
    onNext: () => void;
}

export function ComplaintStep3({ data, updateData, onNext }: ComplaintStep3Props) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[32px] md:gap-[48px] items-center w-full max-w-[1296px] mx-auto mt-[40px] md:mt-[64px] px-4 md:px-0">
            <div className="flex flex-col items-center w-full gap-[12px] md:gap-[16px]">
                <TextField
                    label="Claim number"
                    value={data.claimNumber}
                    onChange={(e) => updateData({ claimNumber: e.target.value })}
                    containerClassName="w-full md:w-[372px]"
                />
                <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-[#434956] text-center md:text-left w-full md:w-[372px]">
                    If there is no claim number, please leave the field empty.
                </p>
            </div>

            <button
                type="submit"
                className="mt-[24px] border border-[#00008f] rounded-full h-[52px] md:h-[56px] px-[32px] w-full md:w-auto flex items-center justify-center gap-2 relative overflow-hidden group hover:bg-[#00008f]/5 transition-colors"
                id="complaint-continue-btn-3"
            >
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#00008f]">
                    Continue
                </span>
            </button>
        </form>
    );
}
