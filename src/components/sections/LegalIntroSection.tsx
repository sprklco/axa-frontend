import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

export interface LegalIntroSectionProps {
  title: string;
  description: string;
  className?: string;
}

export function LegalIntroSection({
  title,
  description,
  className,
}: LegalIntroSectionProps) {
  return (
    <section className={cn("bg-white py-12 md:py-16 lg:py-20", className)}>
      <Container className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-end justify-center gap-4">
          <div aria-hidden="true" className="h-[75.4286px] w-[88px]">
            <svg
              width="88"
              height="75.4286"
              viewBox="0 0 88 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block h-full w-full"
            >
              <path
                d="M61.2239 0H88L26.7761 75.4286H0L61.2239 0Z"
                fill="#FF1721"
              />
            </svg>
          </div>
          <h1 className="font-headline text-[40px] font-normal leading-[48px] tracking-[-1.5px] text-[#1a1d21] md:text-[56px] md:leading-[64px] lg:text-[64px] lg:leading-[72px]">
            {title}
          </h1>
        </div>

        <p className="font-source-sans text-base leading-6 text-[#434956] md:text-lg md:leading-8 lg:text-[24px] lg:leading-[32px] lg:max-w-[970px]">
          {description}
        </p>
      </Container>
    </section>
  );
}

