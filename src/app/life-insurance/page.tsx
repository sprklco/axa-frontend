import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { KeyBenefitsSection } from "@/components/sections/KeyBenefitsSection";
import { TabbedProductCardsSection } from "@/components/sections/TabbedProductCardsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { contactSectionData } from "@/data/contactSection";
import {
    lifeInsuranceTabs,
    lifeInsuranceCards,
} from "@/data/lifeInsuranceProducts";

const introItems = [
    {
        id: "financial-protection",
        icon: "financialProtection" as const,
        title: "Financial protection",
        description: "when it matters most",
    },
    {
        id: "savings-investment",
        icon: "savingsInvestment" as const,
        title: "Savings and investment",
        description: "opportunities over time",
    },
    {
        id: "long-term-security",
        icon: "longTermSecurity" as const,
        title: "Long-term security",
        description: "for your loved ones",
    },
];

export default function LifeInsurancePage() {
    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                {/* Hero Section - positioned behind navbar */}
                <div className="-mt-[108px] lg:-mt-[150px]">
                    <SubhomeHeroBanner
                        title="Life Insurance"
                        heading={"Security for\nthe future"}
                        description="Comprehensive life insurance designed to provide financial protection and lasting peace of mind for your family."
                        imageSrc="/images/life-insurance-hero-bg.png"
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
                    heading="Life Insurance for Today and Tomorrow"
                    description="Life insurance provides financial protection for the people who depend on you, while helping you build savings and plan for the future. Designed to adapt as your needs evolve, it supports long-term security with clarity and confidence."
                    items={introItems}
                />

                {/* Tabbed Product Cards Section (Individual / Group) */}
                <TabbedProductCardsSection
                    tabs={lifeInsuranceTabs}
                    cards={lifeInsuranceCards}
                    ctaText="See complete list of coverage"
                    ctaHref="#"
                />

                {/* Contact Section */}
                <ContactSection data={contactSectionData} />
            </div>
        </main>
    );
}
