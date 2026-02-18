"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";


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
                <div className="relative z-10 flex flex-col items-center justify-center px-4 py-[56px]">
                    <div className="flex flex-col gap-6 w-full">

                        {/* Card 1: Need Help */}
                        <div className="relative flex w-full  flex-col items-center gap-6 rounded-lg bg-[rgba(83,83,83,0.5)] px-8 py-10 backdrop-blur-xl">
                            {/* Text Content */}
                            <div className="flex flex-col items-center gap-1.5 text-center text-white">
                                <h3 className="font-brand-text text-[24px] font-bold leading-[32px]">
                                    Need help?
                                </h3>
                                <p className="font-source-sans text-[17px] leading-[26px]">
                                    If you have any emergency or need more help in the quotation process
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex w-full flex-col items-center justify-center gap-4">
                                {/* Call Button */}
                                <button className="flex w-fit items-center justify-center gap-3 rounded-full bg-white px-8 py-3.5 transition-transform active:scale-95">
                                    <div className="relative h-3 w-3">
                                        <Image
                                            src="/images/contact/fill-call.svg"
                                            alt=""
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-source-sans text-[16px] font-semibold text-[#00008f]">
                                        04 - 727 000
                                    </span>
                                </button>

                                {/* Callback Button */}
                                <button className="flex w-fit items-center justify-center rounded-full border border-white px-8 py-3.5 transition-all hover:bg-white/10 active:scale-95">
                                    <span className="font-source-sans text-[16px] font-semibold text-white">
                                        Request a callback
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Card 2: Online Payment */}
                        <div className="relative flex w-full flex-col items-center gap-6 rounded-lg bg-[rgba(83,83,83,0.5)] px-8 py-10 backdrop-blur-xl">
                            <div className="flex flex-col items-center gap-1.5 text-center text-white">
                                <h3 className="font-brand-text text-[24px] font-bold leading-[32px]">
                                    Online Payment
                                </h3>
                                <p className="font-source-sans text-[16px] leading-[24px]">
                                    Coming Soon
                                </p>
                            </div>

                            <div className="flex w-full flex-col items-center justify-center gap-4">
                                {/* Pay Now Button */}
                                <button className="flex w-fit items-center justify-center rounded-full bg-white px-8 py-3.5 transition-transform active:scale-95">
                                    <span className="font-source-sans text-[16px] font-semibold text-[#00008f]">
                                        Pay Now
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
