import type { SustainabilityPageData } from "@/types/sustainability";

export const sustainabilityPageData: SustainabilityPageData = {
    hero: {
        heading: "On a journey towards a more sustainable future",
        description:
            "At AXA, sustainability isn't just a goal – it is embedded in our value chain. We are committed to creating a positive impact for people and the planet.\nTogether, we can build a safer, more sustainable world.",
        imageSrc: "/images/sustainability-hero.png",
    },

    strategyEyebrow: "Sustainability Strategy",
    strategyHeading: "AXA's role in society",
    strategySubtitle:
        "Sustainability is a challenge, a responsibility, and an opportunity.",
    strategyCards: [
        {
            id: "challenge",
            label: "It's a Challenge",
            titleLines: [
                "What is unsustainable",
                "will become uninsurable.",
            ],
            description:
                "We must anticipate risk and support the transition to a more resilient future.",
            variant: "grey",
            size: "large",
        },
        {
            id: "responsibility-94m",
            label: "It's a Responsibility",
            statValue: "94M",
            statSuffix: "customers worldwide",
            description: "Helping them adapt to a changing world.",
            variant: "blue",
            size: "medium",
        },
        {
            id: "responsibility-147k",
            label: "It's a Responsibility",
            statValue: "+147K",
            statSuffix: "AXA employees,",
            description: "Ensuring purpose and impact in their work.",
            variant: "blue",
            size: "small",
        },
        {
            id: "responsibility-society",
            label: "It's a Responsibility",
            title: "Society at large",
            description:
                "Building physical and social resilience as a leading force in our sector.",
            variant: "grey",
            size: "small",
        },
        {
            id: "opportunity",
            label: "It's an Opportunity",
            description:
                "Sustainability opens new fields for innovation, protection, and long-term value creation.",
            variant: "grey",
            size: "small",
        },
    ],

    inclusiveInsurance: {
        title: "Inclusive insurance",
        intro: "AXA is expanding its Inclusive Insurance coverage to facilitate access to insurance for a large part of the world's population.",
        bulletGroups: [
            {
                heading: "OPPORTUNITIES",
                bullets: [
                    "Confirm AXA's ambition to remain a global brand",
                    "Build a profitable business that creates social value",
                    "Make inclusion and resilience a pillar of our strategic plan",
                ],
            },
            {
                heading: "DEDICATED OFFERS",
                bullets: [
                    "Tailored to specific needs",
                    "Affordable",
                    "Accessible",
                ],
            },
        ],
        highlightLines: [
            "14 million clients covered in 2024 with",
            "an objective to reach 20 million in 2026",
        ],
        imageSrc: "/images/sustainability-inclusive.png",
        imageAlt: "Inclusive insurance landscape",
    },

    climateEyebrow: "Climate Transition",
    climateHeading: "Expanding our impact",
    climateSubtitle:
        "Bridging understanding, triggering transformation, and delivering impact at scale.",
    climatePillars: [
        {
            id: "education",
            iconSrc: "/images/sustainability-education.svg",
            iconAlt: "Education & Research icon",
            title: "Education & Research",
            description:
                "Build knowledge and drive informed climate action through education initiatives and the AXA Research Fund.",
            footerBullets: [
                "Supporting climate awareness and expertise",
                "Backing scientific research and innovation",
            ],
        },
        {
            id: "transition",
            iconSrc: "/images/sustainability-transition.svg",
            iconAlt: "Supporting the Transition icon",
            title: "Supporting the Transition",
            description:
                "Accompany our clients as they move toward more sustainable models.",
            footerBullets: [
                "€6Md in premiums supporting the transition",
                "€5Md invested per year in transition initiatives",
            ],
        },
        {
            id: "impact",
            iconSrc: "/images/sustainability-impact.svg",
            iconAlt: "Impact at Scale icon",
            title: "Impact at Scale",
            description:
                "Accelerating decarbonization across our investment and underwriting portfolio.",
            footerBullets: [
                "9,000+ climate adaptation solutions and services",
                "Driving measurable impact across sectors",
            ],
        },
    ],
};
