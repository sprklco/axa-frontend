import { ComparisonData } from "@/components/sections/ComparisonTableSection";

export const corporateMedicalPackagesData: ComparisonData = {
    title: "",
    subtitle: "",
    labelWidthClassName: "w-[180px] md:w-[346px]",
    packageWidthClassName: "w-[160px] md:w-[377px]",
    headerWidthClassName: "w-[140px] md:w-[455px]",
    minWidthClassName: "min-w-[600px] md:min-w-[723px]",
    ctaText: "See complete list of coverage",
    features: [
        { id: "geographic", label: "Geographic coverage" },
        { id: "inHospital", label: "In-Hospital: General Conditions" },
        { id: "financialLimit", label: "Financial Limitation" },
        { id: "otherLimit", label: "Other Limitation (for GR adherents)" },
        { id: "ageLimit", label: "Age Limitation at Enrollment" },
        { id: "excess", label: "Excess/Deductible/Co-Pay/Co-Insurance" },
        { id: "network", label: "Network" },
        { id: "gr", label: "Guaranteed Renewability (GR)" },
        { id: "continuity", label: "Continuity" },
        { id: "internationalAssistance", label: "International Coverage & Assistance" },
        { id: "financialLimitOutside", label: "Financial Limitation (ER outside territory of coverage)" },
        { id: "accessWorldwide", label: "Access to Worldwide Network" },
        { id: "financialLimitMedical", label: "Financial Limitation (Medical Assistance Services) (6)" },
        { id: "benefitsMedical", label: "Benefits - Medical Assistance Services (6):\n1- Medical Emergency Referral\n2- Travel of one Immediate Family Member to stay with the Insured in case of Accident\n3- Escort of minor Child in case of Accident of the Insured\n4- Transport to a properly equipped medical facility in case of Accident\n5- Repatriation to the Country of Residence in case of Accident\n6- Repatriation of Mortal Remains to the Country of Residence" },
    ],
    packages: [
        {
            id: "corporate-tailor-made",
            label: "Corporate business-Tailor made coverage",
            features: {
                geographic: "Lebanon, France",
                inHospital: "", // In Figma this row is just a section header, data cell is empty
                financialLimit: "Unlimited",
                otherLimit: "720 days per lifetime",
                ageLimit: "From 0 to 75",
                excess: false, // In figma it's "-" which translates to false in ComparisonTableSection
                network: "Full",
                gr: "Granted from Day 0 with immediate Effective Date,\nin addition to 180 Days Observation Period to take the appropriate Underwriting decision (Exclusions/Limitations)",
                continuity: "Yes",
                internationalAssistance: "", // Empty data cell in Figma
                financialLimitOutside: "Up to 65,000$ (overseas tariffs)",
                accessWorldwide: "All Classes",
                financialLimitMedical: "Up to 100,000$",
                benefitsMedical: "All Classes",
            },
        },
    ],
};
