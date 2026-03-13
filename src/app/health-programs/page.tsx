"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { ProgramsDetailSection } from "@/components/sections/ProgramsDetailSection";
import { healthProgramsCategories } from "@/data/healthProgramsDetails";
import { cn } from "@/lib/cn";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function HealthProgramsContent() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<"individual" | "corporate">("individual");
    
    useEffect(() => {
        const category = searchParams.get("category");
        if (category === "corporate") {
            setActiveTab("corporate");
        } else if (category === "individual") {
            setActiveTab("individual");
        }
    }, [searchParams]);

    // Select the appropriate groups based on the active tab
    const activeCategory = healthProgramsCategories.find(c => c.id === activeTab) || healthProgramsCategories[0];
    const groups = activeCategory.groups;
    const initialProgramId = searchParams.get("program") || undefined;

    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                {/* Spacer for the fixed/sticky navbar */}
                <div className="h-0 lg:h-0" />

                <div className="bg-white">
                    {/* Breadcrumbs */}
                    <Container className="pt-[36px] pb-[16px]">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                {
                                    label: "Health Insurance",
                                    href: activeTab === "individual" ? "/health-individuals" : "/health-corporate",
                                },
                                { label: "Programs" },
                            ]}
                        />
                    </Container>

                    {/* Tab Toggles */}
                    <Container className="flex justify-center mb-10">
                        <div className="bg-[#fafafa] flex items-center p-[8px] rounded-full relative shadow-sm border border-gray-100">
                            {/* Animated Background Indicator */}
                            <div
                                className={cn(
                                    "absolute top-[8px] h-[52px] w-[115px] bg-[#00008f] rounded-full transition-all duration-300 ease-in-out",
                                    activeTab === "individual" ? "left-[8px]" : "left-[calc(100%-115px-8px)]"
                                )}
                            />

                            {/* Buttons */}
                            <div className="flex gap-[37px] font-['Source_Sans_Pro',sans-serif] text-[18px] relative z-10">
                                <button
                                    onClick={() => setActiveTab("individual")}
                                    className={cn(
                                        "w-[115px] h-[52px] flex items-center justify-center rounded-full transition-colors text-center leading-[26px]",
                                        activeTab === "individual" ? "text-white font-semibold" : "text-[#00008f] font-normal"
                                    )}
                                >
                                    Individual
                                </button>
                                <button
                                    onClick={() => setActiveTab("corporate")}
                                    className={cn(
                                        "w-[115px] h-[52px] flex items-center justify-center rounded-full transition-colors text-center leading-[26px]",
                                        activeTab === "corporate" ? "text-white font-semibold" : "text-[#00008f] font-normal"
                                    )}
                                >
                                    Corporate
                                </button>
                            </div>
                        </div>
                    </Container>

                    {/* Programs Detail Section */}
                    <Container className="pb-[80px]">
                        <ProgramsDetailSection groups={groups} initialProgramId={initialProgramId} />
                    </Container>
                </div>
            </div>
        </main>
    );
}

export default function HealthProgramsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HealthProgramsContent />
        </Suspense>
    );
}
