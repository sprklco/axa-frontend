export type HealthProgramInfo = {
    id: string;
    title: string;
    description?: string;
    image: string;
};

export const healthProgramsData: HealthProgramInfo[] = [
    {
        id: "perpetual-program",
        title: "Perpetual program",
        description:
            "Perpetual Program offers unlimited financial coverage with lifetime hospitalisation benefits across Lebanon, France, and the MENA region (international emergencies included). Choose your comfort level with Luxe, First, Second, or Semi-Private classes of cover.\n\nComprehensive protection includes maternity, oncology, organ transplants, emergencies, rehabilitation, and home care.\n\nGuaranteed renewability after 180 days, plus extensive benefits for newborns, accidents, and critical treatments.",
        image: "/images/health-programs/perpetual.png",
    },
    {
        id: "health-protect",
        title: "Health Protect program",
        image: "/images/health-programs/health-protect.png",
    },
    {
        id: "ambulatory-benefit",
        title: "Ambulatory Benefit Plan",
        image: "/images/health-programs/ambulatory.png",
    },
    {
        id: "prescription-medicine",
        title: "Prescription Medicine Benefit Plan",
        image: "/images/health-programs/prescription.png",
    },
];
