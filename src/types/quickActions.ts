/**
 * Type definitions for QuickActionsSection
 */

export interface QuickActionsTab {
    id: string;
    label: string;
}

export interface QuickActionCard {
    id: string;
    title: string;
    subtitle: string;
    /** Key used to map to icon SVG in the component */
    iconKey: string;
    href: string;
}

export interface QuickActionsSectionData {
    eyebrow: string;
    title: string;
    tabs: QuickActionsTab[];
    mobileCards: QuickActionCard[];
    desktopCards: QuickActionCard[];
}
