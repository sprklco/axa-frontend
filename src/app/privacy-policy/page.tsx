import { LegalIntroSection } from "@/components/sections/LegalIntroSection";

const privacyIntroSection = {
  title: "Privacy Policy",
  description:
    "AXA Middle East S.A.L (AXA ME) is committed to protecting your privacy and ensuring you have a positive experience on our website. This statement outlines our Privacy Policy pertaining to all personal information handling practices for both online and offline data. If you give us personal information including your contact details and any other information enabling us to identify you and provide you with our services, we will treat it according to this policy.",
} as const;

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LegalIntroSection
        title={privacyIntroSection.title}
        description={privacyIntroSection.description}
      />
    </main>
  );
}

