"use client";

import { useState } from "react";
import { HelpSection, type HelpSectionProps } from "./HelpSection";
import { CallbackPopup } from "./CallbackPopup";

export function HelpSectionWithCallback(props: HelpSectionProps) {
    const [isCallbackOpen, setIsCallbackOpen] = useState(false);

    // Override the secondary CTA's onClick to open the modal
    // while removing the href so it behaves as a button.
    const secondaryCta = props.secondaryCta
        ? {
            ...props.secondaryCta,
            href: undefined,
            onClick: () => setIsCallbackOpen(true),
        }
        : undefined;

    return (
        <>
            <HelpSection {...props} secondaryCta={secondaryCta} />
            <CallbackPopup
                isOpen={isCallbackOpen}
                onClose={() => setIsCallbackOpen(false)}
            />
        </>
    );
}
