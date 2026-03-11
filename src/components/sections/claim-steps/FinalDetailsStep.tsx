'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { CarClaimData } from '@/types/carClaim';
import { User, Phone, Mail, Camera } from 'lucide-react';

interface FinalDetailsStepProps {
    data: CarClaimData;
    updateData: (fields: Partial<CarClaimData>) => void;
    onSubmit: () => void;
    className?: string;
}

export function FinalDetailsStep({
    data,
    updateData,
    onSubmit,
    className,
}: FinalDetailsStepProps) {
    const licenseInputRef = useRef<HTMLInputElement>(null);
    const [licenseFile, setLicenseFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const maxChars = 500;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={cn('flex flex-col items-center w-full max-w-[1177px] mx-auto', className)}
        >
            {/* Title + Subtitle */}
            <div className="flex flex-col items-center gap-[16px] mb-[40px]">
                <h2 className="font-['Publico_Headline_Web:Light',serif] text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-[#1a1d21] text-center">
                    Just a few last details
                </h2>
                <p className="font-['Source_Sans_Pro',sans-serif] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-[#434956] text-center max-w-[521px]">
                    We need your name and email address to follow up with next steps.
                </p>
            </div>

            {/* 4 fields in a row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[16px] w-full mb-[24px]">
                {/* First name */}
                <div className="flex items-center border border-[#c9c9c9] rounded-[8px] px-[16px] py-[12px]">
                    <input
                        type="text"
                        placeholder="First name"
                        value={data.firstName}
                        onChange={(e) => updateData({ firstName: e.target.value })}
                        className="flex-1 bg-transparent border-none outline-none font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#1a1d21] placeholder-[#434956] min-w-0"
                    />
                    <User size={18} className="text-[#434956] shrink-0 ml-[8px]" />
                </div>

                {/* Last name */}
                <div className="flex items-center border border-[#c9c9c9] rounded-[8px] px-[16px] py-[12px]">
                    <input
                        type="text"
                        placeholder="Last name"
                        value={data.lastName}
                        onChange={(e) => updateData({ lastName: e.target.value })}
                        className="flex-1 bg-transparent border-none outline-none font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#1a1d21] placeholder-[#434956] min-w-0"
                    />
                    <User size={18} className="text-[#434956] shrink-0 ml-[8px]" />
                </div>

                {/* Phone */}
                <div className="flex items-center border border-[#c9c9c9] rounded-[8px] px-[16px] py-[12px]">
                    <input
                        type="tel"
                        placeholder="Phone number"
                        value={data.phone}
                        onChange={(e) => updateData({ phone: e.target.value })}
                        className="flex-1 bg-transparent border-none outline-none font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#1a1d21] placeholder-[#434956] min-w-0"
                    />
                    <Phone size={18} className="text-[#434956] shrink-0 ml-[8px]" />
                </div>

                {/* Email */}
                <div className="flex items-center border border-[#c9c9c9] rounded-[8px] px-[16px] py-[12px]">
                    <input
                        type="email"
                        placeholder="Email address"
                        value={data.email}
                        onChange={(e) => updateData({ email: e.target.value })}
                        className="flex-1 bg-transparent border-none outline-none font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#1a1d21] placeholder-[#434956] min-w-0"
                    />
                    <Mail size={18} className="text-[#434956] shrink-0 ml-[8px]" />
                </div>
            </div>

            {/* Textarea + Driver's License row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full mb-[32px]">
                {/* Textarea */}
                <div className="flex flex-col gap-[8px]">
                    <label className="font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#1a1d21]">
                        Describe your circumstances of the claim
                    </label>
                    <div className="border border-[#c9c9c9] rounded-[8px] p-[16px] relative">
                        <textarea
                            value={data.description}
                            onChange={(e) => {
                                if (e.target.value.length <= maxChars) {
                                    updateData({ description: e.target.value });
                                }
                            }}
                            rows={10}
                            className="w-full bg-transparent border-none outline-none font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#1a1d21] resize-none"
                            placeholder="Describe the details of the incident..."
                        />
                        <span className="absolute bottom-[12px] left-[16px] font-['Source_Sans_Pro',sans-serif] text-[14px] text-[#999]">
                            Maximum {maxChars} characters
                        </span>
                    </div>
                </div>

                {/* Driver's License Upload */}
                <div className="flex flex-col gap-[8px]">
                    <label className="font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#1a1d21]">
                        Drivers license
                    </label>
                    <div
                        onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                        }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={(e) => {
                            e.preventDefault();
                            setIsDragging(false);
                            const file = e.dataTransfer.files[0];
                            if (file) setLicenseFile(file);
                        }}
                        onClick={() => licenseInputRef.current?.click()}
                        className={cn(
                            'flex-1 min-h-[270px] border-[1.5px] border-dashed rounded-[8px] flex flex-col items-center justify-center gap-[8px] cursor-pointer transition-colors',
                            isDragging
                                ? 'border-[#00008f] bg-[#00008f]/5'
                                : 'border-[#c9c9c9] hover:border-[#00008f]/50'
                        )}
                    >
                        {licenseFile ? (
                            <span className="font-['Source_Sans_Pro',sans-serif] text-[14px] text-[#434956] px-[16px] text-center">
                                {licenseFile.name}
                            </span>
                        ) : (
                            <div className="flex items-center gap-[8px]">
                                <span className="font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#00008f]">
                                    Drag or click to upload
                                </span>
                                <Camera size={20} className="text-[#00008f]" />
                            </div>
                        )}
                        <input
                            ref={licenseInputRef}
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) setLicenseFile(file);
                            }}
                            className="hidden"
                        />
                    </div>
                </div>
            </div>

            {/* reCAPTCHA placeholder */}
            <div className="w-[288px] h-[71px] border border-[#d3d3d3] rounded-[4px] flex items-center gap-[12px] px-[12px] mb-[32px] bg-[#f9f9f9]">
                <div className="w-[24px] h-[24px] border-2 border-[#c1c1c1] rounded-[2px]" />
                <span className="font-['Source_Sans_Pro',sans-serif] text-[14px] text-[#1a1d21]">
                    I&apos;m not a robot
                </span>
                <div className="ml-auto flex flex-col items-center">
                    <div className="w-[28px] h-[28px] opacity-60">
                        <svg viewBox="0 0 28 28" fill="none">
                            <path d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0z" fill="#4A90D9" opacity="0.7" />
                        </svg>
                    </div>
                    <span className="text-[8px] text-[#999] mt-[2px]">reCAPTCHA</span>
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="border border-[#00008f] rounded-full px-[32px] py-[14px] font-['Source_Sans_Pro',sans-serif] font-semibold text-[16px] leading-[24px] text-[#00008f] hover:bg-[#00008f]/5 transition-colors mb-[24px]"
            >
                Submit claim
            </button>

            {/* Disclaimer */}
            <p className="font-['Source_Sans_Pro',sans-serif] text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] text-[#999] text-center max-w-[1177px]">
                By submitting a claim, you confirm that the information provided is accurate and complete. All claims are subject to review and verification in accordance with your policy terms.
            </p>
        </form>
    );
}
