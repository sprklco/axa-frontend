"use client";

import { useState } from "react";
import { Dialog } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/CTAButton";
import { User, Phone, Mail } from "lucide-react";

export interface CallbackModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const isFormValid = name.trim() !== "" && phone.trim() !== "" && email.trim() !== "";

    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            className="max-w-[440px] rounded-[12px]"
        >
            <div className="flex w-full flex-col items-center gap-6">
                {/* Title & Subtitle */}
                <div className="flex w-full flex-col items-center gap-2 text-center">
                    <h2 className="font-headline text-[24px] font-light leading-[32px] text-[#1a1d21]">
                        Get a callback
                    </h2>
                    <p className="font-source-sans text-[16px] leading-[24px] text-[#434956]">
                        Enter your details, and an agent will contact you
                        to help you find the option that best suits you.
                    </p>
                </div>

                {/* Unified Fields Block */}
                <div className="flex w-full flex-col gap-4 rounded-[8px] bg-[#f7f7f8] p-4">
                    {/* Name */}
                    <div className="flex items-center gap-2">
                        <User className="h-[18px] w-[18px] shrink-0 text-[rgba(43,48,59,0.4)]" />
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-transparent font-source-sans text-[16px] leading-[24px] text-[#1a1d21] placeholder:text-[rgba(43,48,59,0.4)] focus:outline-none"
                        />
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-[#e0e0e0]" />

                    {/* Phone */}
                    <div className="flex items-center gap-2">
                        <Phone className="h-[18px] w-[18px] shrink-0 text-[rgba(43,48,59,0.4)]" />
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-transparent font-source-sans text-[16px] leading-[24px] text-[#1a1d21] placeholder:text-[rgba(43,48,59,0.4)] focus:outline-none"
                        />
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-[#e0e0e0]" />

                    {/* Email */}
                    <div className="flex items-center gap-2">
                        <Mail className="h-[18px] w-[18px] shrink-0 text-[rgba(43,48,59,0.4)]" />
                        <input
                            type="email"
                            placeholder="E-mail address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent font-source-sans text-[16px] leading-[24px] text-[#1a1d21] placeholder:text-[rgba(43,48,59,0.4)] focus:outline-none"
                        />
                    </div>
                </div>

                {/* Send To Button */}
                <Button
                    variant="secondary"
                    size="lg"
                    fullWidth
                    disabled={!isFormValid}
                    className={
                        !isFormValid
                            ? "pointer-events-none border-black/30 text-black/30 hover:text-black/30"
                            : ""
                    }
                >
                    Send to
                </Button>
            </div>
        </Dialog>
    );
}
