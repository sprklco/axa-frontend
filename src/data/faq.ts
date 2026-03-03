import type { FaqPageData } from "@/types/faq";
import type { ContactSectionData } from "@/types/contact";

export const faqData: FaqPageData = {
    title: "Frequently Asked Questions",
    items: [
        {
            id: "globemed",
            question: "What is GlobeMed Lebanon?",
            answer: "GlobeMed Lebanon is a service commissioner that serves third parties by administrating a wide network of healthcare providers: the great hospitals, laboratories, doctor's cabinets, polyclinics, pharmacies and therapy centers. AXA ME holds 31% of GlobeMed Lebanon shares.",
        },
        {
            id: "settle-claim",
            question: "How much time is needed to settle a claim?",
            answer: "There are two ways to settle a claim:\nThe work indemnity or motor insurance is paid directly by the company to the service provider, i.e. GlobeMed Lebanon Health Plan. In that case, you don't have to pay anything to settle the claim.\nThe claim settling will just take a few days if your file and your claims declaration, are completed.",
        },
        {
            id: "safe-dealing",
            question: "Am I safe when dealing with AXA ME? Who is your re-insurer?",
            answer: "Our re-insurers are chosen among the world's finest, according to a strict selection established by experts from AXA group.",
        },
        {
            id: "vague-terms",
            question: "Insurance companies usually use vague and ambiguous terms in their contracts? Can I entirely trust your company?",
            answer: "Our service state, our history, and the fidelity of our clients are the main witnesses of our credibility. When we present you with our products and services, you can rest assured that our experts will explain to you the detail of your coverage and exclusions, as well your rights and duties.",
        },
        {
            id: "accident-claim",
            question: "What should I do in case of accident, claim, request or investigation?",
            answer: "At AXA ME, we have created a wide network of insurance experts whose unique mission is to answer all your needs.\nThis network is subdivided in three departments:\nThe call center\nThe account executive teams\nThe customer service and relation team\nContact us through your insurance consultant or your broker, for whom we have created a team dedicated to your service.\nIf an account executive or a costumer relation responsible has been designated at your service, or if you have a specified broker, then you should contact them directly.",
        },
        {
            id: "why-pay-more",
            question: "Why pay more when it is possible for me to contract the same insurance policy significantly cheaper? What is the added value I will be getting?",
            answer: "Consider two majors issues: the products and the after sales service. These two parameters are in fact interdependent but constitute the success or failure factor of an insurance company. A company can strive to offer an innovative range of products but disregard the offered service by remaining distant and poorly connected to its clients. On the other hand, a company can offer a quality service, but might fail to offer the adequate panel of products to its clients. At AXA ME, we are mobilized to continually improve our product panel and our services in order to always offer you optimal satisfaction. Innovation and effectiveness are the two objectives that we strive to attain permanently, in order to offer you veritable added value.",
        },
        {
            id: "why-choose",
            question: "Why should I choose AXA MIDDLE EAST to insure my relatives, my parents, or myself?",
            answer: "AXA ME offers you coverage against all types of risks you could encounter during your private or professional life.\nA full list of insurance products: Foreigner insurance, Home insurance, Life insurance, Medical insurance, Car insurance, Travel insurance, SME, pharmacy insurance, restaurant insurance, personal accident insurance, fire insurance.",
        },
        {
            id: "exact-activities",
            question: "What are the exact activities of AXA MIDDLE EAST?",
            answer: "AXA ME offers you coverage against all types of risks you could encounter during your private or professional life.\nA full list of insurance products: Foreigner insurance, Home insurance, Life insurance, Medical insurance, Car insurance, Travel insurance, SME, pharmacy insurance, restaurant insurance, personal accident insurance, fire insurance.",
        },
    ],
    closingText: "Still have questions? Please contact us.",
};

export const faqContactData: ContactSectionData = {
    backgroundImage: "/images/faq-contact-bg.png",
    cards: [
        {
            title: "Need help?",
            description:
                "If you have any emergency or need more help in the the quotation process",
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
