import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

export type InfoCardInlinePart =
    | { type: "text"; value: string }
    | { type: "link"; value: string; href: string }
    | { type: "emphasis"; value: string };

export interface InfoCardData {
    id: string;
    title: string;
    lines: ReadonlyArray<{ id: string; parts: ReadonlyArray<InfoCardInlinePart> }>;
    icon?: React.ReactNode;
    className?: string;
}

export interface InfoCardsSectionProps {
    heading: string;
    cards: ReadonlyArray<InfoCardData>;
    className?: string;
}

function InlineParts({ parts }: { parts: ReadonlyArray<InfoCardInlinePart> }) {
    return (
        <>
            {parts.map((part, idx) => {
                if (part.type === "link") {
                    return (
                        <Link
                            key={`${part.href}-${idx}`}
                            href={part.href}
                            className="font-source-sans text-[16px] leading-[24px] underline decoration-solid [text-decoration-skip-ink:none] text-[#00008f]"
                        >
                            {part.value}
                        </Link>
                    );
                }
                if (part.type === "emphasis") {
                    return (
                        <span
                            key={`${part.value}-${idx}`}
                            className="font-source-sans text-[16px] font-semibold leading-[24px] text-[#00008f]"
                        >
                            {part.value}
                        </span>
                    );
                }
                return <span key={`${part.value}-${idx}`}>{part.value}</span>;
            })}
        </>
    );
}

export function InfoCardsSection({ heading, cards, className }: InfoCardsSectionProps) {
    const shownCards = cards.slice(0, 6);

    return (
        <section className={cn("bg-[#f7f7f8] py-16", className)}>
            <Container className="flex flex-col items-center gap-16">
                <h2 className="w-full text-center font-headline text-[48px] font-light leading-[56px] text-[#1a1d21]">
                    {heading}
                </h2>

                <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {shownCards.map((card) => (
                        <div
                            key={card.id}
                            className={cn(
                                "w-full max-w-[410.5px] rounded-[8px] bg-white p-6",
                                card.className
                            )}
                        >
                            <p className="font-source-sans text-[24px] leading-[32px] text-[#1a1d21]">
                                {card.title}
                            </p>

                            <div className="mt-4 flex flex-col gap-2">
                                {card.lines.map((line) => (
                                    <p
                                        key={line.id}
                                        className="font-source-sans text-[18px] leading-[26px] text-[#1a1d21]"
                                    >
                                        {card.icon ? (
                                            <span className="mr-2 inline-flex h-[14px] w-[14px] items-center justify-center align-[-2px] text-[#00008f]">
                                                {card.icon}
                                            </span>
                                        ) : null}
                                        <InlineParts parts={line.parts} />
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

