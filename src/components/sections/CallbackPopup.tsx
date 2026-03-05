import { Dialog } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/CTAButton";
import { User, Phone, Mail } from "lucide-react";
import { FormEvent } from "react";

export interface CallbackPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CallbackPopup({ isOpen, onClose }: CallbackPopupProps) {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // In a real application, submit the form to an API
        console.log("Form submitted");
        onClose();
    };

    return (
        <Dialog isOpen={isOpen} onClose={onClose} showCloseButton={true}>
            <div className="flex flex-col items-center w-full mt-4 md:mt-8 px-2 md:px-8">
                <div className="text-center max-w-2xl mb-8 md:mb-10">
                    <h2 className="font-['Publico_Headline_Web',sans-serif] font-light text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] text-[#1a1d21] mb-4">
                        Get a quote
                    </h2>
                    <p className="font-['Source_Sans_Pro',sans-serif] text-[16px] leading-[24px] text-[#434956]">
                        Fill in your details, and we will contact you to help you find the
                        option that best suits you.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col items-center gap-8 md:gap-10"
                >
                    {/* Unified Fields Container */}
                    <div className="w-full max-w-[893px] bg-[#f7f7f8] rounded-lg p-2 md:h-[56px] flex flex-col md:flex-row items-stretch md:items-center relative">
                        {/* Name Field */}
                        <div className="flex-1 flex items-center px-4 py-3 md:py-0 gap-3 group">
                            <User className="h-[18px] w-[18px] text-[#2b303b]/40 shrink-0 group-focus-within:text-[#00008f] transition-colors" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                className="bg-transparent border-none outline-none w-full text-[16px] font-['Source_Sans_Pro',sans-serif] text-[#1a1d21] placeholder:text-[#2b303b]/40"
                            />
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-4 bg-gray-300 shrink-0" />

                        {/* Mobile Divider */}
                        <div className="block md:hidden h-px w-full bg-gray-200" />

                        {/* Phone Field */}
                        <div className="flex-1 flex items-center px-4 py-3 md:py-0 gap-3 group">
                            <Phone className="h-[16px] w-[16px] text-[#2b303b]/40 shrink-0 group-focus-within:text-[#00008f] transition-colors" />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                required
                                className="bg-transparent border-none outline-none w-full text-[16px] font-['Source_Sans_Pro',sans-serif] text-[#1a1d21] placeholder:text-[#2b303b]/40"
                            />
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-4 bg-gray-300 shrink-0" />

                        {/* Mobile Divider */}
                        <div className="block md:hidden h-px w-full bg-gray-200" />

                        {/* Email Field */}
                        <div className="flex-1 flex items-center px-4 py-3 md:py-0 gap-3 group">
                            <Mail className="h-[16px] w-[16px] text-[#2b303b]/40 shrink-0 group-focus-within:text-[#00008f] transition-colors" />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail address"
                                required
                                className="bg-transparent border-none outline-none w-full text-[16px] font-['Source_Sans_Pro',sans-serif] text-[#1a1d21] placeholder:text-[#2b303b]/40"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    {/* The design shows a faint gray bordered button that we will replicate using standard tailwind and our Button component */}
                    <div className="pb-4">
                        <Button
                            type="submit"
                            variant="secondary"
                            className="h-[56px] px-8 border-gray-300 text-gray-400 hover:border-[#00008f] hover:text-white"
                        >
                            <span className="font-['Source_Sans_Pro',sans-serif] font-semibold">
                                Send to
                            </span>
                        </Button>
                    </div>
                </form>
            </div>
        </Dialog>
    );
}
