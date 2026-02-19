/**
 * Insurance type tab data for the FeaturedSection quote calculator.
 * Matches Figma desktop design — two rows of icon tabs.
 */

export interface InsuranceType {
    id: string;
    label: string;
    row: 1 | 2;
}

/** Row 1: primary insurance types */
/** Row 2: secondary insurance types */
export const insuranceTypes: InsuranceType[] = [
    { id: "motor", label: "Motor", row: 1 },
    { id: "health", label: "Health", row: 1 },
    { id: "home", label: "Home", row: 1 },
    { id: "life", label: "Life", row: 1 },
    { id: "foreigner", label: "Foreigner", row: 2 },
    { id: "sme", label: "SME", row: 2 },
    { id: "travel", label: "Travel", row: 2 },
    { id: "marine", label: "Marine", row: 2 },
];
