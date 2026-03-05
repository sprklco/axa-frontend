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

const buildingBusinessResilienceSection = {
    heading: "Building Business Resilience",
    description:
        "Every business faces risk. Our SME Insurance helps protect your operations from property damage, liability exposure, financial interruption, and unexpected events so you can focus on building and growing with confidence.",
    items: [
        {
            id: "property-assets",
            icon: "propertyAssets",
            title: "Property & Assets",
            description:
                "Protect your premises, equipment, stock, and machinery against fire, theft, natural perils, and other unforeseen damage",
        },
        {
            id: "business-continuity",
            icon: "businessContinuity",
            title: "Business Continuity",
            description:
                "Safeguard your income with coverage designed to address loss of profit and operational disruption.",
        },
        {
            id: "liability-people",
            icon: "liabilityPeople",
            title: "Liability & People",
            description:
                "Stay protected against third-party, employee-related risks, and workplace incidents.",
        },
    ],
} as const;

const smeHighlightBanner: HighlightBanner = {
    id: "sme-main",
    imageSrc: "/images/sme-insurance-box.png",
    imageAlt: "Two SME business owners working together in a warehouse office",
    title: "SME Insurance",
    lead: "Comprehensive protection designed to support your business, today and as it grows.",
    bullets: [
        "Fire & explosion",
        "Earthquake, storm, flood & natural perils",
        "Water damage & leak tracing (including neighbor liability)",
        "Liability to neighbors & co-owners",
        "Smoke damage",
        "Glass breakage",
        "Theft & hold-up",
        "Debris removal & professional fees",
        "Electrical damage",
        "Malicious acts, strikes & riots",
        "Cash in safe & in transit (Lebanon)",
        "Third-party liability (bodily injury & property damage)",
        "Employee dishonesty (Fidelity Guarantee)",
        "Workmen’s compensation",
    ],
    ctaLabel: "Download full coverage brochure",
    ctaHref: "#",
} as const;

const smeHighlightBannerTabs: HighlightBannerTab[] = [
    {
        id: "sme",
        label: "SME Insurance",
        banner: smeHighlightBanner,
    },
];

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

export default function SmeInsurancePage() {
    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                {/* SME Hero Section - positioned behind navbar */}
                <div className="-mt-[108px] lg:-mt-[150px]">
                    <SubhomeHeroBanner
                        title="SME Insurance"
                        heading="Grow your business with confidence"
                        description="Our SME Insurance safeguards your assets, operations, and people, combining essential coverage into one solution that supports your business at every stage."
                        imageSrc="/images/sme-insurance-hero.png"
                    />
                </div>

                {/* Breadcrumbs - directly under Hero */}
                <div className="bg-white">
                    <Container className="py-4 md:py-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "SME Insurance" },
                            ]}
                        />
                    </Container>
                </div>

                <ThreeColumnFeatureSection
                    heading={buildingBusinessResilienceSection.heading}
                    description={buildingBusinessResilienceSection.description}
                    items={buildingBusinessResilienceSection.items}
                />

                <HighlightBannersSection tabs={smeHighlightBannerTabs} />

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

