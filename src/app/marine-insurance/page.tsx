import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";

const marineHeroSection = {
    title: "Marine Insurance",
    heading: "Protection at sea for business and leisure",
    description:
        "Whether you're transporting goods across borders or cruising the sea, AXA Marine Insurance protects what matters most, your cargo or your vessel.",
    imageSrc: "/images/marine-insurance-hero.png",
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
            </div>
        </main>
    );
}

