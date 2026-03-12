import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { KeyBenefitsSection } from "@/components/sections/KeyBenefitsSection";
import { FeatureTabsSection } from "@/components/sections/FeatureTabsSection";
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
                <FeatureTabsSection plans={foreignerInsuranceFeatures} autoScroll />

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
