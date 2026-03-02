import { LegalIntroSection } from "@/components/sections/LegalIntroSection";
import {
  OnPageSummaryList,
  type OnPageSummaryItem,
} from "@/components/sections/OnPageSummaryList";
import {
  LegalContentSections,
  type LegalContentSection,
} from "@/components/sections/LegalContentSections";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const privacyIntroSection = {
  title: "Privacy Policy",
  description:
    "AXA Middle East S.A.L (AXA ME) is committed to protecting your privacy and ensuring you have a positive experience on our website. This statement outlines our Privacy Policy pertaining to all personal information handling practices for both online and offline data. If you give us personal information including your contact details and any other information enabling us to identify you and provide you with our services, we will treat it according to this policy.",
} as const;

const privacySummaryItems: OnPageSummaryItem[] = [
  {
    id: "new-policy-renewals",
    label: "New Policy & Renewals",
    targetId: "privacy-section-new-policy-renewals",
  },
  {
    id: "info-we-collect",
    label: "What Information Do We Collect and How?",
    targetId: "privacy-section-info-we-collect",
  },
  {
    id: "info-use",
    label: "What Will the Information We Collect Be Used For?",
    targetId: "privacy-section-info-use",
  },
  {
    id: "personal-rights",
    label: "Your Personal Information and Your Legal Rights",
    targetId: "privacy-section-personal-rights",
  },
  {
    id: "exchange-info",
    label: "Exchange of Information",
    targetId: "privacy-section-exchange-info",
  },
  {
    id: "marketing-use",
    label: "Use of Personal Information for Marketing Purposes",
    targetId: "privacy-section-marketing-use",
  },
  {
    id: "dealing-with-others",
    label: "Dealing with Other People",
    targetId: "privacy-section-dealing-with-others",
  },
  {
    id: "cookies",
    label: "Cookies",
    targetId: "privacy-section-cookies",
  },
] as const;

const privacyContentSections = [
  {
    id: "intro",
    domId: "privacy-section-intro",
    paragraphs: [
      "The use of any of the online services available at this site implies that you accept these terms and conditions. If you do not accept these terms and conditions, please do not access this site or use any of the online services available at this site.",
      "We may revise the Privacy Policy at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we make, as they are bonding on you.",
      "In this privacy statement, “our”, “we” and “us” refer to AXA ME.",
      "The Site is operated by AXA ME; part of the AXA Group. Further details of AXA Insurance are set out in our Web terms of use.",
    ],
  },
  {
    id: "new-policy-renewals",
    domId: "privacy-section-new-policy-renewals",
    heading: "New Policy & Renewals",
    paragraphs: [
      "You have chosen to make an online payment against your insurance policy by credit card. You will be required to enter your credit card details online and we will seek authorization to charge your credit card for the amount selected.",
      "At AXA ME we have ensured that your privacy is not compromised.",
      "All your personal information is sent through a secure ‘pipeline’ between yourself and AXA ME making it unreadable when it is being transmitted.",
    ],
  },
  {
    id: "info-we-collect",
    domId: "privacy-section-info-we-collect",
    heading: "What Information Do We Collect and How?",
    paragraphs: [
      "We collect information strictly in accordance with the international standards of Data Protection. When we collect personal information directly from you, if you ask for a quote or purchase a product or service from us we will do our best to ensure that information is kept up to date and accurate. Please assist us in this by advising us of any changes as soon as possible.",
      "The personal information AXA ME collects through the Website may include details such as your name, e-mail address, postal address, telephone number and date of birth and bank or credit card details.",
      "Personal information is collected by AXA ME on the Website:",
    ],
    bullets: [
      "via enquiry, registration, claim forms, feedback forms;",
      "when you purchase any of our products or services;",
      "through applications;",
      "through feedback forms and web analytics tags; and",
      "when you provide your details to us either online or offline",
    ],
    additionalParagraphs: [
      "We may also use cookies or similar technologies to collect website usage information. For further information, please see the section on Cookies above.",
    ],
  },
  {
    id: "info-use",
    domId: "privacy-section-info-use",
    heading: "What Will the Information We Collect Be Used For?",
    paragraphs: [
      "Your privacy is very important to us and we have designed our Privacy Policy with the objective of maintaining your trust, confidence and respecting your right of protecting your personal information. We will use the information we collect to send you information about our products and services and any other services described in our Website. We will also use your information to manage your insurance with us, including underwriting, claims handling and analytical purposes and to assist us in improving our processes, products and services.",
      "We will also use information collected to safe-guard against fraud and money laundering. We are required to report details of some suspicious activities to the “Security and Investigation Commission” (SIC) of the Central Bank of Lebanon. As well as we may send this information in confidence to companies within the AXA Group and to agents, suppliers, other insurers, or reinsurers who provide services on our behalf. Or we can check your details on World-Check database (process used to screen clients and payees against sanctions lists/requirements)",
      "We do not disclose your information to anyone outside the AXA Group except:",
    ],
    bullets: [
      "Where we have your permission; or",
      "Where we are required or permitted to do so by law; or",
      "To other companies who provide a service to us or you; or",
      "Where we may transfer rights and obligations under this Privacy Policy",
    ],
    additionalParagraphs: [
      "We are constantly striving to improve the quality of our service and the efficiency of our systems and so, from time to time, we may use your personal information during staff training and/or system testing.",
    ],
  },
  {
    id: "personal-rights",
    domId: "privacy-section-personal-rights",
    heading: "Your Personal Information and Your Legal Rights",
    paragraphs: [
      "Your “personal information” means any information that you have given to us, or third parties, in connection with a service or product offered whether through use of this website, by phone, in person or in writing.",
      "We take your privacy very seriously and are committed to protecting your personal information.",
      "When you buy a product or service from us, you will have access to the full terms and conditions of the insurance coverage offered by AXA ME, they are set out in the policy terms and conditions and the legislation governing such policies. In the event of omission of any information from this website, or any contradiction or difference between anything on this website and the policies or applicable legislation, you must treat the policies and applicable legislation as the full and correct statement of not only your insurance coverage, but your rights and obligations at law.",
      "This document should be shown to anyone else who is covered by, or a party to, any services or policies you buy from us. We may make changes to this privacy statement from time to time. Such changes will be effective from the time they appear on the Site. You can check the effective date at the end of document allows you to determine whether there have been changes since the last time you reviewed the policy. Therefore, you should remember to check this privacy statement from time to time.",
    ],
  },
  {
    id: "exchange-info",
    domId: "privacy-section-exchange-info",
    heading: "Exchange of Information",
    paragraphs: [
      "At various times, we will exchange personal information with certain other approved organizations for underwriting and fraud prevention purposes and we may provide such information to others where required or permitted by law. Also, your personal information will sometimes be used and analyzed by us and other companies in the AXA Group for the following purposes:",
    ],
    bullets: [
      "Managing and administering products and services that we supply – in the case of insurance products this will include underwriting, reinsurance and claims handling purposes and may include disclosing your information to other insurers, reinsurers, regulatory authorities or to our agents who provide services on our behalf;",
      "Considering any applications for products you may make and to help in making credit-related decisions about you where appropriate;",
      "Servicing other relationships you may have within the AXA Group",
      "Financial risk assessment, money laundering checks, compliance and regulatory reporting and fraud prevention;",
      "Assisting in making decisions on insurance proposals, other products and any claims made by you, members of your household, and others connected with your insurance proposals and claims; and",
      "Helping us and the AXA Group to develop new and innovative products and services.",
    ],
    additionalParagraphs: [
      "We may send data in confidence for processing to other companies within the AXA Group (or companies acting on their instructions). By entering your details onto our website you are consenting to such use of your personal data.",
      "Disclosure of your information to a third party outside of the AXA Group will only be made where the third party has agreed to keep your personal information strictly confidential and use it only for the specific purpose for which we provide it to them and:",
    ],
    additionalBullets: [
      "It is necessary for the performance of any product/service agreement we have with you;",
      "You have given your consent to the disclosure;",
      "Such disclosure is required or permitted by law;",
      "We are entitled to transfer rights and/or obligations as provided under the terms of any policy you may purchase;",
      "Any such third party provides benefits or services to you under or in connection with any product/service agreement with you; or",
      "It is a credit reference or fraud prevention agency.",
    ],
    closingParagraphs: [
      "Enhancements in technology may result in changes in the way we view, record and use your personal information. If we think the changes could be to your disadvantage, we will advise you, by email and by posting a notice of amendment on the Site, at least 30 days before the changes become effective. If you then continue to use a service or product for a further 60 days we will assume you have consented to the changes.",
    ],
  },
  {
    id: "marketing-use",
    domId: "privacy-section-marketing-use",
    heading: "Use of Personal Information for Marketing Purposes",
    paragraphs: [
      "The information you supply may be used by us, other members of the AXA Group and carefully selected Third Parties for research purposes or to inform you of other products or services that may be of interest to you, unless you have advised us otherwise. On each occasion that we contact you for these purposes, you will always be given the option to opt out of any further communication.",
      "If you have provided your contact information to us and would prefer not to receive marketing information, or to participate in research, simply contact us to let us know.",
    ],
  },
  {
    id: "dealing-with-others",
    domId: "privacy-section-dealing-with-others",
    heading: "Dealing with Other People",
    paragraphs: [
      "If your spouse or partner contacts us on your behalf, due to data protection, we will be unable to answer their queries. However, if you require your spouse, partner or another third party to be able to discuss your policy, please contact AXA ME and inform us of whom you would like to speak on your behalf. However, this will exclude them from being able to cancel the policy as we require speaking to the policyholder regarding cancellations.",
      "We will not reveal any credit or debit card numbers to anyone other than the policyholder.",
    ],
  },
  {
    id: "cookies",
    domId: "privacy-section-cookies",
    heading: "Cookies",
    paragraphs: [
      "A cookie is a piece of information stored on the hard drive of a computer by a web server to enhance and simplify a website user’s experience by identifying a user if he or she has previously accessed that website. Cookies are commonly used on the Internet and cannot harm a user’s computer system.",
      "The cookies used on the Site do not include any information that others could read and understand about you such as your name or any account or policy number. They contain no personal information about you.",
      "Most Internet browsers allow you to turn off the cookie function. If you want to know how to do this please look at the help menu on your browser. However this will restrict the services you can use.",
    ],
  },
] as LegalContentSection[];

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <div className="bg-white">
        <Container className="px-2 md:px-4 lg:px-6 py-4 md:py-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy" },
            ]}
          />
        </Container>
      </div>
      <LegalIntroSection
        title={privacyIntroSection.title}
        description={privacyIntroSection.description}
      />
      <Container className="px-2 md:px-4 lg:px-6 pb-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-12">
          <div className="w-full max-w-[360px] lg:w-[280px] lg:sticky lg:top-[160px] lg:-ml-4">
            <OnPageSummaryList items={privacySummaryItems} />
          </div>
          <div className="flex-1">
            <LegalContentSections sections={privacyContentSections} />
          </div>
        </div>
      </Container>
    </main>
  );
}

