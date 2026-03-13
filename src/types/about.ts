export interface AboutHero {
    title: string;
    heading: string;
    description: string;
    imageSrc: string;
}

export interface StatItem {
    label: string;
    value: string;
    suffix?: string;
    description: string;
}

export interface VisionBlock {
    heading: string;
    paragraphs: string[];
}

export interface TrustedPartnersBannerData {
    eyebrow: string;
    heading: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
}

export interface ValueCard {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
}

export interface TeamMember {
    name: string;
    role: string;
    imageSrc: string;
}

export interface LeadershipTab {
    id: string;
    label: string;
    description: string;
    members: TeamMember[];
}

export interface LegacyBannerData {
    eyebrow: string;
    heading: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
    imageSrc: string;
}

export interface AboutPageData {
    hero: AboutHero;
    statsEyebrow: string;
    statsHeading: string;
    stats: StatItem[];
    vision: VisionBlock[];
    trustedPartners: TrustedPartnersBannerData;
    valuesEyebrow: string;
    valuesHeading: string;
    valuesDescription: string;
    values: ValueCard[];
    leadershipEyebrow: string;
    leadershipHeading: string;
    leadershipDescription: string;
    leadershipTabs: LeadershipTab[];
    legacy: LegacyBannerData;
}
