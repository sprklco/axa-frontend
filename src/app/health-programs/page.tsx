"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { ProgramsDetailSection } from "@/components/sections/ProgramsDetailSection";
import { healthProgramsCategories } from "@/data/healthProgramsDetails";
import { cn } from "@/lib/cn";

export default function HealthProgramsPage() {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const activeCategory = healthProgramsCategories[activeCategoryIndex];

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

                    {/* Individual / Corporate Toggle */}
                    <div className="flex justify-center pb-[40px]">
                        <div className="relative flex items-center gap-0 bg-[#fafafa] rounded-full p-[8px]">
                            {healthProgramsCategories.map((category, idx) => {
                                const isActive = idx === activeCategoryIndex;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() =>
                                            setActiveCategoryIndex(idx)
                                        }
                                        className={cn(
                                            "relative z-10 px-[18px] py-[13px] rounded-[48px] text-[18px] font-source-sans leading-[26px] transition-all duration-300 whitespace-nowrap",
                                            isActive
                                                ? "bg-[#00008f] text-white"
                                                : "text-[#00008f] hover:bg-[#eeeef5]"
                                        )}
                                    >
                                        {category.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Programs Detail Section */}
                    <Container className="pb-[80px]">
                        <ProgramsDetailSection
                            programs={activeCategory.programs}
                        />
                    </Container>
                </div>
            </div>
        </main>
    );
}
