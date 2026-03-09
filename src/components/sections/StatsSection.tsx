import { Container } from "@/components/layout/Container";
import type { StatItem } from "@/types/about";

interface StatsSectionProps {
    eyebrow: string;
    heading: string;
    stats: StatItem[];
    className?: string;
}

export function StatsSection({
    eyebrow,
    heading,
    stats,
    className,
}: StatsSectionProps) {
    return (
        <section
            className={`flex flex-col items-center justify-center bg-white px-6 md:px-[72px] py-16 ${className ?? ""}`}
        >
            <Container className="flex flex-col items-center gap-16">
                {/* Titles */}
                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="font-source-sans text-[18px] font-semibold leading-[26px] text-[#606776]">
                        {eyebrow}
                    </p>
                    <h2 className="font-headline text-[48px] font-light leading-[56px] text-[#1a1d21]">
                        {heading}
                    </h2>
                </div>

                {/* Stats row */}
                <div className="flex w-full flex-col md:flex-row items-center md:items-start justify-center gap-[40px] md:gap-[123px]">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-6"
                        >
                            {/* Label */}
                            <p className="font-source-sans text-[24px] leading-[32px] text-[#606776]">
                                {stat.label}
                            </p>

                            {/* Value + description */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex items-end justify-center gap-2">
                                    <span className="font-headline text-[64px] font-light leading-[72px] tracking-[-1.5px] text-[#1a1d21]">
                                        {stat.value}
                                    </span>
                                    {stat.suffix && (
                                        <span className="font-source-sans text-[24px] leading-[32px] text-[#1a1d21]">
                                            {stat.suffix}
                                        </span>
                                    )}
                                </div>
                                <p className="font-source-sans text-[18px] leading-[26px] text-[#1a1d21] text-center">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
