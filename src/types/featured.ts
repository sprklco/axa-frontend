/**
 * Type definitions for FeaturedSection
 */

export interface FeaturedSectionData {
    eyebrow: string;
    title: string;
    /** Desktop description */
    description: string;
    /** Mobile-specific description */
    mobileDescription: string;
    /** Image displayed on desktop side */
    image: string;
    imageAlt: string;
    /** Phone section */
    phoneLabel: string;
    phoneNumber: string;
    phoneLabelMobile: string;
    phoneNumberMobile: string;
    /** CTA labels */
    quoteLabel: string;
    callbackLabel: string;
    /** Callback form */
    callbackFormSendLabel: string;
    callbackFormTermsText: string;
    callbackFormNamePlaceholder: string;
    callbackFormPhonePlaceholder: string;
    callbackFormEmailPlaceholder: string;
}
