import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

export interface ProductIntroItem {
    id: string;
    iconSrc: string;
    title: string;
    subtitle: string;
}

export interface ProductIntroSectionProps {
    heading: string;
    description: string;
    items: ProductIntroItem[];
    className?: string;
}

export function ProductIntroSection({
    heading,
    description,
    items,
    className,
}: ProductIntroSectionProps) {
    return (
        <section className={cn("bg-white py-12 md:py-16 lg:py-20", className)}>
            <Container className="flex flex-col items-center text-center gap-6">
                {/* Heading */}
                <h2 className="font-brand-text text-[24px] leading-[32px] font-bold text-[#1a1d21] md:text-[32px] md:leading-[40px] max-w-[906px]">
                    {heading}
                </h2>

                {/* Description */}
                <p className="font-source-sans text-base leading-6 text-[#1a1d21] max-w-[653px]">
                    {description}
                </p>

                {/* Icon Cards */}
                <div className="mt-4 grid w-full max-w-[880px] gap-6 md:mt-8 md:grid-cols-3 md:gap-4 mx-auto">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center justify-end gap-2 rounded-[8px] px-8 pb-6"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center h-[69px] w-[69px] mb-2">
                                <img
                                    src={item.iconSrc}
                                    alt=""
                                    className="h-full w-full object-contain"
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col items-center text-center">
                                <p className="font-source-sans text-[20px] leading-[28px] text-[#1a1d21]">
                                    {item.title}
                                </p>
                                <p className="font-source-sans text-[20px] leading-[28px] text-[#1a1d21]">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
