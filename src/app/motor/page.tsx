import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { FeatureTabsSection } from "@/components/sections/FeatureTabsSection";
import { motorPlans } from "@/data/motorPlans";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { motorPackagesData } from "@/data/motorPackages";
import { BannerSection } from "@/components/sections/BannerSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";

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
                <FeatureTabsSection plans={motorPlans} />

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
                />

                {/* Final Benefits Section */}
                <BenefitsSection
                    heading="Benefit from AXA Motor Insurance"
                    benefits={[
                        {
                            id: "trusted",
                            iconUrl: "http://localhost:3845/assets/159d3b20a5a152162bb2c8fd4475556b96588388.svg",
                            title: "Trusted",
                            description: "repair shops",
                            IconStyle: { aspectRatio: 1 }
                        },
                        {
                            id: "fast",
                            iconUrl: "http://localhost:3845/assets/c074610c4fe0d61bb34ffab294d1f5f7668a2930.svg",
                            title: "Fast",
                            description: "motor claim recovery",
                            IconStyle: { aspectRatio: 1 }
                        },
                        {
                            id: "quality",
                            iconUrl: "http://localhost:3845/assets/ff7d332ccda26dcfcbb7c8558efa746b005dcddc.svg",
                            title: "Quality",
                            description: "in bodywork and painting",
                        },
                    ]}
                />
            </div>
        </main>
    );
}
