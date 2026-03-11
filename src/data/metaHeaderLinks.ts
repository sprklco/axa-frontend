export interface MetaHeaderLink {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
}

export const META_HEADER_LINKS: MetaHeaderLink[] = [
    {
        label: "We are AXA",
        href: "#",
        children: [
            { label: "Who we are", href: "/about" },
            { label: "AXA Global", href: "#" },
            { label: "Sustainability", href: "/sustainability" },
            { label: "News", href: "#" },
            { label: "Careers", href: "/careers" },
        ],
    },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "#" },
];
