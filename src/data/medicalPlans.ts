import type { PlanInfo } from "./motorPlans";

export const medicalPlans: PlanInfo[] = [
    {
        id: "flexible-coverage",
        label: "Flexible Coverage", // Label handles the single tab fallback
        description:
            "Designed to adapt to evolving healthcare needs, our plans offer flexible coverage options to suit different budgets and places of residence, supported by a wide network of trusted providers, and administered by GlobeMed Lebanon, one of the country's leading third-party administrators.",
        features: [
            {
                title: "Prosthesis\nCoverage",
                description: "Covers prosthetic devices required as a result of post-traumatic accidents, as well as medically necessary prostheses related to illness, including coronary stents.",
            },
            {
                title: "Organ\nTransplantation",
                description: "Covers organ transplantation for the insured recipient, including bone marrow transplantation, in accordance with the applicable class of coverage.",
            },
            {
                title: "Maternity\nBenefits",
                description: "Offers unlimited maternity coverage from the first renewal, covering delivery costs and any medically necessary treatment for maternity-related complications.",
            },
            {
                title: "Cancer\nTreatment",
                description: "Includes coverage for radiotherapy, chemotherapy, and advanced cancer treatments, ensuring access to essential medical care throughout the course of treatment, in line with the selected coverage.",
            },
            {
                title: "Genetic\nCancer Tests",
                description: "Includes coverage for Prosigna and Oncotype DX genetic tests when medically indicated, supporting accurate diagnosis and informed treatment planning as part of comprehensive cancer care.",
            },
            {
                title: "Breast\nSurgery",
                description: "Provides coverage for breast surgery, including reconstruction procedures and prosthetic devices, when medically required and in accordance with the selected coverage plan.",
            },
        ],
    },
];
