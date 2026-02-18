/**
 * Design tokens extracted from Figma design
 * AXA Middle East Hero Banner
 */

// Colors
export const colors = {
    primary: {
        blue: "#00008f",
        white: "#ffffff",
    },
    background: {
        progressBar: "rgba(255, 255, 255, 0.3)",
        progressFill: "#ffffff",
    },
    text: {
        inverse: "#ffffff",
        primary: "#00008f",
    },
} as const;

// Spacing (in pixels, matching Figma CSS variables)
export const spacing = {
    lg: 16,
    xl: 20,
    "2xl": 24,
    "3xl": 32,
} as const;

// Border radius
export const radius = {
    full: 100,
    progressBar: 2,
} as const;

// Animation timing
export const animation = {
    slideInterval: 5000, // 5000ms per slide
    transitionDuration: 300, // 300ms dissolve
    transitionEasing: "linear",
} as const;

// Typography
export const typography = {
    eyebrow: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 24,
        letterSpacing: 0,
    },
    headline: {
        fontSize: 40,
        fontWeight: 300,
        lineHeight: 48,
        letterSpacing: -1.5,
    },
    body: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 24,
        letterSpacing: 0,
    },
    button: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 24,
        letterSpacing: 0,
    },
} as const;

// Gradients
export const gradients = {
    heroOverlay: `linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.7) 45%, rgba(0, 0, 0, 0.8) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)`,
} as const;
