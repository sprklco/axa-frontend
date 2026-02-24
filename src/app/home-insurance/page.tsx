import { SubhomeHeroBanner } from "@/components/sections/SubhomeHeroBanner";
import { ThreeColumnFeatureSection } from "@/components/sections/ThreeColumnFeatureSection";
import {
  HighlightBannersSection,
  type HighlightBanner,
  type HighlightBannerTab,
} from "@/components/sections/HighlightBannersSection";
import { HelpSection } from "@/components/sections/HelpSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";

const homeInsuranceHero = {
  title: "Home Insurance",
  heading: "Protection for the place you call home",
  description:
    "Comprehensive coverage that helps safeguard your property against accidental damage and environmental risks.",
  imageSrc: "/images/home-insurance-hero.png",
} as const;

const understandingHomeInsuranceSection = {
  heading: "Understanding Your Home Insurance",
  description:
    "Home insurance helps protect your property against unexpected damage or loss. Below are key elements that contribute to the value and reliability of your coverage.",
  items: [
    {
      id: "property-protection",
      icon: "home",
      title: "Protection for your property",
      description: "Safeguards your home against unexpected damage or loss.",
    },
    {
      id: "reliable-coverage",
      icon: "cost",
      title: "Reliable coverage at clear cost",
      description:
        "Structured protection with defined benefits and transparent costs.",
    },
    {
      id: "coverage-confidence",
      icon: "shield",
      title: "Confidence in your coverage",
      description:
        "Move forward knowing your property is protected.",
    },
  ],
} as const;

const highlightBanners: HighlightBanner[] = [
  {
    id: "home-contents",
    imageSrc: "/images/home-contents-banner.png",
    imageAlt: "Bright living room with sunlight and cushions on a sofa",
    title: "Home & Contents",
    lead:
      "Home insurance designed to provide defined protection and financial stability when unforeseen events occur.",
    bullets: [
      "Fire & explosion",
      "Earthquake, storm, tempest, flood and other natural perils",
      "Electrical damage to appliances",
      "Water damages and search for the origin of water leakage, including damages to neighbors' apartments whenever your liability is involved",
      "Liability to neighbors & co-owners",
      "Smoke damage",
      "Plate glass breakage",
      "Theft & hold-up",
      "Debris removal & professional fees",
      "Malicious acts, strikes, riots a d civil commotions",
      "Loss of rent or use",
    ],
    ctaLabel: "Download full coverage brochure",
    ctaHref: "#",
  },
  {
    id: "fire-insurance-corporate",
    imageSrc: "/images/fire-insurance-corporate-banner.png",
    imageAlt: "Fire extinguisher stored in a cabinet",
    title: "Fire Insurance - Corporate",
    lead:
      "No matter how careful you are, unexpected incidents such as fire, impacts, and other natural disasters may occur. Whether you are an owner or a tenant, fire insurance is a policy designed to cover and to protect your property and its content from losses due to fire, lighting, explosion and other factors.",
    bullets: [
      "Fire, explosion & lightning",
      "Aircraft or vehicle impact",
      "Neighbors’ liability (up to 100% of construction value)",
      "Burglary (up to 100% of contents value)",
      "Water damage (burst pipes & tank overflow)",
    ],
    optionalHeading: "Optional Coverage Includes:",
    optionalBullets: ["Storm & tempest", "Earthquake", "Flood"],
    ctaLabel: "Download full coverage brochure",
    ctaHref: "#",
  },
];

const highlightBannerTabs: HighlightBannerTab[] = [
  {
    id: "individual",
    label: "Individual",
    banner: highlightBanners[0],
  },
  {
    id: "corporate",
    label: "Corporate",
    banner: highlightBanners[1],
  },
];

const needHelpSection = {
  heading: "Need help?",
  body:
    "If you have any emergency or need more help in the  the quotation process",
  primaryCta: {
    label: "04 - 727 000",
    href: "tel:04727000",
    variant: "primary",
    showPhoneIcon: true,
  },
  secondaryCta: {
    label: "Request a callback",
    href: "#",
    variant: "secondary",
  },
} as const;

export default function HomeInsurancePage() {
  return (
    <main className="flex flex-col flex-1">
      <div className="relative flex flex-col">
        {/* Home Insurance Hero Section - positioned behind navbar, matching motor subhome layout */}
        <div className="-mt-[108px] lg:-mt-[150px]">
          <SubhomeHeroBanner
            title={homeInsuranceHero.title}
            heading={homeInsuranceHero.heading}
            description={homeInsuranceHero.description}
            imageSrc={homeInsuranceHero.imageSrc}
          />
        </div>
        {/* Breadcrumbs - directly under Hero */}
        <div className="bg-white">
          <Container className="py-4 md:py-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Home Insurance" },
              ]}
            />
          </Container>
        </div>
        <ThreeColumnFeatureSection
          heading={understandingHomeInsuranceSection.heading}
          description={understandingHomeInsuranceSection.description}
          items={understandingHomeInsuranceSection.items}
        />
        <HighlightBannersSection tabs={highlightBannerTabs} />
        <HelpSection
          heading={needHelpSection.heading}
          body={needHelpSection.body}
          primaryCta={needHelpSection.primaryCta}
          secondaryCta={needHelpSection.secondaryCta}
        />
      </div> 
    </main>
  );
}

