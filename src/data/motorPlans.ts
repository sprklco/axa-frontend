export interface PlanFeature {
    title: string;
    description: string;
}

export interface PlanInfo {
    id: string;
    label: string;
    description: string;
    features: PlanFeature[];
}

export const motorPlans: PlanInfo[] = [
    {
        id: "all-risk",
        label: "All Risk",
        description:
            "The All Risk motor insurance is designed to protect you and your vehicle against accidents, injury, and unexpected repair costs.",
        features: [
            {
                title: "Theft/Partial Theft Protection",
                description:
                    "Covers loss or damage resulting from partial theft, subject to an official police report.",
            },
            {
                title: "Robbery and Hold-Up",
                description:
                    "Covers loss or damage caused by robbery or forceful theft involving your vehicle.",
            },
            {
                title: "Replacement Vehicle",
                description:
                    "Provides a replacement car while your insured vehicle is under repair following a covered claim.",
            },
            {
                title: "Medical Expenses",
                description:
                    "Covers medical costs resulting from injuries sustained in a covered motor accident.",
            },
            {
                title: "Natural Hazards Coverage",
                description:
                    "Covers damage caused by hail, storm, flood, earthquake, or other severe natural events.",
            },
            {
                title: "Scratches and Dents",
                description:
                    "Covers minor body damage, including scratches, dents, and similar cosmetic impacts.",
            },
            {
                title: "24/7 Towing Assistance",
                description:
                    "Provides round-the-clock towing support in the event of a breakdown or accident.",
            },
        ],
    },
    {
        id: "compulsory",
        label: "Compulsory",
        description:
            "The Compulsory motor insurance ensures your vehicle complies with legal requirements in Lebanon.",
        features: [
            {
                title: "Bodily Injury Liability",
                description:
                    "Covers bodily injuries caused to third parties in an accident involving your vehicle as required by law.",
            },
            {
                title: "Material Damage Liability",
                description:
                    "Covers material damage to third-party property caused by your vehicle.",
            }
        ],
    },
    {
        id: "third-party",
        label: "Third Party",
        description:
            "Third Party Liability Motor insurance covers you and eligible passengers in your vehicle if you are responsible for causing damage to others or their property in an accident.",
        features: [
            {
                title: "Third Party Property Damage",
                description: "Covers damage caused to other people's property by your vehicle.",
            },
            {
                title: "Third Party Bodily Injury",
                description: "Covers injuries to other people caused by your vehicle.",
            },
            {
                title: "Passenger Coverage",
                description: "Covers eligible passengers in your vehicle.",
            },
        ],
    },
];
