import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import type { StrategyCard } from "@/types/sustainability";

export interface StrategyCardsSectionProps {
    eyebrow: string;
    heading: string;
    subtitle: string;
    cards: StrategyCard[];
    className?: string;
}

function CardContent({ card }: { card: StrategyCard }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <p className="font-source-sans text-[20px] leading-[28px] text-[#606776]">
                {card.label}
            </p>

            {/* Multi-line title (e.g. "What is unsustainable / will become uninsurable.") */}
            {card.titleLines && (
                <div className="font-headline text-[48px] font-light leading-[56px] text-[#1a1d21]">
                    {card.titleLines.map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
            )}

            {/* Stat value + suffix on one line */}
            {card.statValue && (
                <div className="flex items-end gap-4">
                    <span className="font-headline text-[64px] font-light leading-[72px] tracking-[-1.5px] text-[#1a1d21]">
                        {card.statValue}
                    </span>
                    {card.statSuffix && (
                        <span className="font-source-sans pb-2 text-[24px] leading-[32px] text-[#1a1d21]">
                            {card.statSuffix}
                        </span>
                    )}
                </div>
            )}

            {/* Single-line title */}
            {card.title && (
                <p className="font-headline text-[48px] font-light leading-[56px] text-[#1a1d21]">
                    {card.title}
                </p>
            )}

            <p className="font-source-sans text-[24px] leading-[32px] text-[#1a1d21]">
                {card.description}
            </p>
        </div>
    );
}

export function StrategyCardsSection({
    eyebrow,
    heading,
    subtitle,
    cards,
    className,
}: StrategyCardsSectionProps) {
    // Split cards: first 2 = top row, rest = bottom row
    const topRow = cards.slice(0, 2);
    const bottomRow = cards.slice(2);

    return (
        <section
            className={cn(
                "bg-white px-6 py-16 lg:px-[72px] lg:py-[64px]",
                className
            )}
        >
            <Container className="flex flex-col items-center gap-16">
                {/* Section header */}
                <div className="flex flex-col items-center gap-3 text-center max-w-[760px]">
                    <p className="font-source-sans text-[18px] font-semibold leading-[26px] text-[#606776]">
                        {eyebrow}
                    </p>
                    <h2 className="font-headline text-[48px] font-light leading-[56px] text-[#1a1d21]">
                        {heading}
                    </h2>
                    <p className="font-source-sans text-[16px] leading-[24px] text-[#1a1d21]">
                        {subtitle}
                    </p>
                </div>

                {/* Cards grid */}
                <div className="flex w-full flex-col gap-4">
                    {/* Top row — 2 cards */}
                    <div className="flex flex-col gap-4 lg:flex-row">
                        {topRow.map((card) => (
                            <div
                                key={card.id}
                                className={cn(
                                    "flex flex-col items-start justify-end rounded-lg px-8 py-8 lg:px-12 lg:py-10",
                                    "min-h-[280px] lg:min-h-[308px]",
                                    card.variant === "grey"
                                        ? "bg-[#f7f7f8]"
                                        : "bg-[#e2efff]",
                                    card.size === "large"
                                        ? "lg:flex-[1.2]"
                                        : "lg:flex-1"
                                )}
                            >
                                <CardContent card={card} />
                            </div>
                        ))}
                    </div>

                    {/* Bottom row — 3 cards */}
                    <div className="flex flex-col gap-4 lg:flex-row">
                        {bottomRow.map((card) => (
                            <div
                                key={card.id}
                                className={cn(
                                    "flex flex-col items-start justify-end rounded-lg p-8",
                                    "min-h-[280px] lg:min-h-[308px] lg:flex-1",
                                    card.variant === "grey"
                                        ? "bg-[#f7f7f8]"
                                        : "bg-[#e2efff]"
                                )}
                            >
                                <CardContent card={card} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
