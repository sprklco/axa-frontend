/**
 * Type definitions for QuoteModal
 */

export interface QuoteModalContent {
    /** Modal heading */
    title: string;
    /** Subtitle / description text */
    description: string;
    /** Input placeholders */
    namePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    /** Submit button label */
    submitLabel: string;
}

export interface QuoteModalProps {
    /** Content data for the modal */
    content: QuoteModalContent;
    /** Whether the modal is visible */
    isOpen: boolean;
    /** Called when the user requests to close the modal */
    onClose: () => void;
    /** Optional className for the root element */
    className?: string;
}
