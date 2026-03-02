import { cn } from "@/lib/cn";

export interface LegalContentSection {
  id: string;
  domId: string;
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
  /** Optional paragraphs rendered after the first bullet list. */
  additionalParagraphs?: string[];
  /** Optional second bullet list rendered after additionalParagraphs. */
  additionalBullets?: string[];
  /** Optional trailing paragraphs rendered at the end of the section. */
  closingParagraphs?: string[];
}

export interface LegalContentSectionsProps {
  sections: LegalContentSection[];
  className?: string;
}

export function LegalContentSections({
  sections,
  className,
}: LegalContentSectionsProps) {
  if (!sections.length) return null;

  return (
    <section className={cn("flex flex-col gap-12", className)}>
      {sections.map((section) => (
        <article
          key={section.id}
          id={section.domId}
          aria-labelledby={`${section.domId}-heading`}
          className="flex flex-col"
        >
          {section.heading && (
            <h2
              id={`${section.domId}-heading`}
              className="mb-4 font-source-sans text-[20px] font-semibold leading-[28px] text-[#1a1d21]"
            >
              {section.heading}
            </h2>
          )}

          {section.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-source-sans text-[18px] leading-[26px] text-[#434956] whitespace-pre-line"
            >
              {paragraph}
            </p>
          ))}

          {section.bullets && section.bullets.length > 0 && (
            <ul className="list-disc space-y-1 pl-7">
              {section.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="font-source-sans text-[18px] leading-[26px] text-[#434956] whitespace-pre-line"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {section.additionalParagraphs &&
            section.additionalParagraphs.map((paragraph, index) => (
              <p
                key={`after-${section.id}-${index}`}
                className="font-source-sans text-[18px] leading-[26px] text-[#434956] whitespace-pre-line"
              >
                {paragraph}
              </p>
            ))}

          {section.additionalBullets && section.additionalBullets.length > 0 && (
            <ul className="list-disc space-y-1 pl-7">
              {section.additionalBullets.map((bullet) => (
                <li
                  key={`extra-${bullet}`}
                  className="font-source-sans text-[18px] leading-[26px] text-[#434956] whitespace-pre-line"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {section.closingParagraphs &&
            section.closingParagraphs.map((paragraph, index) => (
              <p
                key={`closing-${section.id}-${index}`}
                className="font-source-sans text-[18px] leading-[26px] text-[#434956] whitespace-pre-line"
              >
                {paragraph}
              </p>
            ))}
        </article>
      ))}
    </section>
  );
}

