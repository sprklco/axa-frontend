import { CareersPageData } from "@/types/careers";

export const careersData: CareersPageData = {
    hero: {
        title: "Join the team",
        heading: "Work at AXA",
        description: "You will have access to excellent growth opportunities. It's your chance to grow and succeed by building the future you want, reaching your full potential.",
        imageSrc: "/images/careers/hero.png", // Using the source layout for now, will be updated to specific image paths as they get added.
        ctaText: "Apply now",
        ctaHref: "#apply",
    },
    whyAxa: {
        subtitle: "Why work at AXA?",
        title: "Advantages of being part of our team",
        cards: [
            {
                id: "develop-potential",
                imageSrc: "/images/careers/interactive-1.png",
                imageAlt: "Develop your potential",
                title: "Develop your potential",
                subtitle: "Build the career you want",
                description: "Test your limits in an environment that offers great challenges and continuous learning opportunities.",
                footerText: "Linkedin Learning, International Mobility, AXA University, Leadership Program",
            },
            {
                id: "interactive-2",
                imageSrc: "/images/careers/interactive-2.png",
                imageAlt: "Career Growth",
                title: "Career Growth",
                subtitle: "Opportunities for advancement",
                description: "We believe in nurturing talent and providing the resources needed for your professional advancement.",
                footerText: "Mentorship Programs, Internal Promotions, Skill Development",
            },
            {
                id: "interactive-3",
                imageSrc: "/images/careers/interactive-3.png",
                imageAlt: "Diversity and Inclusion",
                title: "Diversity and Inclusion",
                subtitle: "A welcoming environment for all",
                description: "Our strength lies in our vibrant and diverse workforce. We foster an inclusive culture where everyone belongs.",
                footerText: "Employee Resource Groups, Inclusive Policies, Diverse Leadership",
            },
            {
                id: "interactive-4",
                imageSrc: "/images/careers/interactive-4.png",
                imageAlt: "Work Life Balance",
                title: "Work Life Balance",
                subtitle: "Supporting your personal wellbeing",
                description: "We recognize the importance of maintaining a healthy harmony between your professional and personal life.",
                footerText: "Flexible Hours, Remote Options, Wellness Programs",
            },
            // ... Add additional cards depending on CMS constraints
        ]
    },
    weCareAndDare: {
        imageSrc: "/images/careers/we-care.png",
        imageAlt: "We Care and Dare for Progress",
        subtitle: "We Care and Dare for Progress", // Usually an eyebrow title
        title: "We Care and Dare for Progress",
        description: "‘Care’ and ‘Dare’ are two words that drive everything we do - for the progress of our people and society at large.\n\n'Care' means understanding the real needs of those around us. Listening, supporting, and making sure we always act with empathy and respect. It is about creating a space where people can thrive, collaborate, and grow.\n\n'Dare' is the courage to challenge convention. To question what’s possible, and to embrace complexity as an opportunity to learn and evolve. It is about taking calculated risks, experimenting to drive change, and finding new paths forward.",
        secondaryDescription: "Together, they create a culture that encourages our teams to take ownership, initiative, and propel our business forward."
    },
    jobVacancies: {
        title: "Our vacancies",
        heading: "Career opportunities waiting for you",
        description: "We're looking for people like you, who want to test their limits while pushing progress!",
        imageSrc: "/images/careers/vacancies.png",
        jobs: [
            {
                title: "Insurance consultant",
                ctaText: "Apply now",
                ctaHref: "#apply",
            },
            {
                title: "Office Manager",
                ctaText: "Apply now",
                ctaHref: "#apply",
            },
            {
                title: "Office Assistant",
                ctaText: "Apply now",
                ctaHref: "#apply",
            }
        ]
    }
};
