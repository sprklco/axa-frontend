import { LegalIntroSection } from "@/components/sections/LegalIntroSection";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  OnPageSummaryList,
  type OnPageSummaryItem,
} from "@/components/sections/OnPageSummaryList";
import {
  LegalContentSections,
  type LegalContentSection,
} from "@/components/sections/LegalContentSections";

const legalIntroSection = {
  title: "Legal",
  description:
    "These are the terms and conditions which apply to your use of this website. Please read them carefully. By proceeding with access to the Website you are deemed to have accepted the Terms and Conditions. If you do not agree with the Terms and Conditions, then please refrain from accessing or using the Website. We may revise the Terms and Conditions of Use at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we make, as they are binding on you.",
} as const;

const legalSummaryItems: OnPageSummaryItem[] = [
  {
    id: "general",
    label: "General",
    targetId: "legal-section-general",
  },
  {
    id: "availability",
    label: "Availability",
    targetId: "legal-section-availability",
  },
  {
    id: "information",
    label: "Information",
    targetId: "legal-section-information",
  },
  {
    id: "security",
    label: "Security",
    targetId: "legal-section-security",
  },
  {
    id: "liability",
    label: "Liability",
    targetId: "legal-section-liability",
  },
  {
    id: "trademarks",
    label: "Trademarks, Copyright and Other Intellectual Property Rights",
    targetId: "legal-section-trademarks",
  },
  {
    id: "linking",
    label: "Linking to the Website",
    targetId: "legal-section-linking",
  },
  {
    id: "offences",
    label: "Offences",
    targetId: "legal-section-offences",
  },
] as const;

const legalContentSections: LegalContentSection[] = [
  {
    id: "general",
    domId: "legal-section-general",
    heading: "General",
    paragraphs: ["The Website is provided by AXA Middle East S.A.L (AXA ME) whose registered office is at AXA Middle East building, Jal el Dib highway, Metn. Registered Company number 34145 Beirut."
      ,"Some of the information available on the Website has been provided by other companies within the AXA Group. Separate terms and conditions govern that information and these terms and conditions are available when you access the relevant pages within the websites of those companies."
      ,"The Website may also contain hypertext or other links to websites operated by other third parties. The responsibility for those websites belongs to the third parties who are identified as operating those websites. Separate terms and conditions will apply to those websites and you are encouraged to read those if you access those links."
    ],
  },
  {
    id: "availability",
    domId: "legal-section-availability",
    heading: "Availability",
    paragraphs: ["AXA ME will endeavor to ensure that the Website is accessible for 24 hours a day but will not be liable if‚ for any reason‚ the Website is unavailable for any time or for any period. AXA ME will have the right to suspend access to or withdraw this website temporarily or permanently and without notice."
      ,"AXA ME will not be liable for any loss or damage arising in contract‚ tort or otherwise if the Website is unavailable or suspended for any reason."
    ],
  },
  {
    id: "information",
    domId: "legal-section-information",
    heading: "Information",
    paragraphs: ["The information contained on the Website is provided for information purposes only and AXA ME will use reasonable care and skill to ensure that it is accurate at the date of publication. However‚ because of the nature of the Internet‚ there may be circumstances in which errors occur within the information."
      ,"Consequently, AXA ME makes no warranty or guarantee as to the accuracy of any information on the Website and cannot accept liability for any errors or omissions within it."
    ],
  },
  {
    id: "security",
    domId: "legal-section-security",
    heading: "Security",
    paragraphs: ["AXA ME will take all reasonable steps to ensure that any information you provide via e-mail and / or via the Website is kept secure‚ but please remember that‚ because of the nature of the Internet‚ the security of emails cannot be guaranteed. Consequently, your privacy of your data in such email correspondence cannot be guaranteed. There is no guarantee that any emails that you send to us will be received by us."
      ,"We process information about you in accordance with our Privacy Statement. By using the Website, you consent to such processing and you warrant that all data provided by you is accurate."
      ,"Additional information regarding the security of personal data‚ and the use of cookies is available in our Privacy Statement."
    ],
  },
  {
    id: "liability",
    domId: "legal-section-liability",
    heading: "Liability",
    paragraphs: ["AXA ME shall not be liable for any loss of use, profits, savings or data or any indirect, special or consequential damages or losses, whether such losses arise in contract, negligence or tort, including without limitation, any losses in relation to your use of, reliance upon or inability to use the Website."
      ,"AXA ME cannot warrant that the Website is free of viruses or technical defects of any description‚ and accepts no responsibility for any technical problems arising from your use of the Website."
      ,"We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of the Website or to your downloading of any material posted on it or on any website linked to it."
      ,"We will not be liable for any loss or damage caused by malicious or harmful material that may infect your computer, your computer equipment, computer programs, data or other proprietary material as a result of your use of the Website or as a result of you downloading any material posted on them or downloading any material from any website linked to them."
    ],
  },
  {
    id: "trademarks",
    domId: "legal-section-trademarks",
    heading: "Trademarks, Copyright and Other Intellectual Property Rights",
    paragraphs: ["The AXA logo is a registered trademark of AXA S.A. which claims trademark rights in the logo. AXA ME owns the copyright and all other intellectual property rights existing on or within the Website. Nothing on this website grants you any right or license to use any of the Marks."
      ,"You are not permitted to download‚ print‚ redistribute or extract any information from the Website other than for your personal‚ non-commercial use and not for any purpose that damages our reputation or takes advantage of it."
      ,"You are not permitted to modify or reproduce, or copy, or in any way change any of the information available on the Website. You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text."
    ],
  },
  {
    id: "linking",
    domId: "legal-section-linking",
    heading: "Linking to the Website",
    paragraphs: ["You may link to the Website, provided you do so in a way that is fair and legal does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists."
      ,"The Website must not be framed on any other website, nor may you create a link to any part of our website other than the Website."
    ],
  },
  {
    id: "offences",
    domId: "legal-section-offences",
    heading: "Offences",
    paragraphs: ["You must not misuse the Website by knowingly introducing viruses, trojans, worms or other material which is malicious or harmful. You must not attempt to gain unauthorized access to the Website, the server on which the Website is stored or any server, computer or database connected to the Website."],
  },
];

export default function LegalPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <div className="bg-white">
        <Container className="px-2 md:px-4 lg:px-6 py-4 md:py-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Legal" },
            ]}
          />
        </Container>
      </div>

      <LegalIntroSection
        title={legalIntroSection.title}
        description={legalIntroSection.description}
      />
      <Container className="px-2 md:px-4 lg:px-6 pb-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-12">
          <div className="w-full max-w-[360px] lg:w-[280px] lg:sticky lg:top-[160px] lg:-ml-4">
            <OnPageSummaryList items={legalSummaryItems} />
          </div>
          <div className="flex-1">
            <LegalContentSections sections={legalContentSections} />
          </div>
        </div>
      </Container>
    </main>
  );
}

