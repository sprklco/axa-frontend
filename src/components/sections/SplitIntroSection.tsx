import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

export interface SplitIntroSectionProps {
  title: string;
  description?: string;
  className?: string;
}

export function SplitIntroSection({
  title,
  description,
  className,
}: SplitIntroSectionProps) {
  return (
    <section className={cn("bg-white py-12 md:py-16 lg:py-20", className)}>
      <Container
        className={cn(
          "flex flex-col gap-6",
          "lg:flex-row lg:items-end lg:gap-[85px] lg:justify-center"
        )}
      >
        <div className="inline-grid shrink-0">
          <div className="col-start-1 row-start-1 h-[48px] w-[56px] md:h-[60px] md:w-[70px] lg:h-[75.43px] lg:w-[88px]">
            <svg
              viewBox="0 0 88 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M61.2239 0H88L26.7761 75.4286H0L61.2239 0Z"
                fill="#FF1721"
              />
            </svg>
          </div>
          <h1
            className={cn(
              "col-start-1 row-start-1 self-end",
              "ml-[56px] md:ml-[70px] lg:ml-[88px]",
              "font-headline font-light text-[32px] leading-[40px] tracking-[-1px]",
              "md:text-[48px] md:leading-[56px] md:tracking-[-1.5px]",
              "lg:text-[64px] lg:leading-[72px]",
              "text-[var(--text-primary)] whitespace-nowrap"
            )}
          >
            {title}
          </h1>
        </div>

        {description ? (
          <p
            className={cn(
              "font-source-sans text-base leading-[22px] text-[var(--text-secondary)]",
              "md:text-[16px] md:leading-[24px]",
              "lg:text-[18px] lg:leading-[26px] lg:max-w-[482px]"
            )}
          >
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
