"use client";

import React, { useState } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ComplaintTitleBlock } from "@/components/sections/ComplaintTitleBlock";
import { ComplaintProgressBlock } from "@/components/sections/ComplaintProgressBlock";
import { ComplaintData, ComplaintStep, initialComplaintData } from "@/types/complaint";
import { ComplaintStep1 } from "@/components/sections/complaint-steps/CustomerDataStep";
import { ComplaintStep2 } from "@/components/sections/complaint-steps/PolicyInformationStep";
import { ComplaintStep3 } from "@/components/sections/complaint-steps/ClaimDataStep";
import { ComplaintStep4 } from "@/components/sections/complaint-steps/NonconformityDataStep";
import { ComplaintSuccessStep } from "@/components/sections/complaint-steps/ComplaintSuccessStep";

export default function ComplaintPage() {
    const [currentStep, setCurrentStep] = useState<ComplaintStep>(1);
    const [formData, setFormData] = useState<ComplaintData>(initialComplaintData);

    const updateData = (fields: Partial<ComplaintData>) => {
        setFormData((prev) => ({ ...prev, ...fields }));
    };

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 5) as ComplaintStep);
    };

    const goToStep = (step: number) => {
        setCurrentStep(step as ComplaintStep);
    };

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Submit a complaint" },
    ];

    return (
        <div className="min-h-screen bg-white pb-[64px] md:pb-[120px]">
            <div className="container mx-auto px-6 pt-[100px] md:pt-[136px]">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {currentStep < 5 && (
                <div className="w-full flex flex-col items-center mt-[40px] md:mt-[56px] px-6 gap-[48px] md:gap-[64px]">
                    <ComplaintTitleBlock />
                    <ComplaintProgressBlock
                        currentStep={currentStep}
                        onStepClick={goToStep}
                    />
                </div>
            )}

            <div className="w-full px-6">
                {currentStep === 1 && (
                    <ComplaintStep1 data={formData} updateData={updateData} onNext={nextStep} />
                )}
                {currentStep === 2 && (
                    <ComplaintStep2 data={formData} updateData={updateData} onNext={nextStep} />
                )}
                {currentStep === 3 && (
                    <ComplaintStep3 data={formData} updateData={updateData} onNext={nextStep} />
                )}
                {currentStep === 4 && (
                    <ComplaintStep4 data={formData} updateData={updateData} onSubmit={nextStep} />
                )}
                {currentStep === 5 && (
                    <ComplaintSuccessStep />
                )}
            </div>
        </div>
    );
}
