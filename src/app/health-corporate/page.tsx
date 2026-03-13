import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { FeatureTabsSection } from "@/components/sections/FeatureTabsSection";
import { corporateMedicalFeatures } from "@/data/corporateMedicalFeatures";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { corporateMedicalPackagesData } from "@/data/corporateMedicalPackages";
import { HealthProgramsSection } from "@/components/sections/HealthProgramsSection";
import { healthProgramsData } from "@/data/healthPrograms";
import { OverlayBannerSection } from "@/components/sections/OverlayBannerSection";

export default function HealthCorporatePage() {
    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                {/* Hero Section - positioned behind navbar */}
                <div className="-mt-[108px] lg:-mt-[150px]">
                    <SubhomeHeroBanner
                        title="Corporate Health Insurance"
                        heading={"Supporting your business\nevery step of the way"}
                        description="Corporate health plans tailored to your workforce, with adaptable benefits, coverage limits, and network choices."
                        imageSrc="/images/health-corporate-hero-bg.png"
                    />
                </div>

                {/* Breadcrumbs - directly under Hero */}
                <div className="bg-white">
                    <Container className="py-4 md:py-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Corporate Health Insurance" }
                            ]}
                        />
                    </Container>

                    {/* Features section matching "Comprehensive Corporate Health Coverage" */}
                    <FeatureTabsSection
                        heading="Comprehensive Corporate Health Coverage"
                        plans={corporateMedicalFeatures}
                        autoScroll
                    />

                    {/* Health Programs Carousel Section */}
                    <HealthProgramsSection
                        title="Get the care you need instantly"
                        subtitle="Health Insurance Progams"
                        programs={healthProgramsData}
                        category="corporate"
                    />

                    {/* Medical Packages Comparison Table */}
                    <ComparisonTableSection data={corporateMedicalPackagesData} />

                    {/* Final Corporate CTA Banner */}
                    <OverlayBannerSection
                        imageSrc="/images/health-corporate-overlay-bg.png"
                        subtitle="Explore Private Medical Insurance"
                        title="Health insurance designed for real life"
                        description="Health insurance that supports you and your family through illness or injury, with coverage for hospitalization, consultations, tests, and medicines."
                        ctaText="Call us at 04-727000"
                        ctaHref="tel:04727000"
                    />

                </div>
            </div>
        </main>
    );
}
