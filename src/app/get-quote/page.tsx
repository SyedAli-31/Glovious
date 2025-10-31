"use client";
// 
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GetQuote() {
    const handleWhatsAppClick = (): void => {
        const message = encodeURIComponent(
            "Hello! I would like to request a quote for your protective gloves."
        );
        const phoneNumber = "923142238189"; // international format without +
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };

    return (
        <section className="min-h-screen py-16 bg-muted/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Quote</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Fill out the form below or contact us directly via WhatsApp for
                        immediate assistance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left: Contact Form */}
                    <div className="bg-card rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
                        <ContactForm />
                    </div>

                    {/* Right: Contact Info + Highlights */}
                    <div className="space-y-8">
                        {/* Contact Info Card */}
                        <div className="bg-card rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Email Us</h4>
                                        <a
                                            href="mailto:info@glovios.com"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            info@glovios.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Call Us</h4>
                                        <a
                                            href="tel:+18001234567"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            +1 (800) 123-4567
                                        </a>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="h-5 w-5 text-[#10B981]" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold mb-3">WhatsApp</h4>
                                        <Button
                                            onClick={handleWhatsAppClick}
                                            className="bg-[#10B981] hover:bg-[#059669] text-white w-full"
                                            data-testid="button-whatsapp-contact"
                                        >
                                            <MessageCircle className="h-4 w-4 mr-2" />
                                            Chat on WhatsApp
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us Card */}
                        <div className="bg-card rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-semibold mb-4">Why Choose Glovios?</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                {[
                                    "Premium quality protective gloves manufactured with precision",
                                    "Competitive pricing for bulk orders",
                                    "Fast delivery worldwide",
                                    "24/7 customer support",
                                    "Customization options available",
                                ].map((text, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
