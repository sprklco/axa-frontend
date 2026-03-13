export type HealthProgramInfo = {
    id: string;
    individualId: string;
    corporateId: string;
    showInIndividual?: boolean;
    showInCorporate?: boolean;
    title: string;
    description?: string;
    individualDescription?: string;
    corporateDescription?: string;
    image: string;
};

export const healthProgramsData: HealthProgramInfo[] = [
    {
        id: "perpetual-program",
        individualId: "perpetual-program",
        corporateId: "corporate-overview",
        title: "Perpetual program",
        description:
            "Perpetual Program offers unlimited financial coverage with lifetime hospitalisation benefits across Lebanon, France, and the MENA region (international emergencies included). Choose your comfort level with Luxe, First, Second, or Semi-Private classes of cover.\n\nComprehensive protection includes maternity, oncology, organ transplants, emergencies, rehabilitation, and home care.\n\nGuaranteed renewability after 180 days, plus extensive benefits for newborns, accidents, and critical treatments.",
        image: "/images/health-programs/perpetual.png",
    },
    {
        id: "health-protect",
        individualId: "health-protect",
        corporateId: "corporate-health-protect",
        showInCorporate: false,
        title: "Health Protect program",
        image: "/images/health-programs/health-protect.png",
    },
    {
        id: "ambulatory-benefit",
        individualId: "ambulatory-benefit",
        corporateId: "corporate-ambulatory",
        title: "Ambulatory Benefit Plan",
        image: "/images/health-programs/ambulatory.png",
    },
    {
        id: "prescription-medicine",
        individualId: "prescription-medicine",
        corporateId: "corporate-prescription",
        title: "Prescription Medicine Benefit Plan",
        image: "/images/health-programs/prescription.png",
    },
];
