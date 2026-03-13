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
        description: "",
        individualDescription:
            "Unlimited lifetime hospitalization coverage across Lebanon, France, and the MENA region, including international emergencies. Choose your preferred level of comfort: Luxe, First, Second, or Semi-Private with comprehensive protection covering maternity, oncology, organ transplants, emergencies, rehabilitation, and home care, along with guaranteed renewability after 180 days.",
        corporateDescription:
            "Perpetual Program offers unlimited financial coverage with lifetime hospitalisation benefits across Lebanon, France, and the MENA region (international emergencies included). Choose your comfort level with Luxe, First, Second, or Semi-Private classes of cover.\nComprehensive protection includes maternity, oncology, organ transplants, emergencies, rehabilitation, and home care. Guaranteed renewability after 180 days, plus extensive benefits for newborns, accidents, and critical treatments.",
        image: "/images/health-programs/perpetual.png",
    },
    {
        id: "health-protect",
        individualId: "health-protect",
        corporateId: "corporate-health-protect",
        showInCorporate: false,
        title: "Health Protect program",
        description: "",
        individualDescription:
            "Health Protect Program provides unlimited financial coverage with up to 720 lifetime hospitalisation days in Lebanon (First, Second, or Semi- Private), including emergency care, surgery, maternity, oncology, newborn benefits, and guaranteed renewability after 180 days.",
        image: "/images/health-programs/health-protect.png",
    },
    {
        id: "ambulatory-benefit",
        individualId: "ambulatory-benefit",
        corporateId: "corporate-ambulatory",
        title: "Ambulatory Benefit Plan",
        description: "",
        individualDescription:
            "Optional add-on to the Perpetual plan covering outpatient diagnostics, including MRI, CT scans, X-rays, and physiotherapy. Access approved network providers with real-time eligibility confirmation. 15% coinsurance per service (as per policy terms).",
        corporateDescription:
            "Ambulatory Plan is an optional add-on to Perpetual, covering outpatient diagnostic tests such as MRI, CT scans, X-rays, and physiotherapy. Access any approved lab or diagnostic centre in our network with instant eligibility verification. Enjoy unlimited outpatient transactions per year, with real-time coverage confirmation.\nMembers pay just 15% coinsurance per service (unless otherwise stated in the policy).",
        image: "/images/health-programs/ambulatory.png",
    },
    {
        id: "prescription-medicine",
        individualId: "prescription-medicine",
        corporateId: "corporate-prescription",
        title: "Prescription Medicine Benefit Plan",
        description: "",
        individualDescription:
            "Optional Perpetual add-on providing card-based access to approved medicines and CDC-recommended vaccines through the GlobeMed pharmacy network, with unlimited transactions and 15% coinsurance (as per policy terms).",
        corporateDescription:
            "Prescription Medicine Benefit (PMB) is an optional Perpetual add-on giving card-based access to approved medicines and most vaccines recommended by Centers for Disease Control and Prevention, with unlimited annual transactions. Collect prescriptions easily from the nationwide GlobeMed Lebanon pharmacy network, all connected in real time. Includes Guaranteed Renewability with Chronic Care eligibility (65% coverage), plus just 15% co-insurance on acute medications unless stated otherwise.",
        image: "/images/health-programs/prescription.png",
    },
];
