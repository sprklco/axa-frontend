"use client";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { ProgramsDetailSection } from "@/components/sections/ProgramsDetailSection";
import { healthProgramsCategories } from "@/data/healthProgramsDetails";

export default function HealthProgramsPage() {
    // Use the first (individual) category groups directly — no toggle
    const groups = healthProgramsCategories[0].groups;

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
                                    href: "/medical-individuals",
                                },
                                { label: "Programs" },
                            ]}
                        />
                    </Container>

                    {/* Programs Detail Section */}
                    <Container className="pb-[80px]">
                        <ProgramsDetailSection groups={groups} />
                    </Container>
                </div>
            </div>
        </main>
    );
}
