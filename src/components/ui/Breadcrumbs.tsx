import Link from "next/link";
import { cn } from "@/lib/cn";
import { Fragment } from "react";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    if (!items?.length) return null;

    return (
        <nav aria-label="Breadcrumb" className={cn("flex items-center", className)}>
            <div className="flex flex-wrap items-center gap-[14px] font-source-sans text-[16px] font-semibold leading-[24px]">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <Fragment key={index}>
                            <div className="flex flex-col justify-center leading-[0] whitespace-nowrap">
                                {item.href && !isLast ? (
                                    <Link
                                        href={item.href}
                                        className="text-[#00008f] transition-colors hover:underline"
                                    >
                                        <p className="leading-[24px]">{item.label}</p>
                                    </Link>
                                ) : (
                                    <p className="leading-[24px] text-[#8080c7]">{item.label}</p>
                                )}
                            </div>

                            {!isLast && (
                                <p
                                    className="leading-[22px] text-[14px] text-[#dddfe4] tracking-[1.25px] uppercase shrink-0"
                                    aria-hidden="true"
                                >
                                    /
                                </p>
                            )}
                        </Fragment>
                    );
                })}
            </div>
        </nav>
    );
}
