import type { QuickActionsSectionData } from "@/types/quickActions";

/**
 * Data for the QuickActionsSection on the home page.
 * Content extracted from Figma design and original component.
 */
export const quickActionsData: QuickActionsSectionData = {
    eyebrow: "Get the assistance you need instantly",
    title: "Do you have an emergency?",
    tabs: [
        { id: "motor", label: "Motor" },
        { id: "health", label: "Health" },
        { id: "home", label: "Home" },
    ],
    mobileCards: [
        { id: "car-accident", title: "Car accident", subtitle: "What to do?", iconKey: "car-accident", href: "#" },
        { id: "mechanical-failure", title: "Mechanical failure", subtitle: "What to do?", iconKey: "mechanical", href: "#" },
        { id: "assistance", title: "Assistance", subtitle: "Generate report", iconKey: "assistance", href: "#" },
        { id: "claim", title: "Claim registration", subtitle: "Request help", iconKey: "claim", href: "#" },
    ],
    desktopCards: [
        { id: "declare-claim", title: "Declare a claim", subtitle: "Generate report", iconKey: "claim", href: "#" },
        { id: "get-support", title: "Get Support", subtitle: "Call center support", iconKey: "assistance", href: "#" },
        { id: "submit-complaint", title: "Submit a complaint", subtitle: "What to do?", iconKey: "car-accident", href: "#" },
    ],
};
