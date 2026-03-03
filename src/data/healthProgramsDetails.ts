export interface ProgramDetail {
    id: string;
    title: string;
    /** Optional introductory paragraph displayed before items */
    intro?: string;
    items: string[];
    /** Whether items are rendered as bullet points (true) or numbered list (false/undefined) */
    bulletPoints?: boolean;
}

/** A group of related programs — parent tab with optional child sub-tabs */
export interface ProgramGroup {
    id: string;
    /** Parent tab title, e.g. "Perpetual program" */
    title: string;
    /** The parent program's own detail content */
    detail: ProgramDetail;
    /** Child sub-tabs nested under this parent */
    subTabs: ProgramDetail[];
}

export interface ProgramsCategory {
    id: string;
    label: string;
    groups: ProgramGroup[];
}

export const healthProgramsCategories: ProgramsCategory[] = [
    {
        id: "individual",
        label: "Individual",
        groups: [
            {
                id: "perpetual-group",
                title: "Perpetual program",
                detail: {
                    id: "perpetual-program",
                    title: "Perpetual program",
                    items: [
                        "Full network coverage in Lebanon, France and MENA region",
                        "Class of cover: Luxe, First, Second and Semi-private",
                        "International coverage for emergency cases only",
                        "720 hospitalization days per lifetime",
                        "Unlimited financial coverage",
                        "Guaranteed renewability (GR) is granted after 180 days Observation Period for insured with all ages",
                        "Medical expenses resulting from emergency cases and accidents including work related accidents",
                        "Endoscopic and surgical procedures",
                        "Prosthesis related to post traumatic accidents without financial limitation and up to USD30,000 if due to an illness including coronary stents",
                        "Organ transplantation to Insured Receiver including Bone Marrow Transplantation are limited as per class of coverage: up to USD 100,000 for Class A, USD 80,000 for Class B and USD 60,000 for Class SP per case per lifetime",
                        "Acute renal failure (first 3 sessions only)",
                        "Physiotherapy treatment related to a covered hospitalization",
                        "Maternity benefits even if husband is not insured under same policy as of the first renewal including delivery, medically mandated abortion, miscarriage, complication of maternity and epidural are covered unlimited",
                        "Free of charge baby",
                        "Incubator and boarding cost are covered unlimited",
                        "Congenital cases for Globemed baby",
                        "Radiotherapy treatment including linear accelerator and chemotherapy",
                        "Prosigna & Oncotype DX as genetic cancer tests are only covered",
                        "Breast surgery including complications, follow up and re-construction within 6 months is covered up to USD5,000 per breast including cost of prosthesis",
                        "Home care benefits",
                        "Parental accommodation",
                        "Morbid Obesity",
                        "Sexually transmitted disease",
                        "Sleep Disorder Treatments and Polysomnography",
                        "In-Hospital treatment of psychotic disorders: only schizophrenia and bipolar affective disorders are covered strictly at a Participating Healthcare Provider subject to Medical Necessity up to 30 days per",
                        "Infertility (Coelioscopy, Hysteroscopy)",
                        "Hazardous sport",
                        "Parkinson treatment",
                        "Rehabilitation in case of Post Cerebro-Vascular Accident and Post Cardio-Vascular Accident",
                        "Passive war",
                        "Morgue and burial expenses up to USD2,000 if the insured dies at the hospital",
                    ],
                },
                subTabs: [
                    {
                        id: "ambulatory-benefit",
                        title: "Ambulatory Benefit Plan",
                        intro: "The Ambulatory Plan is an optional rider to the Perpetual. It covers diagnostic tests, CT scan, MRI, physiotherapy, X-RAYS, etc. performed on an out-of-hospital basis.",
                        items: [
                            "The insured patient may use any laboratory, diagnostic or physiotherapy center within our network after consulting his/her attending physician",
                            "The ambulatory network is directly linked to our network server thereby giving immediate access to the coverage and medical tests information database",
                            "Entitlement to unlimited transactions per year",
                            "The insured patient will be required to pay 15% coinsurance of the services cost unless otherwise stipulated in the policy",
                        ],
                    },
                    {
                        id: "prescription-medicine",
                        title: "Prescription Medicine Benefit Plan",
                        intro: "The Prescription Medicine Benefit Plan (PMB) is an optional rider to the Perpetual program.",
                        items: [
                            "With your magnetic access card, you can get your prescribed medicines from the nearest pharmacy in the network",
                            "Cover for medications registered and approved by the Lebanese Ministry of Health and prescribed by your attending physician",
                            "Entitlement to unlimited transactions per year",
                            "Coverage for the great majority of vaccines recommended by the United States Centers for Disease Control and Prevention (CDC)",
                            "Easy access to the extensive GlobeMed Lebanon network of pharmacies strategically located throughout Lebanon, all of which are connected to our network",
                            "Eligibility to benefit from the Guaranteed Renewability feature, which entitles you to the Chronic Care program. Coverage @ 65% for medication of chronic illnesses such as: diabetes, hypertension, etc",
                            "The insured patient will contribute in 15% co-insurance of the acute medication cost unless otherwise stipulated in the policy",
                        ],
                    },
                    {
                        id: "doctor-consultation",
                        title: "Doctor Consultation Benefit Plan",
                        intro: "The MD Plan is an optional rider to the perpetual program.",
                        items: [
                            "It covers physicians' consultation fees for clinic visits",
                            "Surgery acts performed in the clinic",
                            "In-clinic diagnostic services (i.e. Echography, EKG, covered at 85% under the Ambulatory Plan)",
                            "Vaccines performed in the clinic (covered at 85% under the PMB Plan)",
                            "10 transactions insured per year",
                        ],
                    },
                ],
            },
            {
                id: "health-protect-group",
                title: "Health Protect program",
                detail: {
                    id: "health-protect",
                    title: "Health Protect program",
                    items: [
                        "Limited network coverage in Lebanon only excluding CMC, KMC, SGO, and Rizk/Saint-John",
                        "Class of cover: class First, Second and Semi-private",
                        "720 hospitalization days per lifetime",
                        "Unlimited financial coverage",
                        "Guaranteed renewability (GR) is granted after 180 days Observation Period for insured with all ages",
                        "Medical expenses resulting from emergency cases and accidents including work related accidents",
                        "Endoscopic and surgical procedures",
                        "Prosthesis related to post traumatic accidents without financial limitation and up to USD30,000 per admission with sub-limit per procedure per admission if due to an illness",
                        "Organ transplantation to Insured Receiver including Bone Marrow Transplantation are limited as per class of coverage: up to USD100,000 for Class A, USD 0,000 for Class B and USD60,000 for Class SP per case per lifetime",
                        "Acute renal failure (first 3 sessions only)",
                        "Physiotherapy treatment related to a covered hospitalization",
                        "Maternity benefits even if husband is not insured under same policy as of the first renewal including delivery, medically mandated abortion, miscarriage and epidural unlimited. Complications of maternity are covered after 2 months up to USD2,500",
                        "Free of charge baby",
                        "Incubator and boarding cost are covered up to USD25,000 per baby per year",
                        "Congenital cases for Globemed baby",
                        "Radiotherapy treatment including linear accelerator and chemotherapy",
                        "Prosigna & Oncotype DX as genetic cancer tests are only covered once and up to USD1,000 per person per year",
                        "Breast surgery including complications, follow up and re-construction within 6 months is covered up to USD5,000 per breast including cost of prosthesis",
                        "Morbid Obesity",
                        "Sexually transmitted disease",
                        "Sleep Disorder Treatments and Polysomnography",
                        "In-Hospital treatment of psychotic disorders: only schizophrenia and bipolar affective disorders are covered strictly at a Participating Healthcare Provider subject to Medical Necessity up to 30 days per",
                        "Infertility (Coelioscopy, Hysteroscopy) up to USD3,000 under IN and Amb combined",
                        "Parkinson treatment",
                        "Passive war",
                        "Morgue and burial expenses up to USD2,000 if the insured dies at the hospital",
                    ],
                },
                subTabs: [
                    {
                        id: "health-protect-ambulatory",
                        title: "Ambulatory Benefit Plan",
                        intro: "The Ambulatory Plan is an optional rider limited to USD2,000 per person per year. It covers diagnostic tests, CT scan, MR, X-RAYS, etc. The physiotherapy, laser and Kinesitherapy are limited up to 16 sessions per person per year.",
                        items: [
                            "The insured patient may use any laboratory, diagnostic or physiotherapy center within our network excluding CMC, KMC, SGO, and Rizk/Saint-John after consulting his/her attending physician",
                            "The ambulatory network is directly linked to our network server thereby giving immediate access to the coverage and medical tests information database",
                            "Entitlement to unlimited transactions per year",
                            "The insured patient will be required to pay 15% coinsurance of the services",
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "corporate",
        label: "Corporate",
        groups: [
            {
                id: "corporate-perpetual-group",
                title: "Corporate Medical Insurance",
                detail: {
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
                subTabs: [
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
                ],
            },
            {
                id: "corporate-health-protect-group",
                title: "Health Protect program",
                detail: {
                    id: "corporate-health-protect",
                    title: "Health Protect program",
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
                subTabs: [
                    {
                        id: "corporate-health-protect-ambulatory",
                        title: "Ambulatory Benefit Plan",
                        items: [
                            "Doctor consultations and specialist visits",
                            "Laboratory and diagnostic tests",
                            "Prescribed medications",
                            "Physiotherapy sessions",
                            "Dental and optical coverage options",
                        ],
                    },
                ],
            },
        ],
    },
];
