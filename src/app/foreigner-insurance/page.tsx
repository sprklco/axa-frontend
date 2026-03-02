import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { ProductIntroSection } from "@/components/sections/ProductIntroSection";
import { FeatureTabsSection } from "@/components/sections/FeatureTabsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { contactSectionData } from "@/data/contactSection";
import { foreignerInsuranceFeatures } from "@/data/foreignerInsuranceFeatures";

const introItems = [
    {
        id: "hospital-coverage",
        iconSrc: "/images/benefits/hospital-coverage.svg",
        title: "Hospital Coverage",
        subtitle:
            "Comprehensive in-hospital medical and surgical treatment for foreign workers.",
    },
    {
        id: "regulatory-compliance",
        iconSrc: "/images/benefits/regulatory-compliance.svg",
        title: "Regulatory Compliance",
        subtitle:
            "Structured in line with Lebanese Ministry requirements to ensure full compliance.",
    },
    {
        id: "business-protection",
        iconSrc: "/images/benefits/business-protection.svg",
        title: "Business Protection",
        subtitle:
            "Coverage for accidents, disability, death, and repatriation, helping safeguard both employees and business stability.",
    },
];

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
                <ProductIntroSection
                    heading="Protection for Foreign Workers"
                    description="Providing appropriate coverage is a regulatory requirement. It also supports operational continuity by protecting foreign employees in the event of illness or accident."
                    items={introItems}
                />

                {/* Feature Tabs Section (Ministry-Compliant / Enhanced) */}
                <FeatureTabsSection plans={foreignerInsuranceFeatures} autoScroll />

                {/* Contact Section */}
                <ContactSection data={contactSectionData} />
            </div>
        </main>
    );
}
