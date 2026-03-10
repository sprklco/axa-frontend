import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { InteractiveCarouselSection } from "@/components/sections/InteractiveCarouselSection";
import { JobVacanciesBannerSection } from "@/components/sections/JobVacanciesBannerSection";
import { TextWithImageBannerSection } from "@/components/sections/TextWithImageBannerSection";
import { careersData } from "@/data/careers";

export const metadata: Metadata = {
    title: "Careers | We are AXA",
    description: "Join the team. Work at AXA. You will have access to excellent growth opportunities.",
};

export default function CareersPage() {
    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                {/* Hero Section - positioned behind navbar */}
                <div className="-mt-[108px] lg:-mt-[150px]">
                    <SubhomeHeroBanner
                        title={careersData.hero.title}
                        heading={careersData.hero.heading}
                        description={careersData.hero.description}
                        imageSrc={careersData.hero.imageSrc}
                        ctaText={careersData.hero.ctaText}
                        ctaHref={careersData.hero.ctaHref}
                    />
                </div>

                {/* Breadcrumbs - directly under Hero */}
                <div className="bg-white">
                    <Container className="py-4 md:py-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "We are AXA", href: "/about" },
                                { label: "Careers", href: "/careers" },
                            ]}
                        />
                    </Container>
                </div>

                {/* Why AXA Interactive Carousel Section */}
                <InteractiveCarouselSection data={careersData.whyAxa} />

                {/* Job Vacancies Banner Section */}
                <JobVacanciesBannerSection data={careersData.jobVacancies} />

                {/* We Care and Dare for Progress Banner */}
                <TextWithImageBannerSection data={careersData.weCareAndDare} />
            </div>
        </main>
    );
}
