import React from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link"; // Assuming Next.js Link component based on usage

export function ComplaintSuccessStep() {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-[800px] mx-auto mt-[40px] md:mt-[80px] px-6 md:px-0 text-center">
            <div className="flex flex-col items-center gap-[32px] md:gap-[48px] w-full">
                <div className="text-[#00008f]">
                    <CheckCircle2 strokeWidth={1} className="w-[120px] h-[120px] md:w-[176px] md:h-[176px]" />
                </div>

                <div className="flex flex-col gap-[16px] md:gap-[24px] items-center w-full">
                    <h2 className="font-['Publico_Headline_Web:Light',sans-serif] text-[32px] md:text-[48px] md:leading-[56px] text-[#1a1d21]">
                        We have successfully received your request!
                    </h2>
                    <div className="flex flex-col gap-[8px] items-center">
                        <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#434956] max-w-[620px]">
                            Your complaint has been registered with folio number #5252O, the phone numbers for follow-up are
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-[8px] font-['Source_Sans_Pro:SemiBold',sans-serif] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#00008f]">
                            <span className="underline cursor-pointer">800 900 1292</span>
                            <span className="text-[#434956]">y</span>
                            <span className="underline cursor-pointer">04 - 727 000</span>
                            <span className="text-[#434956]">option 2.</span>
                        </div>
                    </div>

                    <Link
                        href="/"
                        className="font-['Source_Sans_Pro:SemiBold',sans-serif] text-[14px] md:text-[16px] leading-[24px] text-[#00008f] underline underline-offset-4 mt-2"
                    >
                        AXA - reinventing insurance
                    </Link>
                </div>

                <Link
                    href="/"
                    className="mt-[32px] border border-[#00008f] rounded-full h-[52px] md:h-[56px] px-[32px] w-full md:w-auto flex items-center justify-center font-['Source_Sans_Pro:SemiBold',sans-serif] font-semibold text-[16px] text-[#00008f] hover:bg-[#00008f]/5 transition-colors"
                    id="complaint-return-home-btn"
                >
                    Return to home
                </Link>
            </div>
        </div>
    );
}
