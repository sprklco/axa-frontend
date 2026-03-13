import { Container } from "@/components/layout/Container";
import type { VisionBlock } from "@/types/about";

interface VisionPurposeSectionProps {
    blocks: VisionBlock[];
    className?: string;
}

export function VisionPurposeSection({
    blocks,
    className,
}: VisionPurposeSectionProps) {
    return (
        <section className={`bg-white py-16 ${className ?? ""}`}>
            <Container className="flex flex-col items-center gap-[54px]">
                {blocks.map((block, idx) => (
                    <div key={idx} className="flex flex-col items-start gap-0 w-full max-w-[800px]">
                        <h2 className="font-brand-text text-[38px] font-bold leading-[32px] text-[#1a1d21] mb-[36px]">
                            {block.heading}
                        </h2>
                        <div className="max-w-[750px] font-source-sans text-[18px] leading-[26px] text-[#1a1d21]">
                            {block.paragraphs.map((p, pIdx) => (
                                <p key={pIdx} className="mb-4 last:mb-0">
                                    {p}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
        </section>
    );
}
