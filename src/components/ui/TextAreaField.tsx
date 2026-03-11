import React from "react";
import { cn } from "@/lib/cn";

export interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    containerClassName?: string;
    required?: boolean;
    error?: boolean;
    errorMessage?: string;
}

export const TextAreaField = React.forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
    ({ label, className, containerClassName, required, error, errorMessage, ...props }, ref) => {
        return (
            <div className={cn("flex flex-col gap-[8px] items-start w-full relative", containerClassName)}>
                <label className="font-['Source_Sans_Pro:Regular',sans-serif] text-[18px] leading-[26px] text-[#1a1d21] whitespace-nowrap">
                    {label}{required && "* "}
                </label>
                <div className={cn(
                    "flex w-full bg-[rgba(255,255,255,0.4)] border-[0.986px] rounded-[8px] px-[16px] py-[12px] transition-colors",
                    error ? "border-[#d00000]" : "border-[#434956]",
                    className
                )}>
                    <textarea
                        ref={ref}
                        className="flex-1 bg-transparent border-none outline-none font-['Source_Sans_Pro:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1d21] placeholder-[#434956]/60 w-full resize-none"
                        {...props}
                    />
                </div>
                {error && errorMessage && (
                    <span className="text-[#d00000] text-[12px] font-['Source_Sans_Pro:Regular',sans-serif]">
                        {errorMessage}
                    </span>
                )}
            </div>
        );
    }
);
TextAreaField.displayName = "TextAreaField";
