import React from "react";
import { ComplaintData } from "@/types/complaint";
import { TextField } from "@/components/ui/TextField";
import { TextAreaField } from "@/components/ui/TextAreaField";

interface ComplaintStep4Props {
    data: ComplaintData;
    updateData: (fields: Partial<ComplaintData>) => void;
    onSubmit: () => void;
}

export function ComplaintStep4({ data, updateData, onSubmit }: ComplaintStep4Props) {
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!data.subject.trim()) newErrors.subject = "Subject is required";
        if (!data.detail.trim()) newErrors.detail = "Detail is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            if (data.privacyAccepted) {
                onSubmit();
            } else {
                alert("Please accept the privacy notice.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[32px] md:gap-[48px] items-center w-full max-w-[1296px] mx-auto mt-[40px] md:mt-[64px] px-4 md:px-0">
            <div className="flex flex-col md:flex-row items-start justify-between w-full gap-[32px] md:gap-[24px]">
                <TextField
                    label="Subject"
                    required
                    value={data.subject}
                    onChange={(e) => {
                        updateData({ subject: e.target.value });
                        if (errors.subject) setErrors(prev => ({ ...prev, subject: "" }));
                    }}
                    error={!!errors.subject}
                    errorMessage={errors.subject}
                    containerClassName="w-full md:w-[636px]"
                />
                <TextAreaField
                    label="Detail"
                    required
                    value={data.detail}
                    onChange={(e) => {
                        updateData({ detail: e.target.value });
                        if (errors.detail) setErrors(prev => ({ ...prev, detail: "" }));
                    }}
                    error={!!errors.detail}
                    errorMessage={errors.detail}
                    containerClassName="w-full md:w-[636px]"
                    className="h-[306px]"
                />
            </div>

            <div className="flex flex-col gap-6 md:gap-8 items-center mt-4">
                {/* Captcha Mock */}
                <div className="w-[288px] md:w-[276px] h-[72px] md:h-[145px] bg-gray-100 border border-gray-300 rounded-[8px] flex items-center justify-center text-gray-400">
                    <span className="font-['Source_Sans_Pro:Regular',sans-serif]">Captcha Challenge</span>
                </div>

                {/* Privacy Notice */}
                <div className="flex items-center gap-[12px]">
                    <input
                        type="checkbox"
                        className="w-[22px] h-[22px] rounded border-[#434956] text-[#00008f] focus:ring-[#00008f]"
                        checked={data.privacyAccepted}
                        onChange={(e) => updateData({ privacyAccepted: e.target.checked })}
                    />
                    <div className="flex items-center gap-[4px] text-[16px] leading-[26px]">
                        <span className="font-['Source_Sans_Pro:Regular',sans-serif] text-[#1a1d21]">I accept the</span>
                        <button type="button" className="font-['Source_Sans_Pro:SemiBold',sans-serif] font-semibold text-[#00008f] underline underline-offset-2">
                            Privacy Notice
                        </button>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="mt-[24px] border border-[#00008f] rounded-full h-[52px] md:h-[56px] px-[32px] w-full md:w-auto flex items-center justify-center gap-2 relative overflow-hidden group hover:bg-[#00008f]/5 transition-colors"
                id="complaint-submit-btn"
            >
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#00008f]">
                    Submit
                </span>
            </button>
        </form>
    );
}
