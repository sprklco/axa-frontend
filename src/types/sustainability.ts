export interface StrategyCard {
    id: string;
    label: string;
    /** Large stat value, e.g. "94M", "+147K" */
    statValue?: string;
    /** Inline text next to statValue, e.g. "customers worldwide" */
    statSuffix?: string;
    /** Headline title, e.g. "Society at large" */
    title?: string;
    /** Multi-line title rendered as separate lines */
    titleLines?: string[];
    description: string;
    /** "grey" | "blue" */
    variant: "grey" | "blue";
    /** Card size hint for grid layout */
    size: "large" | "medium" | "small";
}

export interface InclusiveInsuranceBulletGroup {
    heading: string;
    bullets: string[];
}

export interface InclusiveInsuranceData {
    title: string;
    intro: string;
    bulletGroups: InclusiveInsuranceBulletGroup[];
    highlightLines: string[];
    imageSrc: string;
    imageAlt: string;
}

export interface ClimatePillar {
    id: string;
    iconSrc: string;
    iconAlt: string;
    title: string;
    description: string;
    footerBullets: string[];
}

export interface SustainabilityPageData {
    hero: {
        heading: string;
        description: string;
        imageSrc: string;
    };
    strategyEyebrow: string;
    strategyHeading: string;
    strategySubtitle: string;
    strategyCards: StrategyCard[];
    inclusiveInsurance: InclusiveInsuranceData;
    climateEyebrow: string;
    climateHeading: string;
    climateSubtitle: string;
    climatePillars: ClimatePillar[];
}
