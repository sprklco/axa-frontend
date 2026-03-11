'use client';

import React, { useState } from 'react';
import { CarClaimData, CarClaimStep, initialCarClaimData } from '@/types/carClaim';
import {
    claimProgressPhases,
    claimSubStepLabels,
    stepToPhaseMap,
} from '@/data/carClaimSteps';
import { ClaimHeaderBlock } from '@/components/sections/ClaimHeaderBlock';
import { ClaimProgressBlock } from '@/components/sections/ClaimProgressBlock';
import { StepNavigationBlock } from '@/components/sections/StepNavigationBlock';
import { VehicleMakeStep } from '@/components/sections/claim-steps/VehicleMakeStep';
import { AccidentDateStep } from '@/components/sections/claim-steps/AccidentDateStep';
import { AccidentLocationStep } from '@/components/sections/claim-steps/AccidentLocationStep';
import { VehicleDescriptionStep } from '@/components/sections/claim-steps/VehicleDescriptionStep';
import { ThirdPartyVehicleStep } from '@/components/sections/claim-steps/ThirdPartyVehicleStep';
import { ImageUploadStep } from '@/components/sections/claim-steps/ImageUploadStep';
import { FinalDetailsStep } from '@/components/sections/claim-steps/FinalDetailsStep';
import { ClaimSuccessStep } from '@/components/sections/claim-steps/ClaimSuccessStep';

export default function CarClaimPage() {
    const [currentStep, setCurrentStep] = useState<CarClaimStep>(1);
    const [formData, setFormData] = useState<CarClaimData>(initialCarClaimData);

    const updateData = (fields: Partial<CarClaimData>) => {
        setFormData((prev) => ({ ...prev, ...fields }));
    };

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 8) as CarClaimStep);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1) as CarClaimStep);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleReportAnother = () => {
        setFormData(initialCarClaimData);
        setCurrentStep(1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentMapping = stepToPhaseMap[currentStep];
    const isSuccess = currentStep === 8;

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Claim Header */}
            <ClaimHeaderBlock
                title="Report a motor claim"
                className="mt-[32px]"
            />

            {/* Progress Bar */}
            {!isSuccess && (
                <div className="px-[24px] md:px-[142px] mt-[32px] md:mt-[40px]">
                    <ClaimProgressBlock
                        phases={claimProgressPhases}
                        currentPhase={currentMapping.phase}
                        currentSubStep={currentMapping.subStep}
                        activeLabel={claimSubStepLabels[currentStep]}
                    />
                </div>
            )}

            {isSuccess && (
                <div className="px-[24px] md:px-[142px] mt-[32px] md:mt-[40px]">
                    <ClaimProgressBlock
                        phases={claimProgressPhases}
                        currentPhase={2}
                        currentSubStep={0}
                    />
                </div>
            )}

            {/* Step Content */}
            <div className="flex-1 px-[24px] md:px-[142px] mt-[40px] md:mt-[48px] pb-[40px]">
                {currentStep === 1 && (
                    <VehicleMakeStep
                        data={formData}
                        updateData={updateData}
                        onNext={nextStep}
                    />
                )}
                {currentStep === 2 && (
                    <AccidentDateStep
                        data={formData}
                        updateData={updateData}
                        onNext={nextStep}
                    />
                )}
                {currentStep === 3 && (
                    <AccidentLocationStep
                        data={formData}
                        updateData={updateData}
                        onNext={nextStep}
                    />
                )}
                {currentStep === 4 && (
                    <VehicleDescriptionStep
                        data={formData}
                        updateData={updateData}
                        onNext={nextStep}
                    />
                )}
                {currentStep === 5 && (
                    <ThirdPartyVehicleStep
                        data={formData}
                        updateData={updateData}
                        onNext={nextStep}
                    />
                )}
                {currentStep === 6 && (
                    <ImageUploadStep
                        onNext={nextStep}
                    />
                )}
                {currentStep === 7 && (
                    <FinalDetailsStep
                        data={formData}
                        updateData={updateData}
                        onSubmit={nextStep}
                    />
                )}
                {currentStep === 8 && (
                    <ClaimSuccessStep
                        onReportAnother={handleReportAnother}
                    />
                )}

                {/* Step Navigation Arrows */}
                {!isSuccess && (
                    <StepNavigationBlock
                        onPrev={prevStep}
                        onNext={nextStep}
                        showPrev={currentStep > 1}
                        showNext={true}
                    />
                )}
            </div>

            {/* Minimized Footer for form steps */}
            {!isSuccess && (
                <footer className="w-full border-t border-[#e0e0e0] px-[24px] md:px-[96px] py-[20px] flex flex-wrap items-center justify-between gap-[16px]">
                    <div className="flex flex-wrap items-center gap-[16px] md:gap-[32px]">
                        {['Usage policies', 'FAQ', 'Regulation', 'Site Map', 'Privacy Notice', 'Help us to improve'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="font-['Source_Sans_Pro',sans-serif] text-[12px] md:text-[14px] leading-[20px] text-[#434956] hover:text-[#00008f] transition-colors whitespace-nowrap"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                    <span className="font-['Source_Sans_Pro',sans-serif] text-[12px] md:text-[14px] leading-[20px] text-[#434956]">
                        © 2025, All Rights Reserved
                    </span>
                </footer>
            )}
        </div>
    );
}
