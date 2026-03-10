export interface JobVacancy {
    title: string;
    ctaText: string;
    ctaHref: string;
}

export interface CarouselCard {
    id: string;
    imageSrc: string;
    imageAlt: string;
    title?: string;
    subtitle?: string;
    description?: string;
    footerText?: string;
}

export interface CareersHeroData {
    title: string;
    heading: string;
    description: string;
    imageSrc: string;
    ctaText: string;
    ctaHref: string;
}

export interface WhyAxaData {
    subtitle: string;
    title: string;
    cards: CarouselCard[];
}

export interface SharedBannerData {
    imageSrc: string;
    imageAlt: string;
    subtitle: string;
    title: string;
    description: string;
    secondaryDescription?: string;
}

export interface CareersPageData {
    hero: CareersHeroData;
    whyAxa: WhyAxaData;
    weCareAndDare: SharedBannerData;
    jobVacancies: {
        title: string;
        heading: string;
        description: string;
        imageSrc: string;
        jobs: JobVacancy[];
    };
}
