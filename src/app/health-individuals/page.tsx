import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { FeatureTabsSection } from "@/components/sections/FeatureTabsSection";
import { medicalPlans } from "@/data/medicalPlans";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { medicalPackagesData } from "@/data/medicalPackages";
import { HealthProgramsSection } from "@/components/sections/HealthProgramsSection";
import { healthProgramsData } from "@/data/healthPrograms";
import { OverlayBannerSection } from "@/components/sections/OverlayBannerSection";

export default function MedicalIndividualsPage() {
    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                {/* Motor Hero Section - positioned behind navbar */}
                <div className="-mt-[108px] lg:-mt-[150px]">
                    <SubhomeHeroBanner
                        title="Individual Health Insurance"
                        heading={"Health insurance\ndesigned for real life"}
                        description="Health insurance that supports you and your family through illness or injury, with coverage for hospitalization, consultations, tests, and medicines."
                        imageSrc="/images/medical-individuals-hero-bg.png"
                    />
                </div>

                {/* Breadcrumbs - directly under Hero */}
                <div className="bg-white">
                    <Container className="py-4 md:py-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Individual Health Insurance" }
                            ]}
                        />
                    </Container>
                    <FeatureTabsSection
                        heading="Flexible Coverage for Evolving Needs"
                        plans={medicalPlans}
                        autoScroll
                    />
                    {/* Medical Packages Comparison Table */}
                    <ComparisonTableSection data={medicalPackagesData} />

                    {/* Health Programs Carousel Section */}
                    <HealthProgramsSection
                        title="Get the care you need instantly"
                        subtitle="Health Insurance Programs"
                        programs={healthProgramsData}
                        category="individual"
                    />

                    {/* Final Corporate CTA Banner */}
                    <OverlayBannerSection
                        imageSrc="/images/corporate-medical-banner.png"
                        subtitle="Explore Corporate Medical Insurance"
                        title="Supporting your business every step of the way"
                        description="Corporate health plans tailored to your workforce, with adaptable benefits, coverage limits, and network choices."
                        ctaText="Read More"
                        ctaHref="#"
                    />

                </div>


            </div>
        </main>
    );
}
