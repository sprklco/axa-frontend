"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { PillTabs } from "@/components/ui/PillTabs";
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
                        <PillTabs
                            tabs={[
                                { id: "individual", label: "Individual" },
                                { id: "corporate", label: "Corporate" },
                            ]}
                            activeTabId={activeTab}
                            onTabChange={(id) => setActiveTab(id as "individual" | "corporate")}

                        />
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
