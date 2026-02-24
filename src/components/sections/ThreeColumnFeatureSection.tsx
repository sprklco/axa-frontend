import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { Home, ShieldCheck, BadgeCheck } from "lucide-react";

type FeatureIconName = "home" | "cost" | "shield";

export interface FeatureItem {
  id: string;
  icon?: FeatureIconName;
  title: string;
  description: string;
}

export interface ThreeColumnFeatureSectionProps {
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly FeatureItem[];
  className?: string;
}

function FeatureIcon({ icon }: { icon?: FeatureIconName }) {
  const baseClasses =
    "flex items-center justify-center rounded-full bg-[#f7f7f8] text-[#00008f]";

  switch (icon) {
    case "home":
      return (
        <div className={cn(baseClasses, "h-[96px] w-[96px]")}>
          <Home className="h-12 w-12" strokeWidth={1.5} />
        </div>
      );
    case "cost":
      return (
        <div className={cn(baseClasses, "h-[96px] w-[96px]")}>
          <BadgeCheck className="h-12 w-12" strokeWidth={1.5} />
        </div>
      );
    case "shield":
      return (
        <div className={cn(baseClasses, "h-[96px] w-[96px]")}>
          <ShieldCheck className="h-12 w-12" strokeWidth={1.5} />
        </div>
      );
    default:
      return (
        <div className={cn(baseClasses, "h-[80px] w-[80px]")}>
          <div className="h-8 w-8 rounded-full border border-[#00008f]/30" />
        </div>
      );
  }
}

export function ThreeColumnFeatureSection({
  eyebrow,
  heading,
  description,
  items,
  className,
}: ThreeColumnFeatureSectionProps) {
  return (
    <section className={cn("bg-white py-12 md:py-16 lg:py-20", className)}>
      <Container className="flex flex-col items-center text-center gap-6">
        {eyebrow && (
          <p className="font-source-sans text-sm font-semibold tracking-[0.1em] text-[#8080c7] uppercase">
            {eyebrow}
          </p>
        )}
        <h2 className="font-brand-text text-[24px] leading-[32px] text-[#1a1d21] md:text-[32px] md:leading-[40px]">
          {heading}
        </h2>
        <p className="font-source-sans text-base leading-6 text-[#1a1d21] md:text-[16px] md:leading-[24px] max-w-[682px]">
          {description}
        </p>

        <div className="mt-8 grid w-full gap-8 md:mt-10 md:grid-cols-3 md:gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-4 rounded-lg px-6 py-8"
            >
              <FeatureIcon icon={item.icon} />
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="font-source-sans text-lg md:text-[20px] md:leading-[28px] text-[#1a1d21]">
                  {item.title}
                </h3>
                <p className="font-source-sans text-sm md:text-base leading-[24px] text-[#434956] max-w-[280px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

