import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { StatsSection } from "@/components/sections/StatsSection";
import { VisionPurposeSection } from "@/components/sections/VisionPurposeSection";
import { BannerSection } from "@/components/sections/BannerSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { OverlayBannerSection } from "@/components/sections/OverlayBannerSection";
import { aboutPageData } from "@/data/about";

export default function AboutPage() {
    const {
        hero,
        statsEyebrow,
        statsHeading,
        stats,
        vision,
        trustedPartners,
        valuesEyebrow,
        valuesHeading,
        valuesDescription,
        values,
        leadershipEyebrow,
        leadershipHeading,
        leadershipDescription,
        leadershipTabs,
        legacy,
    } = aboutPageData;

    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                {/* Hero Banner — behind navbar */}
                <div className="-mt-[108px] lg:-mt-[150px]">
                    <SubhomeHeroBanner
                        title={hero.title}
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
                                { label: "We are AXA" },
                            ]}
                        />
                    </Container>
                </div>

                {/* Stats */}
                <StatsSection
                    eyebrow={statsEyebrow}
                    heading={statsHeading}
                    stats={stats}
                />

                {/* Vision & Purpose */}
                <VisionPurposeSection blocks={vision} />

                {/* Trusted Partners */}
                <BannerSection
                    data={{
                        preHeading: trustedPartners.eyebrow,
                        heading: trustedPartners.heading,
                        description: trustedPartners.body,
                        ctaText: trustedPartners.ctaLabel,
                        ctaHref: trustedPartners.ctaHref,
                    }}
                />

                {/* Our Values */}
                <ValuesSection
                    eyebrow={valuesEyebrow}
                    heading={valuesHeading}
                    description={valuesDescription}
                    values={values}
                />

                {/* Leadership Team */}
                <LeadershipSection
                    eyebrow={leadershipEyebrow}
                    heading={leadershipHeading}
                    description={leadershipDescription}
                    tabs={leadershipTabs}
                />

                {/* Legacy History Banner */}
                <OverlayBannerSection
                    imageSrc={legacy.imageSrc}
                    subtitle={legacy.eyebrow}
                    title={legacy.heading}
                    description={legacy.body}
                    ctaText={legacy.ctaLabel}
                    ctaHref={legacy.ctaHref}
                />
            </div>
        </main>
    );
}
