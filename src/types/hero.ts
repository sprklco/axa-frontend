/**
 * Type definitions for Hero Banner
 */

export interface HeroSlide {
    id: string;
    eyebrow: string;
    headline: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    backgroundImage: string;
}

export interface ProgressBarProps {
    /** Whether this is the currently active slide */
    isActive: boolean;
    /** Whether this slide has already been shown */
    isCompleted: boolean;
    /** Progress percentage (0-100) for the active slide */
    progress: number;
    /** Click handler to jump to this slide */
    onClick: () => void;
    /** Accessible label for the progress segment */
    ariaLabel: string;
}

export interface PauseButtonProps {
    /** Whether the carousel is currently paused */
    isPaused: boolean;
    /** Toggle pause/play */
    onToggle: () => void;
}
