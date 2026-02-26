import { PlanInfo } from "@/components/sections/FeatureTabsSection";

export const foreignerInsuranceFeatures: PlanInfo[] = [
    {
        id: "ministry-compliant",
        label: "Ministry-Compliant",
        description: "",
        features: [
            {
                title: "Annual\nHospitalization",
                description: "Up to USD 23,000 per year.",
            },
            {
                title: "Laboratory Test",
                description:
                    "One lab test included within hospital rates.",
            },
            {
                title: "Death\n& Repatriation",
                description: "Up to USD 8,000 coverage.",
            },
            {
                title: "Personal\nAccident",
                description:
                    "Up to USD 10,000 for partial or total disability.",
            },
        ],
    },
    {
        id: "enhanced",
        label: "Enhanced",
        description: "",
        features: [
            {
                title: "Annual\nHospitalization",
                description:
                    "Extended hospitalization coverage with higher annual limits.",
            },
            {
                title: "Laboratory Test",
                description:
                    "Broader lab test coverage beyond standard hospital rates.",
            },
            {
                title: "Death\n& Repatriation",
                description:
                    "Enhanced death and repatriation benefits with increased coverage.",
            },
            {
                title: "Personal\nAccident",
                description:
                    "Higher personal accident coverage for partial or total disability.",
            },
        ],
    },
];
