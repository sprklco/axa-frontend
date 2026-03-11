import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import type { InclusiveInsuranceData } from "@/types/sustainability";

export interface InclusiveInsuranceSectionProps {
    data: InclusiveInsuranceData;
    className?: string;
}

export function InclusiveInsuranceSection({
    data,
    className,
}: InclusiveInsuranceSectionProps) {
    return (
        <section className={cn("bg-[#f7f7f8] py-8 md:py-12 lg:py-[72px]", className)}>
            <Container>
                <article className="flex flex-col gap-6 rounded-[12px] bg-white p-4 md:p-6 lg:flex-row lg:items-center lg:gap-0 lg:pl-6 lg:pr-[72px] lg:py-6">
                    {/* Left: text content */}
                    <div className="flex flex-1 flex-col gap-5">
                        <h2 className="font-headline text-[32px] leading-[40px] md:text-[48px] font-light md:leading-[56px] text-[#1a1d21]">
                            {data.title}
                        </h2>

                        <p className="font-source-sans text-[18px] leading-[26px] md:text-[16px] md:leading-[24px] text-[#1a1d21] max-w-[464px]">
                            {data.intro}
                        </p>

                        <div className="flex flex-col gap-4">
                            {data.bulletGroups.map((group) => (
                                <div key={group.heading}>
                                    <p className="font-source-sans text-[18px] font-bold leading-[26px] text-[#1a1d21]">
                                        {group.heading}
                                    </p>
                                    <ul className="mt-1 list-disc space-y-0.5 pl-7 font-source-sans text-[18px] leading-[26px] text-[#1a1d21]">
                                        {group.bullets.map((bullet, i) => (
                                            <li key={i}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Highlight stat lines */}
                        <div className="mt-2">
                            {data.highlightLines.map((line, i) => (
                                <p
                                    key={i}
                                    className="font-source-sans text-[21px] md:text-[28px] font-bold leading-[26px] md:leading-[41px] text-[#00008f]"
                                >
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Right: image card */}
                    <div className="relative h-[182px] md:h-[320px] w-full overflow-hidden rounded-[12px] lg:h-[520px] lg:w-[521px] lg:shrink-0">
                        <Image
                            src={data.imageSrc}
                            alt={data.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 521px, 100vw"
                        />
                    </div>
                </article>
            </Container>
        </section>
    );
}
