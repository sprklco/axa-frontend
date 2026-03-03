import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { AccordionSection } from "@/components/sections/AccordionSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { faqData, faqContactData } from "@/data/faq";

export default function FaqPage() {
    const { title, items, closingText } = faqData;

    return (
        <main className="flex flex-col flex-1">
            <div className="relative flex flex-col">
                {/* Breadcrumbs */}
                <div className="bg-white">
                    <Container className="pt-[36px] pb-[16px]">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Frequently Asked Questions" },
                            ]}
                        />
                    </Container>
                </div>

                {/* Title with AXA switch icon */}
                <section className="bg-white pb-[64px]">
                    <Container>
                        <div className="flex items-end justify-center gap-0">
                            <Image
                                src="/images/axa-switch.svg"
                                alt=""
                                width={88}
                                height={75}
                                className="shrink-0"
                                aria-hidden="true"
                            />
                            <h1 className="font-headline text-[48px] md:text-[64px] font-light leading-[72px] tracking-[-1.5px] text-[#1a1d21] text-center whitespace-nowrap">
                                {title}
                            </h1>
                        </div>
                    </Container>
                </section>

                {/* FAQ Accordion */}
                <section className="bg-white py-[64px]">
                    <Container>
                        <div className="flex flex-col items-center gap-[40px] max-w-[918px] mx-auto">
                            <AccordionSection items={items} defaultOpenIndex={0} />

                            {/* Closing text */}
                            <p className="font-source-sans text-[24px] leading-[32px] text-[#1a1d21] text-center">
                                {closingText}
                            </p>
                        </div>
                    </Container>
                </section>

                {/* Contact Section */}
                <ContactSection data={faqContactData} />
            </div>
        </main>
    );
}
