import { cn } from "@/lib/cn";

export interface PillTab {
    id: string;
    label: string;
}

export interface PillTabsProps {
    tabs: readonly PillTab[];
    activeTabId: string;
    onTabChange: (id: string) => void;
    className?: string;
    tabClassName?: string;
}

export function PillTabs({ tabs, activeTabId, onTabChange, className, tabClassName }: PillTabsProps) {
    return (
        <div className={cn("inline-flex items-center gap-0 rounded-full bg-[#fafafa] p-2", className)}>
            {tabs.map((tab) => {
                const isActive = activeTabId === tab.id;
                return (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => onTabChange(tab.id)}
                        className={cn(
                            "flex items-center justify-center rounded-full px-[18px] py-[13px] font-source-sans text-[18px] leading-[26px] transition-colors cursor-pointer",
                            isActive
                                ? "bg-[#00008f] text-white"
                                : "text-[#00008f] hover:bg-[#00008f]/5",
                            tabClassName
                        )}
                        aria-pressed={isActive}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}
