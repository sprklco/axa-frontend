import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { ThreeColumnFeatureSection } from "@/components/sections/ThreeColumnFeatureSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";

const travelHeroSection = {
    title: "Travel Insurance",
    heading: "Protection wherever you go",
    description:
        "Travel insurance designed to protect you wherever your journey takes you.",
    imageSrc:
        "https://www.figma.com/api/mcp/asset/1dcbd1bc-eaf2-47c5-bec1-18a29d3548bd",
} as const;

const travelBenefitsSection = {
    heading: "Ready for Every Journey",
    description:
        "Travel opens new possibilities. With the right coverage in place, you can focus on the experience ahead, knowing protection is part of your plans.",
    items: [
        {
            id: "trip-protection",
            icon: "travelProperty" as const,
            title: "Worldwide Medical Coverage",
            description:
                "Reimbursement of medical expenses due to illness or accident abroad.",
        },
        {
            id: "medical-assistance",
            icon: "travelMedical" as const,
            title: "Travel Disruption Protection",
            description:
                "Coverage for flight delays, baggage delay, loss or theft, and trip cancellation.",
        },
        {
            id: "travel-support",
            icon: "travelSupport" as const,
            title: "Personal Protection",
            description:
                "Medical repatriation, repatriation in case of death, travel accident and disability cover.",
        },
    ] as const,
} as const;

export default function TravelInsurancePage() {
    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                {/* Travel Hero Section - positioned behind navbar */}
                <div className="-mt-[108px] lg:-mt-[150px]">
                    <SubhomeHeroBanner
                        title={travelHeroSection.title}
                        heading={travelHeroSection.heading}
                        description={travelHeroSection.description}
                        imageSrc={travelHeroSection.imageSrc}
                    />
                </div>

                {/* Breadcrumbs - directly under Hero */}
                <div className="bg-white">
                    <Container className="py-4 md:py-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Travel Insurance" },
                            ]}
                        />
                    </Container>
                </div>

                <ThreeColumnFeatureSection
                    heading={travelBenefitsSection.heading}
                    description={travelBenefitsSection.description}
                    items={travelBenefitsSection.items}
                />
            </div>
        </main>
    );
}

