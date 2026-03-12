import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { StrategyCardsSection } from "@/components/sections/StrategyCardsSection";
import { InclusiveInsuranceSection } from "@/components/sections/InclusiveInsuranceSection";
import {
    KeyBenefitsSection,
    type FeatureItem,
} from "@/components/sections/KeyBenefitsSection";
import { sustainabilityPageData } from "@/data/sustainability";

export default function SustainabilityPage() {
    const {
        hero,
        strategyEyebrow,
        strategyHeading,
        strategySubtitle,
        strategyCards,
        inclusiveInsurance,
        climateEyebrow,
        climateHeading,
        climateSubtitle,
        climatePillars,
    } = sustainabilityPageData;

    const climateItems: FeatureItem[] = climatePillars.map((pillar) => {
        let icon: FeatureItem["icon"];

        if (pillar.id === "education") {
            icon = "climatePillar1";
        } else if (pillar.id === "transition") {
            icon = "climatePillar2";
        } else if (pillar.id === "impact") {
            icon = "climatePillar3";
        }

        return {
            id: pillar.id,
            icon,
            title: pillar.title,
            description: pillar.description,
            footerItems: pillar.footerBullets,
        };
    });

    return (
        <main className="flex flex-1 flex-col">
            <div className="relative flex flex-col">
                {/* Hero Banner — behind navbar */}
                <div className="-mt-[108px] lg:-mt-[150px]">
                    <SubhomeHeroBanner
                        heading={hero.heading}
                        description={hero.description}
                        imageSrc={hero.imageSrc}
                        showCallback={false}
                    />
                </div>

                {/* Breadcrumbs */}
                <div className="bg-white">
                    <Container className="py-4 md:py-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Sustainability" },
                            ]}
                        />
                    </Container>
                </div>

                {/* Strategy Cards */}
                <StrategyCardsSection
                    eyebrow={strategyEyebrow}
                    heading={strategyHeading}
                    subtitle={strategySubtitle}
                    cards={strategyCards}
                />

                {/* Inclusive Insurance */}
                <InclusiveInsuranceSection data={inclusiveInsurance} />

                {/* Climate Transition */}
                <KeyBenefitsSection
                    eyebrow={climateEyebrow}
                    heading={climateHeading}
                    description={climateSubtitle}
                    items={climateItems}
                />
            </div>
        </main>
    );
}
