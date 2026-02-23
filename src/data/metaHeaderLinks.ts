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
            { label: "Who we are", href: "#" },
            { label: "AXA Global", href: "#" },
            { label: "Sustainability", href: "#" },
            { label: "News", href: "#" },
            { label: "Careers", href: "#" },
        ],
    },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Login", href: "#" },
];
