import type { ContactSectionData } from "@/types/contact";

/**
 * Data for the ContactSection on the home page.
 * Content extracted from the original component.
 */
export const contactSectionData: ContactSectionData = {
    backgroundImage: "/images/contact/background.png",
    cards: [
        {
            title: "Need help?",
            description:
                "If you have any emergency or need more help in the  the quotation process",
            buttons: [
                {
                    label: "04 - 727 000",
                    variant: "ghost",
                    phoneHref: "tel:04727000",
                },
                {
                    label: "Request a callback",
                    variant: "inverse",
                },
            ],
        },
        {
            title: "Online Payment",
            description: "Coming Soon",
            buttons: [
                {
                    label: "Pay Now",
                    variant: "ghost",
                },
            ],
        },
    ],
};
