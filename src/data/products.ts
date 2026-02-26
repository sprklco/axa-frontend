import type { ProductsSectionData } from "@/types/products";

/**
 * Data for the ProductsSection on the home page.
 * Content extracted from the original component.
 */
export const productsSectionData: ProductsSectionData = {
    eyebrow: "Our insurances",
    title: "Solutions designed for you",
    products: [
        {
            id: "motor",
            title: "Motor Insurance",
            image: "/images/motor-insurance.png",
            description: "Move with confidence and safety",
            subtext:
                "Our insurances adapt to your life so that you always gain in well-being.",
        },
        {
            id: "health",
            title: "Health Insurance",
            image: "/images/health-insurance.png",
            description: "Your health, our priority",
            subtext:
                "Access quality healthcare with our comprehensive health insurance plans.",
        },
        {
            id: "travel",
            title: "Travel Insurance",
            image: "/images/travel-insurance.png",
            description: "Journey with peace of mind",
            subtext:
                "Coverage for medical emergencies, trip cancellations, and lost luggage while you travel.",
        },
        {
            id: "life",
            title: "Life Insurance",
            image: "/images/life-insurance.png",
            description: "Protect your loved ones",
            subtext:
                "Ensure your family's future with our reliable life insurance policies.",
        },
        {
            id: "home",
            title: "Home Insurance",
            image: "/images/home-insurance.png",
            description: "Secure your sanctuary",
            subtext:
                "Protect your home and belongings with comprehensive coverage you can count on.",
        },
    ],
};
