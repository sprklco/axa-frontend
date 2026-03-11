import React from "react";
import { ComplaintData } from "@/types/complaint";
import { TextField } from "@/components/ui/TextField";
import { Search } from "lucide-react";

interface ComplaintStep2Props {
    data: ComplaintData;
    updateData: (fields: Partial<ComplaintData>) => void;
    onNext: () => void;
}

export function ComplaintStep2({ data, updateData, onNext }: ComplaintStep2Props) {
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!data.product.trim()) newErrors.product = "Product is required";
        if (!data.policyNumber.trim()) newErrors.policyNumber = "Policy Number is required";
        if (!data.certificateNumber.trim()) newErrors.certificateNumber = "Certificate Number is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            onNext();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[32px] md:gap-[48px] items-center w-full max-w-[1296px] mx-auto mt-[40px] md:mt-[64px] px-4 md:px-0">
            <div className="flex flex-col md:flex-row items-start justify-between w-full gap-[32px] md:gap-[92px]">
                <TextField
                    label="Product"
                    required
                    value={data.product}
                    onChange={(e) => {
                        updateData({ product: e.target.value });
                        if (errors.product) setErrors(prev => ({ ...prev, product: "" }));
                    }}
                    error={!!errors.product}
                    errorMessage={errors.product}
                    icon={<Search size={16} />}
                    containerClassName="w-full md:w-[372px]"
                />
                <TextField
                    label="Policy Number"
                    required
                    value={data.policyNumber}
                    onChange={(e) => {
                        updateData({ policyNumber: e.target.value });
                        if (errors.policyNumber) setErrors(prev => ({ ...prev, policyNumber: "" }));
                    }}
                    error={!!errors.policyNumber}
                    errorMessage={errors.policyNumber}
                    containerClassName="w-full md:w-[372px]"
                />
                <TextField
                    label="Certificate Number"
                    required
                    value={data.certificateNumber}
                    onChange={(e) => {
                        updateData({ certificateNumber: e.target.value });
                        if (errors.certificateNumber) setErrors(prev => ({ ...prev, certificateNumber: "" }));
                    }}
                    error={!!errors.certificateNumber}
                    errorMessage={errors.certificateNumber}
                    containerClassName="w-full md:w-[376px]"
                />
            </div>

            <button
                type="submit"
                className="mt-[24px] border border-[#00008f] rounded-full h-[52px] md:h-[56px] px-[32px] w-full md:w-auto flex items-center justify-center gap-2 relative overflow-hidden group hover:bg-[#00008f]/5 transition-colors"
                id="complaint-continue-btn-2"
            >
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#00008f]">
                    Continue
                </span>
            </button>
        </form>
    );
}
