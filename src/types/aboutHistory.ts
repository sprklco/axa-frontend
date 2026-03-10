export interface TimelineEntry {
    id: string;
    year: string;
    text: string;
    /** "left" or "right" — which side of the center line */
    side: "left" | "right";
}

export interface MilestoneCard {
    id: string;
    title: string;
    subtext: string;
    modalContent?: {
        title: string;
        paragraphs: string[];
        imageSrc?: string;
    };
}

export interface ChairmanLetter {
    eyebrow: string;
    heading: string;
    /** Array of paragraphs */
    body: string[];
    signoff: string;
    signoffTitle: string;
    imageSrc: string;
    imageAlt: string;
}

export interface AboutHistoryPageData {
    hero: {
        title: string;
        heading: string;
        description: string;
        imageSrc: string;
    };
    trustedPartner: {
        heading: string;
        paragraphs: string[];
    };
    chairman: ChairmanLetter;
    timeline: {
        heading: string;
        entries: TimelineEntry[];
    };
    milestones: {
        heading: string;
        description: string;
        cards: MilestoneCard[];
    };
}
