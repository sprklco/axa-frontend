"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function FeaturedSection() {
    const [selectedType, setSelectedType] = useState("motor");

    return (
        <section className="relative z-10 pt-10 px-4 pb-10">
            <div className="mx-auto max-w-lg rounded-2xl bg-white p-6 shadow-lg">
                {/* Header Group */}
                <div className="mb-8 text-center">
                    <p className="mb-2 font-['Source_Sans_3'] text-[16px] font-semibold text-[#606776]">
                        Request a quote
                    </p>
                    <h2 className="mb-4 font-['Publico_Headline_Web'] text-[34px] font-light leading-[42px] text-[#1a1d21]">
                        What type of insurance do you need?
                    </h2>
                    <p className="font-['Source_Sans_3'] text-base text-[#606776]">
                        At AXA we give you the option to quote online or by phone.
                    </p>
                </div>

                {/* Calculator Component */}
                <div className="space-y-6">
                    {/* Dropdown Selector */}
                    <div className="relative">
                        <button
                            className="flex w-full items-center justify-between rounded-none bg-gray-50 px-4 py-4 transition-colors hover:bg-gray-100"
                            aria-label="Select insurance type"
                        >
                            <div className="flex items-center gap-3">
                                {/* Car Icon */}
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#00008f"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                                    <circle cx="7" cy="17" r="2" />
                                    <circle cx="17" cy="17" r="2" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                </svg>
                                <span className="text-[18px] font-semibold text-[#00008f]">Motor Insurance</span>
                            </div>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#00008f"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex h-12 w-full items-center justify-center rounded-full border border-[#00008f] bg-white text-base font-bold text-[#00008f] transition-colors hover:bg-blue-50">
                            Quote online
                        </button>
                        <button className="flex h-12 w-full items-center justify-center rounded-full border border-[#ff1721] bg-white text-base font-bold text-[#ff1721] transition-colors hover:bg-red-50">
                            Get a callback
                        </button>
                    </div>

                    {/* Phone Contact */}
                    <div className="text-center">
                        <p className="text-sm font-semibold text-[#1a1d21]">
                            You can also call us at{" "}
                            <a href="tel:8009448471" className="text-[#00008f] hover:underline">
                                800 944 8471
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
