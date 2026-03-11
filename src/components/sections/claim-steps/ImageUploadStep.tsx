'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { Camera, Upload } from 'lucide-react';

interface ImageUploadStepProps {
    onNext: () => void;
    className?: string;
}

/** Upload arrow icon */
function UploadIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M24 4L24 32"
                stroke="#00008f"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M16 12L24 4L32 12"
                stroke="#00008f"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 28V40C8 41.1046 8.89543 42 10 42H38C39.1046 42 40 41.1046 40 40V28"
                stroke="#00008f"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}

export function ImageUploadStep({
    onNext,
    className,
}: ImageUploadStepProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles((prev) => [...prev, ...droppedFiles]);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setFiles((prev) => [...prev, ...selectedFiles]);
        }
    };

    return (
        <div className={cn('flex flex-col items-center w-full', className)}>
            {/* Icon + Title + Subtitle */}
            <div className="flex flex-col items-center gap-[16px] mb-[40px]">
                <UploadIcon className="w-[48px] md:w-[64px] h-auto" />
                <h2 className="font-['Publico_Headline_Web:Light',serif] text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-[#1a1d21] text-center">
                    Upload your images
                </h2>
                <p className="font-['Source_Sans_Pro',sans-serif] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-[#434956] text-center max-w-[418px]">
                    Upload pictures of the incident, at least 3 images from different angles as well as the report from the onsite expert
                </p>
            </div>

            {/* Drop Zone */}
            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={cn(
                    'w-full max-w-[372px] h-[122px] border-[1.5px] border-dashed rounded-[8px] flex items-center justify-center gap-[8px] cursor-pointer transition-colors mb-[32px]',
                    isDragging
                        ? 'border-[#00008f] bg-[#00008f]/5'
                        : 'border-[#c9c9c9] hover:border-[#00008f]/50'
                )}
            >
                <span className="font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#00008f]">
                    Drag or click to upload
                </span>
                <Camera size={20} className="text-[#00008f]" />
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>

            {/* Uploaded files preview */}
            {files.length > 0 && (
                <div className="flex flex-wrap gap-[8px] max-w-[372px] w-full mb-[24px]">
                    {files.map((file, idx) => (
                        <div
                            key={idx}
                            className="px-[12px] py-[6px] bg-[#f0f0f5] rounded-[4px] font-['Source_Sans_Pro',sans-serif] text-[13px] text-[#434956] truncate max-w-[160px]"
                        >
                            {file.name}
                        </div>
                    ))}
                </div>
            )}

            {/* Continue */}
            <button
                onClick={onNext}
                className="border border-[#00008f] rounded-full px-[32px] py-[14px] font-['Source_Sans_Pro',sans-serif] font-semibold text-[16px] leading-[24px] text-[#00008f] hover:bg-[#00008f]/5 transition-colors"
            >
                Continue to
            </button>
        </div>
    );
}
