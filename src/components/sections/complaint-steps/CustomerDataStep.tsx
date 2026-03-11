import React from "react";
import { ComplaintData } from "@/types/complaint";
import { TextField } from "@/components/ui/TextField";
import { Search } from "lucide-react";

interface ComplaintStep1Props {
    data: ComplaintData;
    updateData: (fields: Partial<ComplaintData>) => void;
    onNext: () => void;
}

export function ComplaintStep1({ data, updateData, onNext }: ComplaintStep1Props) {
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!data.firstName.trim()) newErrors.firstName = "Name is required";
        if (!data.lastName.trim()) newErrors.lastName = "Last Name is required";
        if (!data.age.trim()) newErrors.age = "Age is required";
        if (!data.sex.trim()) newErrors.sex = "Sex is required";
        if (!data.city.trim()) newErrors.city = "City is required";
        if (!data.phone.trim()) newErrors.phone = "Phone number is required";

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
            <div className="flex flex-col gap-[32px] md:gap-[48px] items-center w-full">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row items-start justify-between w-full gap-[32px] md:gap-[92px]">
                    <TextField
                        label="Name"
                        required
                        value={data.firstName}
                        onChange={(e) => {
                            updateData({ firstName: e.target.value });
                            if (errors.firstName) setErrors(prev => ({ ...prev, firstName: "" }));
                        }}
                        error={!!errors.firstName}
                        errorMessage={errors.firstName}
                        containerClassName="w-full md:w-[372px]"
                    />
                    <TextField
                        label="Last Name"
                        required
                        value={data.lastName}
                        onChange={(e) => {
                            updateData({ lastName: e.target.value });
                            if (errors.lastName) setErrors(prev => ({ ...prev, lastName: "" }));
                        }}
                        error={!!errors.lastName}
                        errorMessage={errors.lastName}
                        containerClassName="w-full md:w-[372px]"
                    />
                    <TextField
                        label="Mother's Last Name"
                        value={data.mothersLastName}
                        onChange={(e) => updateData({ mothersLastName: e.target.value })}
                        containerClassName="w-full md:w-[372px]"
                    />
                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row items-start w-full gap-[32px] md:gap-[92px]">
                    <div className="flex items-start gap-[8px] w-full md:w-[376px] shrink-0">
                        <TextField
                            label="Age"
                            required
                            type="number"
                            value={data.age}
                            onChange={(e) => {
                                updateData({ age: e.target.value });
                                if (errors.age) setErrors(prev => ({ ...prev, age: "" }));
                            }}
                            error={!!errors.age}
                            errorMessage={errors.age}
                            containerClassName="w-1/2 md:w-[184px]"
                        />
                        <TextField
                            label="Sex"
                            required
                            value={data.sex}
                            onChange={(e) => {
                                updateData({ sex: e.target.value });
                                if (errors.sex) setErrors(prev => ({ ...prev, sex: "" }));
                            }}
                            error={!!errors.sex}
                            errorMessage={errors.sex}
                            containerClassName="w-1/2 md:w-[184px]"
                        />
                    </div>
                    <TextField
                        label="Governorate"
                        value={data.governorate}
                        onChange={(e) => updateData({ governorate: e.target.value })}
                        icon={<Search size={16} />}
                        containerClassName="w-full md:w-[372px]"
                    />
                    <TextField
                        label="City"
                        required
                        value={data.city}
                        onChange={(e) => {
                            updateData({ city: e.target.value });
                            if (errors.city) setErrors(prev => ({ ...prev, city: "" }));
                        }}
                        error={!!errors.city}
                        errorMessage={errors.city}
                        icon={<Search size={16} />}
                        containerClassName="w-full md:w-[372px]"
                    />
                </div>

                {/* Row 3 */}
                <div className="flex flex-col md:flex-row items-start w-full gap-[32px] md:gap-[102px]">
                    <TextField
                        label="E-mail address"
                        type="email"
                        value={data.email}
                        onChange={(e) => updateData({ email: e.target.value })}
                        containerClassName="w-full md:w-[372px]"
                    />
                    <TextField
                        label="Contact phone number"
                        required
                        type="tel"
                        value={data.phone}
                        onChange={(e) => {
                            updateData({ phone: e.target.value });
                            if (errors.phone) setErrors(prev => ({ ...prev, phone: "" }));
                        }}
                        error={!!errors.phone}
                        errorMessage={errors.phone}
                        containerClassName="w-full md:w-[372px]"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-[24px] border border-[#00008f] rounded-full h-[52px] md:h-[56px] px-[32px] w-full md:w-auto flex items-center justify-center gap-2 relative overflow-hidden group hover:bg-[#00008f]/5 transition-colors"
                id="complaint-continue-btn"
            >
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#00008f]">
                    Continue
                </span>
            </button>
        </form>
    );
}
