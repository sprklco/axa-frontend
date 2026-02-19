"use client";

import Image from "next/image";
import { Button } from "@/components/ui/CTAButton";

export function ContactSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* Background Image Container */}
            <div className="relative w-full">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/contact/background.png"
                        alt="Contact Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-end px-4 py-[56px] lg:px-[72px] lg:pt-[134px] lg:pb-[96px]">
                    <div className="flex flex-col gap-6 w-full lg:flex-row lg:items-center lg:justify-center lg:gap-6">

                        {/* Card 1: Need Help */}
                        <div className="relative flex w-full flex-col items-center gap-4 rounded-lg bg-[rgba(83,83,83,0.5)] px-8 py-10 backdrop-blur-[32px] lg:w-[416px] lg:shrink-0 lg:gap-4 lg:rounded-[12px] lg:px-8 lg:py-12">
                            {/* Text Content */}
                            <div className="flex flex-col items-center gap-2 text-center text-white lg:gap-2">
                                <h3 className="font-brand-text text-[24px] font-bold leading-[32px] lg:text-[32px] lg:leading-[40px]">
                                    Need help?
                                </h3>
                                <p className="font-source-sans text-[17px] leading-[26px] lg:text-[18px] lg:leading-[26px]">
                                    If you have any emergency or need more help in the  the quotation process
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex w-full flex-col items-center justify-center gap-4 lg:mt-4 lg:flex-row lg:gap-3">
                                {/* Call Button */}
                                <Button
                                    variant="ghost"
                                    size="md"
                                    className="w-fit"
                                    icon={
                                        <div className="relative h-3.5 w-3.5 lg:h-6 lg:w-6">
                                            <Image
                                                src="/images/contact/fill-call.svg"
                                                alt=""
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    }
                                >
                                    04 - 727 000
                                </Button>

                                {/* Callback Button */}
                                <Button variant="inverse" size="md" className="w-fit">
                                    Request a callback
                                </Button>
                            </div>
                        </div>

                        {/* Card 2: Online Payment */}
                        <div className="relative flex w-full flex-col items-center gap-4 rounded-lg bg-[rgba(83,83,83,0.5)] px-8 py-10 backdrop-blur-[32px] lg:w-[416px] lg:shrink-0 lg:gap-4 lg:rounded-[12px] lg:px-8 lg:py-12">
                            <div className="flex flex-col items-center gap-2 text-center text-white lg:gap-2">
                                <h3 className="font-brand-text text-[24px] font-bold leading-[32px] lg:text-[32px] lg:leading-[40px]">
                                    Online Payment
                                </h3>
                                <p className="font-source-sans text-[16px] leading-[24px] lg:text-[18px] lg:leading-[26px]">
                                    Coming Soon
                                </p>
                            </div>

                            <div className="flex w-full flex-col items-center justify-center gap-4 lg:mt-4 lg:flex-row lg:gap-3">
                                {/* Pay Now Button */}
                                <Button variant="ghost" size="md" className="w-fit">
                                    Pay Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
