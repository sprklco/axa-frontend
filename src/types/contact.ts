/**
 * Type definitions for ContactSection
 */

export interface ContactButton {
    label: string;
    variant: "ghost" | "inverse";
    /** If present, rendered as a phone link with icon */
    phoneHref?: string;
}

export interface ContactCard {
    title: string;
    description: string;
    buttons: ContactButton[];
}

export interface ContactSectionData {
    backgroundImage: string;
    cards: ContactCard[];
}
