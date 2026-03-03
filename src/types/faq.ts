export interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

export interface FaqPageData {
    title: string;
    items: FaqItem[];
    closingText: string;
}
