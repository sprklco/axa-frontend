import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { KeyBenefitsSection } from "@/components/sections/KeyBenefitsSection";
import { FeatureTabsSection } from "@/components/sections/FeatureTabsSection";
import {
    HighlightBannersSection,
    type HighlightBanner,
    type HighlightBannerTab,
} from "@/components/sections/HighlightBannersSection";
import { HelpSectionWithCallback as HelpSection } from "@/components/sections/HelpSectionWithCallback";
import { foreignerInsuranceFeatures } from "@/data/foreignerInsuranceFeatures";

const introItems = [
    {
        id: "hospital-coverage",
        icon: "hospitalCoverage" as const,
        title: "Hospital Coverage",
        description:
            "Comprehensive in-hospital medical and surgical treatment for foreign workers.",
    },
    {
        id: "regulatory-compliance",
        icon: "regulatoryCompliance" as const,
        title: "Regulatory Compliance",
        description:
            "Structured in line with Lebanese Ministry requirements to ensure full compliance.",
    },
    {
        id: "business-protection",
        icon: "businessProtection" as const,
        title: "Business Protection",
        description:
            "Coverage for accidents, disability, death, and repatriation, helping safeguard both employees and business stability.",
    },
];

const foreignerHighlightBanner: HighlightBanner = {
    id: "foreigner-main",
    imageSrc: "/images/foreigner-insurance-coverage.jpg",
    imageAlt: "Healthcare professional supporting a foreign worker in a hospital setting",
    title: "Insurance for foreign workers",
    lead: "What does foreign worker insurance include?",
    bullets: [
        "Upper financial limitation",
        "Variation in network",
        "Three transactions ambulatory",
        "One built in laboratory test",
    ],
    optionalHeading: "We offer the following mandatory coverage options:",
    options: [
        {
            id: "option-1",
            title: "Option 1 (as per Ministry of Lebanon Rules)",
            bullets: [
                "We offer annual hospitalization limit up to USD 23,000 in addition to the cost of one laboratory test inclusive in IN hospital rates.",
                "We cover death and repatriation limit up to USD 8,000.",
                "We cover personal accident in case of partial or total disablement up to USD 10,000.",
            ],
        },
        {
            id: "option-2",
            title: "Option 2",
            bullets: [
                "We offer annual hospitalization limit up to USD 75,000 in addition to the cost of one laboratory test inclusive in IN Hospital rates.",
                "We cover death and repatriation limit up to USD 8,000.",
                "We cover personal accident in case of partial or total disablement up to USD 10,000.",
            ],
        },
    ],
    ctaLabel: "Download full coverage details",
    ctaHref: "#",
} as const;

const foreignerHighlightBannerTabs: HighlightBannerTab[] = [
    {
        id: "foreigner",
        label: "Foreigner Insurance",
        banner: foreignerHighlightBanner,
    },
];

const needHelpSection = {
    heading: "Need help?",
    body: "If you have any emergency or need more help in the quotation process",
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

export default function ForeignerInsurancePage() {
    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                {/* Hero Section - positioned behind navbar */}
                <div className="-mt-[108px] lg:-mt-[150px]">
                    <SubhomeHeroBanner
                        title="Foreigner Insurance"
                        heading={"Essential coverage,\nfull compliance"}
                        description="Health insurance designed for foreign workers, helping you meet local regulations."
                        imageSrc="/images/foreigner-insurance-hero-bg.png"
                    />
                </div>

                {/* Breadcrumbs */}
                <div className="bg-white">
                    <Container className="py-4 md:py-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Life Insurance" },
                            ]}
                        />
                    </Container>
                </div>

                {/* Product Intro Section */}
                <KeyBenefitsSection
                    heading="Protection for Foreign Workers"
                    description="Providing appropriate coverage is a regulatory requirement. It also supports operational continuity by protecting foreign employees in the event of illness or accident."
                    items={introItems}
                />

                {/* Feature Tabs Section (Ministry-Compliant / Enhanced) */}
                <FeatureTabsSection
                    plans={foreignerInsuranceFeatures}
                    autoScroll
                />

                <HighlightBannersSection tabs={foreignerHighlightBannerTabs} />

                {/* Need Help Section */}
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
