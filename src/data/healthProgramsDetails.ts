export interface ProgramDetail {
    id: string;
    title: string;
    count?: number;
    /** Optional introductory paragraph displayed before items */
    intro?: string;
    items: string[];
    /** Whether items are rendered as bullet points (true) or numbered list (false/undefined) */
    bulletPoints?: boolean;
}

export interface ProgramsCategory {
    id: string;
    label: string;
    programs: ProgramDetail[];
}

export const healthProgramsCategories: ProgramsCategory[] = [
    {
        id: "individual",
        label: "Individual",
        programs: [
            {
                id: "perpetual-program",
                title: "Perpetual program",
                count: 31,
                items: [
                    "Full network coverage in Lebanon,France and MENA region",
                    "Class of cover: Luxe, First, Second and Semi-private",
                    "International coverage for emergency cases only",
                    "720 hospitalization days per lifetime",
                    "Unlimited financial coverage.",
                    "Guaranteed renewability (GR) is granted after 180 days Observation Period for insured with all ages",
                    "Medical expenses resulting from emergency cases and accidents including work related accidents.",
                    "Endoscopic and surgical procedures.",
                    "Prosthesis related to post traumatic accidents without financial limitation and up to USD30,000 if due to an illness including coronary stents.",
                    "Organ transplantation to Insured Receiver including Bone Marrow Transplantation are limited as per class of coverage: up to USD 100,000 for Class A, USD 80,000 for Class B and USD 60,000 for Class SP per case per lifetime",
                    "Acute renal failure(first 3 sessions only)",
                    "Physiotherapy treatment related to a covered hospitalization.",
                    "Maternity benefits even if husband is not insured under same policy as of the first renewal including delivery, medically mandated abortion, miscarriage, complication of maternity and epidural are covered unlimited",
                    "Free of charge baby",
                    "Incubator and boarding cost are covered unlimited",
                    "Congenital cases for Globemed baby",
                    "Radiotherapy treatment including linear accelerator and chemotherapy.",
                    "Prosigna & Oncotype DX as genetic cancer tests are only covered",
                    "Breast surgery including complications,follow up and re-construction within 6 months is covered up to 5000$ per breast including cost of prosthesis",
                    "Home care benefits.",
                    "Parental accommodation",
                    "Morbid Obesity",
                    "Sexually transmitted disease",
                    "Sleep Disorder Treatments and Polysomnography",
                    "In-Hospital treatment of psychotic disorders :only schizophrenia and bipolar affective disorders  are covered strictly at a Participating Healthcare Provider subject to Medical Necessity up to 30 days per",
                    "Infertility (Coelioscopy, Hysteroscopy)",
                    "Hazardous sport",
                    "Parkinson treatment",
                    "Rehabilitation in case of Post Cerebro-Vascular Accident and Post Cardio-Vascular Accident",
                    "Passive war",
                    "Morgue and burial expenses up to USD2,000 if the insured dies at the hospital.",
                ],
            },
            {
                id: "ambulatory-benefit",
                title: "Ambulatory Benefit Plan",
                items: [
                    "Doctor consultations and specialist visits",
                    "Laboratory and diagnostic tests",
                    "Prescribed medications",
                    "Physiotherapy sessions",
                    "Dental and optical coverage options",
                ],
            },
            {
                id: "prescription-medicine",
                title: "Prescription Medicine Benefit Plan",
                count: 7,
                items: [
                    "Coverage for prescribed medications",
                    "Access to a wide network of pharmacies",
                    "Generic and brand-name drug coverage",
                    "Chronic disease medication support",
                    "Prescription renewal services",
                    "Mail-order pharmacy options",
                    "Specialty drug coverage",
                ],
            },
            {
                id: "health-protect",
                title: "Health Protect program",
                count: 26,
                items: [
                    "Comprehensive health protection coverage",
                    "Hospitalization and surgical benefits",
                    "Emergency medical treatment",
                    "Diagnostic and laboratory services",
                    "Specialist consultations",
                    "Mental health support",
                    "Rehabilitation services",
                    "Maternity and newborn care",
                    "Oncology treatment coverage",
                    "Chronic disease management",
                    "Dental care benefits",
                    "Optical care coverage",
                    "Preventive health screenings",
                    "Vaccination coverage",
                    "Home nursing care",
                    "Medical equipment coverage",
                    "Second medical opinion",
                    "Telemedicine services",
                    "International emergency coverage",
                    "Organ transplant benefits",
                    "Physical therapy",
                    "Speech therapy",
                    "Occupational therapy",
                    "Nutritional counseling",
                    "Alternative medicine options",
                    "Wellness program access",
                ],
            },
        ],
    },
    {
        id: "corporate",
        label: "Corporate",
        programs: [
            {
                id: "corporate-overview",
                title: "Corporate Medical Insurance",
                intro: "Our plans for corporate business are tailored made based on the employer\nneeds in coverage, benefits , limits and network",
                bulletPoints: true,
                items: [
                    "Guaranteed renewability (GR) is granted after 180 days Observation Period for insured with all ages",
                    "Medical expenses resulting from emergency cases and accidents including work related accidents.",
                    "Endoscopic and surgical procedures.",
                    "Prosthesis related to post traumatic accidents and due to illness",
                    "Organ transplantation to Insured Receiver including Bone Marrow Transplantation",
                    "Acute renal failure(first 3 sessions only)",
                    "Physiotherapy treatment related to a covered hospitalization.",
                    "Maternity benefits including delivery, medically mandated abortion, miscarriage,complication of maternity and epidural are covered unlimited",
                    "Incubator and boarding cost",
                    "Congenital cases for Globemed baby",
                    "Radiotherapy treatment including linear accelerator and chemotherapy.",
                    "Breast surgery  including complications,follow up and re-construction within 6 months is covered up to 5000$ per breast including cost of prosthesis",
                    "Prosigna & Oncotype DX as genetic cancer tests are only covered",
                    "Home care benefits.",
                    "Morbid Obesity",
                    "Sexually transmitted disease",
                    "Sleep Disorder Treatments and Polysomnography",
                    "In-Hospital treatment of Mental or Psychiatric Disorders",
                    "Infertility (Coelioscopy, Hysteroscopy)",
                    "Hazardous sport",
                    "Parkinson treatment",
                    "Rehabilitation  in case of Post Cerebro-Vascular Accident and Post Cardio-Vascular Accident",
                    "Passive war",
                    "Morgue and burial expenses up to USD2,000 if the insured dies at the hospital.",
                ],
            },
            {
                id: "corporate-ambulatory",
                title: "Ambulatory Benefit Plan",
                items: [
                    "Doctor consultations and specialist visits",
                    "Laboratory and diagnostic tests",
                    "Prescribed medications",
                    "Physiotherapy sessions",
                    "Dental and optical coverage options",
                ],
            },
            {
                id: "corporate-prescription",
                title: "Prescription Medicine Benefit Plan",
                count: 7,
                items: [
                    "Coverage for prescribed medications",
                    "Access to a wide network of pharmacies",
                    "Generic and brand-name drug coverage",
                    "Chronic disease medication support",
                    "Prescription renewal services",
                    "Mail-order pharmacy options",
                    "Specialty drug coverage",
                ],
            },
            {
                id: "corporate-health-protect",
                title: "Health Protect program",
                count: 26,
                items: [
                    "Comprehensive corporate health protection",
                    "Employee hospitalization and surgical benefits",
                    "Emergency medical treatment for staff",
                    "Group diagnostic and laboratory services",
                    "Specialist consultations for employees",
                    "Employee mental health support",
                    "Rehabilitation services",
                    "Maternity and newborn care",
                    "Oncology treatment coverage",
                    "Chronic disease management",
                    "Group dental care benefits",
                    "Group optical care coverage",
                    "Preventive health screenings",
                    "Vaccination coverage",
                    "Home nursing care",
                    "Medical equipment coverage",
                    "Second medical opinion",
                    "Telemedicine services",
                    "International emergency coverage",
                    "Organ transplant benefits",
                    "Physical therapy",
                    "Speech therapy",
                    "Occupational therapy",
                    "Nutritional counseling",
                    "Alternative medicine options",
                    "Wellness program access",
                ],
            },
        ],
    },
];

/**
 * Maps category IDs to their sidebar tab labels.
 * Individual uses program titles directly.
 * Corporate uses "Program overview" for the first tab.
 */
export const corporateSidebarLabels: Record<string, string> = {
    "corporate-overview": "Program overview",
};
