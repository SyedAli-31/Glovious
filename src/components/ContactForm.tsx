"use client";

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "react-intersection-observer";

interface FormDataType {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

export default function ContactForm(): React.ReactElement {
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const { ref,  } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

            if (!accessKey) {
                console.error("❌ Web3Forms Access Key not found in .env.local");
                toast({
                    title: "⚠️ Configuration Error",
                    description: "Missing Web3Forms Access Key. Please try again later.",
                    variant: "destructive",
                    className: "bg-red-600 text-white border-none shadow-lg rounded-xl",
                });
                setIsSubmitting(false);
                return;
            }

            const form = new FormData();
            form.append("access_key", accessKey);
            form.append("subject", "New Contact Form Submission");
            form.append("from_name", "Glovious New Quote");

            Object.entries(formData).forEach(([key, value]) => {
                form.append(key, value);
            });

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form,
            });

            const data = await response.json();

            if (data.success) {
                toast({
                    title: "✅ Message Sent!",
                    description: "Thank you for reaching out. We'll get back to you shortly.",
                    className: "bg-purple-900 text-white border-none shadow-lg rounded-xl",
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: "",
                });
            } else {
                toast({
                    title: "⚠️ Submission Failed",
                    description: "Please try again or contact us via email.",
                    variant: "destructive",
                    className: "bg-red-600 text-white border-none shadow-lg rounded-xl",
                });
            }
        } catch (error) {
            console.error("🚫 Error submitting form:", error);
            toast({
                title: "🚫 Error",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
                className: "bg-red-600 text-white border-none shadow-lg rounded-xl",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            ref={ref}
            onSubmit={handleSubmit}
            className="space-y-4"
        >
            <div>
                <label className="block text-sm font-medium">Full Name *</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md p-2"
                    placeholder="John Doe"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Email *</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md p-2"
                    placeholder="john@example.com"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Phone *</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md p-2"
                    placeholder="+92 300 0000000"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Company (Optional)</label>
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                    placeholder="Company Name"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Message *</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border rounded-md p-2"
                    placeholder="Write your message..."
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-2 rounded-md hover:opacity-90 transition disabled:opacity-60"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
