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
            "As a leading insurance company in Lebanon we strive to provide you integral protection solutions in motor, Property, Health and Life.",
        ctaText: "We are AXA",
        ctaHref: "/about",
        backgroundImage: "/images/hero-bg-1.png",
    },
    {
        id: "slide-2",
        eyebrow: "Motor Insurance",
        headline: "Drive with\nconfidence",
        description:
            "Comprehensive motor insurance coverage that protects you and your vehicle on every journey.",
        ctaText: "Get a Quote",
        ctaHref: "/motor",
        backgroundImage: "/images/hero-bg-1.png",
    },
    {
        id: "slide-3",
        eyebrow: "Health Insurance",
        headline: "Your health,\nour priority",
        description:
            "Access quality healthcare with our comprehensive health insurance plans designed for you and your family.",
        ctaText: "Learn More",
        ctaHref: "/health",
        backgroundImage: "/images/hero-bg-1.png",
    },
    {
        id: "slide-4",
        eyebrow: "Life Insurance",
        headline: "Secure your\nfamily's future",
        description:
            "Protect your loved ones with life insurance solutions that provide financial security for generations.",
        ctaText: "Explore Plans",
        ctaHref: "/life",
        backgroundImage: "/images/hero-bg-1.png",
    },
];
