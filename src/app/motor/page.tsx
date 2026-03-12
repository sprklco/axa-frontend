import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { FeatureTabsSection } from "@/components/sections/FeatureTabsSection";
import { motorPlans } from "@/data/motorPlans";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { motorPackagesData } from "@/data/motorPackages";
import { BannerSection } from "@/components/sections/BannerSection";
import { KeyBenefitsSection } from "@/components/sections/KeyBenefitsSection";
import { Download } from "lucide-react";

const motorBenefitsSection = {
    heading: "Peace of Mind Wherever You Go",
    description:
        "Drive with confidence knowing you have access to trusted repair shops, fast claim recovery, and high-quality bodywork and painting.",
    items: [
        {
            id: "trusted",
            icon: "propertyAssets" as const,
            title: "Trusted",
            description: "repair shops",
        },
        {
            id: "fast",
            icon: "businessContinuity" as const,
            title: "Fast",
            description: "motor claim recovery",
        },
        {
            id: "quality",
            icon: "shield" as const,
            title: "Quality",
            description: "in bodywork and painting",
        },
    ] as const,
} as const;

export default function MotorPage() {
    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                {/* Motor Hero Section - positioned behind navbar */}
                <div className="-mt-[108px] lg:-mt-[150px]">
                    <SubhomeHeroBanner
                        title="Motor Insurance"
                        heading="Drive with confidence"
                        description="Motor insurance that protects you from unexpected costs, so you can drive with confidence."
                        ctaText="Start now"
                    />
                </div>

                {/* Breadcrumbs - directly under Hero */}
                <div className="bg-white">
                    <Container className="py-4 md:py-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Motor Insurance" }
                            ]}
                        />
                    </Container>
                </div>
                <KeyBenefitsSection
                    heading={motorBenefitsSection.heading}
                    description={motorBenefitsSection.description}
                    items={motorBenefitsSection.items}
                />
                {/* Motor Plans Section */}
                <FeatureTabsSection plans={motorPlans} autoScroll />

                {/* Motor Packages Comparison Table */}
                <ComparisonTableSection data={motorPackagesData} />

                {/* Repair Shop Banner Phase */}
                <BannerSection
                    data={{
                        preHeading: "Need to send your vehicle for repairs?",
                        heading: "Our trusted repair shop network, is just a click away",
                        description: "Find 40+ workshops across Lebanon to help with your repairs",
                        ctaText: "Download repair shop network list",
                        ctaHref: "#", // Placeholder
                    }}
                    icon={<Download className="h-5 w-5 mr-2" />}
                />


            </div>
        </main>
    );
}
