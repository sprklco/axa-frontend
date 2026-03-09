import Image from "next/image";
import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { MilestoneCardsSection } from "@/components/sections/MilestoneCardsSection";
import { aboutHistoryData } from "@/data/aboutHistory";

export default function AboutHistoryPage() {
    const { hero, trustedPartner, chairman, timeline, milestones } =
        aboutHistoryData;

    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                {/* Hero Banner — positioned behind navbar */}
                <div className="-mt-[108px] lg:-mt-[150px]">
                    <SubhomeHeroBanner
                        title={hero.title}
                        heading={hero.heading}
                        description={hero.description}
                        imageSrc={hero.imageSrc}
                    />
                </div>

                {/* Breadcrumbs */}
                <div className="bg-white">
                    <Container className="py-4 md:py-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Our History" },
                            ]}
                        />
                    </Container>
                </div>

                {/* Trusted Partner Section */}
                <section className="bg-white py-[48px] md:py-[72px]">
                    <Container>
                        <div className="flex flex-col items-center gap-[24px] max-w-[905px] mx-auto">
                            <h2 className="font-headline text-[34px] leading-[38px] md:text-[48px] font-light md:leading-[56px] text-[#1a1d21] text-center">
                                {trustedPartner.heading}
                            </h2>
                            <div className="font-source-sans text-[18px] leading-[26px] text-[#1a1d21] text-center">
                                {trustedPartner.paragraphs.map(
                                    (paragraph, idx) => (
                                        <p key={idx} className="mb-4 last:mb-0">
                                            {paragraph}
                                        </p>
                                    )
                                )}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Chairman's Letter Section */}
                <section className="bg-[#f7f7f8] py-[72px]">
                    <Container>
                        <div className="bg-white rounded-[12px] flex flex-col md:flex-row items-center gap-8 md:gap-[80px] p-6 pb-[72px] md:p-6 md:pl-[24px] md:pr-[72px] md:py-[24px]">
                            {/* Chairman photo */}
                            <div className="relative w-full md:w-[354px] h-[374px] shrink-0 rounded-[8px] overflow-hidden">
                                <Image
                                    src={chairman.imageSrc}
                                    alt={chairman.imageAlt}
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 354px, 100vw"
                                />
                                <div className="absolute inset-0 bg-black/10 rounded-[8px]" />
                            </div>

                            {/* Letter content */}
                            <div className="flex flex-col gap-[16px] flex-1">
                                <p className="font-source-sans text-[14px] leading-[22px] text-[#606776]">
                                    {chairman.eyebrow}
                                </p>
                                <h2 className="font-headline text-[34px] leading-[38px] md:text-[40px] font-light md:leading-[48px] text-[#1a1d21] whitespace-pre-line">
                                    {chairman.heading}
                                </h2>
                                <div className="font-source-sans text-[18px] leading-[26px] text-[#1a1d21]">
                                    {chairman.body.map((paragraph, idx) => (
                                        <p key={idx} className="mb-4 last:mb-0">
                                            {paragraph}
                                        </p>
                                    ))}
                                    <p className="mt-4 mb-0">
                                        {chairman.signoff}
                                    </p>
                                    <p className="mb-0">
                                        {chairman.signoffTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Timeline History Section */}
                <TimelineSection
                    heading={timeline.heading}
                    entries={timeline.entries}
                />

                {/* Key Milestones Section */}
                <MilestoneCardsSection
                    heading={milestones.heading}
                    description={milestones.description}
                    cards={milestones.cards}
                />
            </div>
        </main>
    );
}
