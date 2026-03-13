import type { HeroSlide } from "@/types/hero";

/**
 * Mock data for hero banner slides
 * Content extracted from Figma design
 */
export const heroSlides: HeroSlide[] = [
    {
        id: "slide-1",
        eyebrow: "We are AXA",
        headline: "Protecting what\nmatters most",
        description:
            "As a leading insurance company in Lebanon we strive to provide you integral protection solutions in Motor, Property, Health and Life.",
        ctaText: "We are AXA",
        ctaHref: "/about",
        backgroundImage: "/images/family-home-banner.png",
    },
    {
        id: "slide-2",
        eyebrow: "Travel Insurance",
        headline: "Protection \nwherever you go",
        description:
            "Comprehensive travel insurance covering medical emergencies, cancellations, and unexpected travel disruptions.",
        ctaText: "Learn More",
        ctaHref: "/travel-insurance",
        backgroundImage: "/images/hero-travel-1.png",
    },
    {
        id: "slide-3",
        eyebrow: "Life Insurance",
        headline: "Security for\nthe future",
        description:
            "Comprehensive life insurance designed to provide financial protection and lasting peace of mind for your family.",
        ctaText: "Learn More",
        ctaHref: "/life-insurance",
        backgroundImage: "/images/hero-life-1.png",
    }
];
