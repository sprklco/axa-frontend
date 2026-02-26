import type { ProductCard, ProductTab } from "@/components/sections/TabbedProductCardsSection";

export const lifeInsuranceTabs: ProductTab[] = [
    { id: "individual", label: "Individual" },
    { id: "group", label: "Group" },
];

export const lifeInsuranceCards: ProductCard[] = [
    {
        id: "individual-term-life",
        tab: "individual",
        title: "Individual Term Life Insurance",
        description:
            "Individual Term Life provides a lump sum payment to your beneficiaries in the event of death, helping them maintain financial stability and continuity when it matters most.",
        features: [
            {
                label: "Key Features",
                items: [
                    "Flexible coverage periods of 5 or 10 years",
                    "Guaranteed renewability up to age 75, without medical evidence",
                    "Premiums adjusted based on age at renewal",
                ],
            },
            {
                label: "Mandatory Coverage",
                text: "Death from Any Cause (DAC)",
            },
        ],
    },
    {
        id: "unit-linked-viva",
        tab: "individual",
        title: "Unit Linked Plan (VIVA)",
        description:
            "VIVA brings together life protection and structured investment solutions, helping you build savings while safeguarding your future.",
        features: [
            {
                label: "Who's it for",
                items: [
                    "Individuals aged 18 to 65",
                    "Anyone with financial responsibilities",
                ],
            },
            {
                label: "Key Features",
                items: [
                    "Contributions are invested in Unit Linked Funds",
                    "Funds are managed by AXA Investment Managers (part of BNP PARIBAS group),",
                    "Global diversification across Technology, Healthcare, Real Estate, and Industrial sectors",
                ],
            },
            {
                label: "Mandatory Coverage",
                text: "Death from Any Cause (DAC)",
            },
        ],
    },
    {
        id: "group-term-life",
        tab: "group",
        title: "Group Term Life Insurance",
        description:
            "Group Term Life Insurance provides a lump sum payment to beneficiaries in the event of an employee's death, supporting their families with financial stability.",
        features: [
            {
                label: "Key Features",
                items: [
                    "Flexible coverage tailored to company size",
                    "Guaranteed renewability without individual medical evidence",
                    "Premiums based on group demographics",
                ],
            },
            {
                label: "Mandatory Coverage",
                text: "Death from Any Cause (DAC)",
            },
        ],
    },
    {
        id: "group-credit-life",
        tab: "group",
        title: "Group Credit Life Insurance",
        description:
            "Group Credit Life Insurance ensures outstanding loan balances are covered in the event of death, protecting both borrowers and lending institutions.",
        features: [
            {
                label: "Who's it for",
                items: [
                    "Banks and lending institutions",
                    "Borrowers with outstanding loans",
                ],
            },
            {
                label: "Key Features",
                items: [
                    "Coverage aligned with outstanding loan balances",
                    "Seamless integration with lending processes",
                    "Flexible terms to match loan durations",
                ],
            },
            {
                label: "Mandatory Coverage",
                text: "Death from Any Cause (DAC)",
            },
        ],
    },
];
