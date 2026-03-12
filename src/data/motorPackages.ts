export interface FeatureRow {
    id: string;
    label: string;
    subLabel?: string;
}

export interface PackageColumn {
    id: string;
    label: string;
    features: Record<string, string | boolean>;
}

export interface ComparisonData {
    title: string;
    subtitle: string;
    features: FeatureRow[];
    packages: PackageColumn[];
    ctaText?: string;
}

export const motorPackagesData: ComparisonData = {
    title: "Motor Insurance Packages",
    subtitle: "Choose the plan that suits you best",
    ctaText: "See complete list of coverage",
    features: [
        { id: "age", label: "Vehicle's Age" },
        { id: "value", label: "Vehicle's Value in USD" },
        { id: "excess", label: "Excess per Claim", subLabel: "(Optional)" },
        { id: "dealer", label: "Dealer's Repair" },
        { id: "depreciation", label: "Depreciation on new spare parts" },
        { id: "theft", label: "Partial Theft", subLabel: "(Following police report)" },
        { id: "holdup", label: "Hold Up" },
        { id: "excessTheft", label: "Excess in case of Theft and Hold up" },
    ],
    packages: [
        {
            id: "platinum",
            label: "Platinum",
            features: {
                age: "3 years / 5 years / 7 years",
                value: "0-19,995: 3Y\n20,005-49,995: 5Y \n50,005-99,995: 7Y \n100,005 & above: 7Y",
                excess: "-",
                dealer: true,
                depreciation: "-",
                theft: true,
                holdup: true,
                excessTheft: "-",
            },
        },
        {
            id: "gold-plus",
            label: "Gold Plus",
            features: {
                age: "11 years",
                value: "All Values",
                excess: "-",
                dealer: "-",
                depreciation: "Only if spare parts cannot be repaired or replaced by a used one, new spare parts will be supplied with no depreciation",
                theft: true,
                holdup: true,
                excessTheft: "Yes 10%",
            },
        },
        {
            id: "gold",
            label: "Gold",
            features: {
                age: "16 years",
                value: "All Values",
                excess: "-",
                dealer: "-",
                depreciation: "Yes- 5% starting the 2nd year depending on the year of make with a max of 50%",
                theft: true,
                holdup: true,
                excessTheft: "Yes 10%",
            },
        },
        {
            id: "silver",
            label: "Silver",
            features: {
                age: "16 years",
                value: "All Values",
                excess: "$50 applicable only for claims not involving a third party",
                dealer: "-",
                depreciation: "Yes- 5% starting the 2nd year depending on the year of make with a max of 50%",
                theft: "Up to $ 2,000",
                holdup: true,
                excessTheft: "Yes 10%",
            },
        },
        {
            id: "collision",
            label: "Collision",
            features: {
                age: "16 years",
                value: "All Values",
                excess: "-",
                dealer: "-",
                depreciation: "Yes- 5% starting the 2nd year depending on the year of make with a max of 50%",
                theft: true,
                holdup: true,
                excessTheft: "Yes 10%",
            },
        },
        {
            id: "tpl",
            label: "TPL",
            features: {
                age: "All years",
                value: "All Values",
                excess: "-",
                dealer: "-",
                depreciation: "-",
                theft: "-",
                holdup: "-",
                excessTheft: "-",
            },
        },
    ],
};
