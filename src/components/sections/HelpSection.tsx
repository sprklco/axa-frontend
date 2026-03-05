import { Container } from "@/components/layout/Container";
import { Button, type ButtonVariant } from "@/components/ui/CTAButton";
import { cn } from "@/lib/cn";
import { Phone } from "lucide-react";

export interface HelpSectionCta {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  showPhoneIcon?: boolean;
  onClick?: () => void;
}

export interface HelpSectionProps {
  heading: string;
  body: string;
  primaryCta: HelpSectionCta;
  secondaryCta?: HelpSectionCta;
  className?: string;
}

export function HelpSection({
  heading,
  body,
  primaryCta,
  secondaryCta,
  className,
}: HelpSectionProps) {
  return (
    <section className={cn("bg-white py-12 md:py-16 lg:py-20", className)}>
      <Container className="flex flex-col items-center text-center gap-3">
        <h2 className="font-brand-text text-[32px] leading-[40px] font-bold text-[#00008f]">
          {heading}
        </h2>
        <p className="font-source-sans text-[14px] leading-[22px] text-[#00008f] md:text-[16px] md:leading-[24px]">
          {body}
        </p>

        <div className="mt-4 flex flex-col items-center gap-3 md:flex-row md:gap-4">
          <Button
            variant={primaryCta.variant ?? "primary"}
            size="md"
            href={primaryCta.href}
            onClick={primaryCta.onClick}
            icon={
              primaryCta.showPhoneIcon ? (
                <Phone className="h-4 w-4" aria-hidden="true" />
              ) : undefined
            }
          >
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button
              variant={secondaryCta.variant ?? "secondary"}
              size="md"
              href={secondaryCta.href}
              onClick={secondaryCta.onClick}
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

