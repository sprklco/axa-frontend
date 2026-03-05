import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { ThreeColumnFeatureSection } from "@/components/sections/ThreeColumnFeatureSection";
import { type HighlightBanner } from "@/components/sections/HighlightBannersSection";
import { HighlightBannerListSection } from "@/components/sections/HighlightBannerListSection";
import { HelpSectionWithCallback as HelpSection } from "@/components/sections/HelpSectionWithCallback";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";

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

const marineHighlightBanners: HighlightBanner[] = [
    {
        id: "pleasure-boat",
        imageSrc: "/images/marine-pleasure-boat.png",
        imageAlt: "Person relaxing on a pleasure boat at sea",
        title: "Pleasure Boat Insurance",
        lead: "Enjoy the freedom of the sea knowing your vessel is protected against unexpected damage, liability and severe weather risks.",
        bullets: [
            "Hull and machinery damage",
            "Fire, storm and accidental damage",
            "Theft and malicious acts",
            "Third-party liability",
            "Personal effects (as per policy)",
        ],
        ctaLabel: "Download full coverage brochure",
        ctaHref: "#",
    },
    {
        id: "marine-cargo",
        imageSrc: "/images/marine-cargo.png",
        imageAlt: "Container ship loaded with cargo at port",
        title: "Marine Cargo Insurance",
        lead: "Protect the value of your goods while they’re in transit, locally or internationally, against loss, theft or accidental damage.",
        bullets: [
            "Sea, air and land transit",
            "Damage, theft or loss during transportation",
            "Accidental damage and handling risks",
            "International and local shipments",
        ],
        ctaLabel: "Download full coverage brochure",
        ctaHref: "#",
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

                <HighlightBannerListSection banners={marineHighlightBanners} />

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

