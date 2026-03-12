import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { StrategyCardsSection } from "@/components/sections/StrategyCardsSection";
import { InclusiveInsuranceSection } from "@/components/sections/InclusiveInsuranceSection";
import { ClimateTransitionSection } from "@/components/sections/ClimateTransitionSection";
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
                <ClimateTransitionSection
                    eyebrow={climateEyebrow}
                    heading={climateHeading}
                    subtitle={climateSubtitle}
                    pillars={climatePillars}
                />
            </div>
        </main>
    );
}
