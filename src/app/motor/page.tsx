import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { FeatureTabsSection } from "@/components/sections/FeatureTabsSection";
import { motorPlans } from "@/data/motorPlans";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { motorPackagesData } from "@/data/motorPackages";
import { BannerSection } from "@/components/sections/BannerSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { Download } from "lucide-react";

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

                {/* Final Benefits Section */}
                <BenefitsSection
                    heading="Benefit from AXA Motor Insurance"
                    benefits={[
                        {
                            id: "trusted",
                            iconUrl: "/images/benefits/trusted.svg",
                            title: "Trusted",
                            description: "repair shops",
                            IconStyle: { aspectRatio: 1 }
                        },
                        {
                            id: "fast",
                            iconUrl: "/images/benefits/fast.svg",
                            title: "Fast",
                            description: "motor claim recovery",
                            IconStyle: { aspectRatio: 1 }
                        },
                        {
                            id: "quality",
                            iconUrl: "/images/benefits/quality.svg",
                            title: "Quality",
                            description: "in bodywork and painting",
                        },
                    ]}
                />
            </div>
        </main>
    );
}
