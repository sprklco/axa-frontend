import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { ThreeColumnFeatureSection } from "@/components/sections/ThreeColumnFeatureSection";
import {
    HighlightBannersSection,
    type HighlightBanner,
    type HighlightBannerTab,
} from "@/components/sections/HighlightBannersSection";
import { HelpSectionWithCallback as HelpSection } from "@/components/sections/HelpSectionWithCallback";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";

const travelHeroSection = {
    title: "Travel Insurance",
    heading: "Protection wherever you go",
    description:
        "Travel insurance designed to protect you wherever your journey takes you.",
    imageSrc: "/images/travel-insurance-hero.png",
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

const travelHighlightBanner: HighlightBanner = {
    id: "travel-main",
    imageSrc: "https://www.figma.com/api/mcp/asset/82125ff5-b2c4-4cbf-b789-0b0b4d45f803",
    imageAlt: "Traveler walking through an airport terminal with luggage",
    title: "Travel Insurance",
    lead: "In the event of an emergency, contact AXA Assistance for immediate guidance. Hospitalisation arrangements and direct coordination can be provided worldwide.",
    bullets: [
        "Medical repatriation",
        "Medical expenses abroad",
        "Repatriation in the event of death",
        "Baggage loss, damage or theft (conditions apply)",
        "Baggage delay (more than 12 hours abroad)",
        "Flight delayed (more than 4 hours)",
        "Travel accident *",
        "Total permanent disablement * (for insured age between 18 and 65)",
        "Personal liability Trip cancellation *",
        "This product abide the Schengen consulates conditions",
    ],
    footnote: "*depending on the option chosen.",
    ctaLabel: "Download full coverage brochure",
    ctaHref: "#",
} as const;

const travelHighlightBannerTabs: HighlightBannerTab[] = [
    {
        id: "travel",
        label: "Travel Insurance",
        banner: travelHighlightBanner,
    },
] as const;

const needHelpSection = {
    heading: "Need help?",
    body: "If you have any emergency or need more help in the  the quotation process",
    primaryCta: {
        label: "04 - 727 000",
        href: "tel:04727000",
        variant: "primary" as const,
        showPhoneIcon: true,
    },
    secondaryCta: {
        label: "Request a callback",
        href: "#",
        variant: "secondary" as const,
    },
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

                <HighlightBannersSection tabs={travelHighlightBannerTabs} />

                <HelpSection
                    heading={needHelpSection.heading}
                    body={needHelpSection.body}
                    primaryCta={needHelpSection.primaryCta}
                    secondaryCta={needHelpSection.secondaryCta}
                />
            </div>
        </main>
    );
}

