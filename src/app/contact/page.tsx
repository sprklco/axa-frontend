import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { LegalIntroSection } from "@/components/sections/LegalIntroSection";
import { ContactInfoSplitSection } from "@/components/sections/ContactInfoSplitSection";
import { InfoCardsSection } from "@/components/sections/InfoCardsSection";

const phoneIcon = (
    <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-[14px] w-[14px]"
    >
        <path
            d="M13.1833 14C11.563 14 9.96204 13.6468 8.38056 12.9403C6.79907 12.2338 5.36019 11.2324 4.06389 9.93611C2.76759 8.63982 1.7662 7.20093 1.05972 5.61944C0.353241 4.03796 0 2.43704 0 0.816667C0 0.583333 0.0777778 0.388889 0.233333 0.233333C0.388889 0.0777778 0.583333 0 0.816667 0H3.96667C4.14815 0 4.31018 0.0615741 4.45278 0.184722C4.59537 0.30787 4.67963 0.453704 4.70556 0.622222L5.21111 3.34444C5.23704 3.55185 5.23056 3.72685 5.19167 3.86944C5.15278 4.01204 5.08148 4.13519 4.97778 4.23889L3.09167 6.14444C3.35093 6.62407 3.6588 7.0875 4.01528 7.53472C4.37176 7.98194 4.76389 8.41296 5.19167 8.82778C5.59352 9.22963 6.01481 9.60231 6.45556 9.94583C6.8963 10.2894 7.36296 10.6037 7.85556 10.8889L9.68333 9.06111C9.8 8.94445 9.95231 8.85694 10.1403 8.79861C10.3282 8.74028 10.513 8.72407 10.6944 8.75L13.3778 9.29444C13.5593 9.3463 13.7083 9.44028 13.825 9.57639C13.9417 9.7125 14 9.86481 14 10.0333V13.1833C14 13.4167 13.9222 13.6111 13.7667 13.7667C13.6111 13.9222 13.4167 14 13.1833 14Z"
            fill="currentColor"
        />
    </svg>
);

const contactInfoSection = {
    heading: "Contact",
    lead: "If you need our support or have any questions please contact us. We will analyze your case to provide you with the best solution.",
    items: [
        {
            id: "call-center-support",
            title: "Call Center Support",
            descriptionParts: [
                {
                    type: "text" as const,
                    value: "For assistance or questions about your insurance policy, contact us at : ",
                },
                { type: "emphasis" as const, value: "04 - 727 000" },
            ],
            note: "Office hours: Monday to Friday from 9:00 am to 3:00 pm.",
        },
    ],
} as const;

const contactMethodsCardsSection = {
    heading: "We're Here to Help - Connect with AXA Today!",
    cards: [
        {
            id: "by-phone",
            title: "By phone",
            icon: phoneIcon,
            lines: [
                {
                    id: "phone-line",
                    parts: [{ type: "emphasis" as const, value: "04 - 727 000" }],
                },
            ],
        },
        {
            id: "through-form",
            title: "Through a form",
            lines: [
                {
                    id: "form-line",
                    parts: [
                        { type: "text" as const, value: "Complete a simple " },
                        { type: "link" as const, value: "online form", href: "#" },
                    ],
                },
            ],
        },
        {
            id: "by-email",
            title: "By e-mail",
            lines: [
                {
                    id: "email-line-1",
                    parts: [
                        { type: "text" as const, value: "Write to us at the following e-mail address" },
                    ],
                },
                {
                    id: "email-line-2",
                    parts: [
                        {
                            type: "link" as const,
                            value: "web.complaint@axa-middleeast.com.lb",
                            href: "mailto:web.complaint@axa-middleeast.com.lb",
                        },
                    ],
                },
            ],
        },
    ],
} as const;

export default function ContactPage() {
    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                <div className="bg-white">
                    <Container className="py-4 md:py-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Contact" },
                            ]}
                        />
                    </Container>
                </div>

                <LegalIntroSection title="How to contact us" />

                <ContactInfoSplitSection
                    heading={contactInfoSection.heading}
                    lead={contactInfoSection.lead}
                    items={contactInfoSection.items}
                />

                <InfoCardsSection
                    heading={contactMethodsCardsSection.heading}
                    cards={contactMethodsCardsSection.cards}
                />
            </div>
        </main>
    );
}

