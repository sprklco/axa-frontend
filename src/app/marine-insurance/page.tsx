import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { ThreeColumnFeatureSection } from "@/components/sections/ThreeColumnFeatureSection";

const marineHeroSection = {
    title: "Marine Insurance",
    heading: "Protection at sea for business and leisure",
    description:
        "Whether you're transporting goods across borders or cruising the sea, AXA Marine Insurance protects what matters most, your cargo or your vessel.",
    imageSrc: "/images/marine-insurance-hero.png",
} as const;

const marineCoverageSection = {
    heading: "Carefree Navigation",
    description:
        "Marine risks come in many forms, from transported goods to owned vessels. The right coverage ensures accidents, storms or unexpected incidents don’t disrupt your business or your peace of mind.",
    items: [
        {
            id: "asset-protection",
            icon: "marineAssetProtection" as const,
            title: "Asset Protection",
            description:
                "Coverage for vessels, cargo and maritime equipment against physical damage caused by collision, fire, sinking or natural perils.",
        },
        {
            id: "liability-protection",
            icon: "marineLiabilityProtection" as const,
            title: "Liability Protection",
            description:
                "Protection against third-party bodily injury and property damage linked to maritime activities or vessel operation.",
        },
        {
            id: "transit-navigation-risks",
            icon: "marineTransitRisks" as const,
            title: "Transit & Navigation Risks",
            description:
                "Protection against loss, theft and accidental damage whether goods are in transit or vessels are navigating approved waters.",
        },
    ] as const,
} as const;

export default function MarineInsurancePage() {
    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                {/* Marine Hero Section - positioned behind navbar */}
                <div className="-mt-[108px] lg:-mt-[150px]">
                    <SubhomeHeroBanner
                        title={marineHeroSection.title}
                        heading={marineHeroSection.heading}
                        description={marineHeroSection.description}
                        imageSrc={marineHeroSection.imageSrc}
                    />
                </div>

                {/* Breadcrumbs - directly under Hero */}
                <div className="bg-white">
                    <Container className="py-4 md:py-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Marine Insurance" },
                            ]}
                        />
                    </Container>
                </div>

                <ThreeColumnFeatureSection
                    heading={marineCoverageSection.heading}
                    description={marineCoverageSection.description}
                    items={marineCoverageSection.items}
                />
            </div>
        </main>
    );
}

