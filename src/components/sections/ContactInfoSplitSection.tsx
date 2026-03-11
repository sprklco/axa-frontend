import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

export interface ContactInfoItem {
    id: string;
    title: string;
    descriptionParts: ReadonlyArray<
        | { type: "text"; value: string }
        | { type: "emphasis"; value: string }
    >;
    note?: string;
}

export interface ContactInfoSplitSectionProps {
    heading: string;
    lead: string;
    items: ReadonlyArray<ContactInfoItem>;
    className?: string;
}

export function ContactInfoSplitSection({
    heading,
    lead,
    items,
    className,
}: ContactInfoSplitSectionProps) {
    const first = items[0];

    return (
        <section className={cn("bg-white py-16", className)}>
            <Container>
                <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                    <div className="flex flex-col items-start justify-center gap-3">
                        <h2 className="font-headline text-[48px] font-light leading-[56px] text-[#1a1d21] text-left">
                            {heading}
                        </h2>
                        <p className="font-source-sans text-[18px] leading-[26px] text-[#434956] max-w-[613px]">
                            {lead}
                        </p>
                    </div>

                    {first ? (
                        <div className="flex flex-col items-start">
                            <div className="flex flex-col items-start gap-2">
                                <h3 className="font-headline text-[24px] font-light leading-[32px] text-[#1a1d21]">
                                    {first.title}
                                </h3>
                                <div className="flex flex-col items-start gap-1">
                                    <p className="font-source-sans text-[18px] leading-[26px] text-[#1a1d21] max-w-[460px]">
                                        {first.descriptionParts.map((part, idx) => {
                                            if (part.type === "emphasis") {
                                                return (
                                                    <span
                                                        key={idx}
                                                        className="font-source-sans font-bold text-[#00008f]"
                                                    >
                                                        {part.value}
                                                    </span>
                                                );
                                            }
                                            return <span key={idx}>{part.value}</span>;
                                        })}
                                    </p>
                                    {first.note ? (
                                        <p className="font-source-sans text-[18px] leading-[26px] text-[#1a1d21]">
                                            {first.note}
                                        </p>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </Container>
        </section>
    );
}

