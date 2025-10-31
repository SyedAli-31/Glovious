"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "react-intersection-observer";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
} from "lucide-react";
import Link from "next/link";

interface ContactFormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    order: string;
}

export default function ContactPage(): React.ReactElement {
    const [formData, setFormData] = useState<ContactFormData>({
        
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        order: "",
    });
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
 
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

    const validate = (): boolean => {
        const newErrors: typeof errors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
            newErrors.email = "Valid email required";
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
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
                        firstName: "",
                        lastName: "",
                        phone: "",
                        email: "",
                        subject: "",
                        message: "",
                        order: "",
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
        <main className="min-h-screen bg-gray-50">
            {/* HERO SECTION */}
            <section className="relative">
                <div className="h-[320px] md:h-[380px] w-full relative overflow-hidden rounded-b-2xl">
                    <Image
                        src="/hero2.png"
                        alt="Contact hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                    <div className="absolute inset-0 z-20 flex items-center">
                        <div className="max-w-7xl mx-auto w-full px-6 md:px-8">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
                                Contact Us
                            </h1>
                            <nav className="text-sm text-white/80 mt-2">
                                <span>Home</span>
                                <span className="mx-2">.</span>
                                <span>Contact Us</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT CARD */}
            <section className="relative -mt-16 md:-mt-20 mb-16">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                        {/* LEFT SIDE */}
                        <aside className="md:w-1/2 p-8 md:p-12 bg-gray-50">
                            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-sm text-gray-600 mb-6">
                                We'd love to hear from you! Fill out the form or use the details below — our team will get back to you shortly.
                            </p>

                            <div className="space-y-5">
                                <ContactInfo
                                    icon={<Mail className="w-5 h-5" />}
                                    title="info@noorsonss.com"
                                    subtitle="Mail Us On"
                                />
                                <ContactInfo
                                    icon={<Phone className="w-5 h-5" />}
                                    title="+92 324 8881119"
                                    subtitle="Make a Call"
                                />
                                <ContactInfo
                                    icon={<MapPin className="w-5 h-5" />}
                                    title="551, Sector 7-A, Korangi Industrial Area, Karachi"
                                    subtitle="Location"
                                />
                            </div>

                            {/* Socials */}
                            <div className="mt-8">
                                <h3 className="font-semibold mb-3">Follow Us!</h3>
                                <div className="flex items-center gap-3">
                                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                        <Link
                                            key={i}
                                            href="#"
                                            className="p-2 rounded-full bg-black text-white hover:opacity-90"
                                        >
                                            <Icon className="w-4 h-4" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* RIGHT SIDE - FORM */}
                        <div className="md:w-1/2 p-6 md:p-12">
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputField
                                        label="First Name *"
                                        name="firstName"
                                        value={formData.firstName}
                                        error={errors.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter Your First Name"
                                    />
                                    <InputField
                                        label="Last Name *"
                                        name="lastName"
                                        value={formData.lastName}
                                        error={errors.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter Your Last Name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputField
                                        label="Phone Number *"
                                        name="phone"
                                        value={formData.phone}
                                        error={errors.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                    />
                                    <InputField
                                        label="Email *"
                                        name="email"
                                        value={formData.email}
                                        error={errors.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputField
                                        label="Subject *"
                                        name="subject"
                                        value={formData.subject}
                                        error={errors.subject}
                                        onChange={handleChange}
                                        placeholder="General Inquiry, Partnership, etc"
                                    />
                                    <InputField
                                        label="(optional) Order/Ref No."
                                        name="order"
                                        value={formData.order}
                                        onChange={handleChange}
                                        placeholder="Order reference (optional)"
                                    />

                                </div>

                                <div>
                                    <label className="text-sm font-medium">
                                        Message *
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            placeholder="Write your message"
                                            className={`mt-2 block w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${errors.message
                                                    ? "border-rose-500 focus:ring-rose-400"
                                                    : "border-gray-200 focus:ring-black"
                                                }`}
                                        />
                                        {errors.message && (
                                            <p className="text-rose-600 text-xs mt-1">
                                                {errors.message}
                                            </p>
                                        )}
                                    </label>
                                </div>

                                <div className="flex items-center gap-4 pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-black text-white py-2 rounded-md hover:opacity-90 transition disabled:opacity-60"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>

                                    <Link
                                        href="mailto:info@noorsonss.com"
                                        className="inline-flex items-center text-sm text-gray-500"
                                    >
                                        <Mail className="w-4 h-4 mr-2" />
                                        info@noorsonss.com
                                    </Link>
                                </div>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

// ✅ Input Field Component
interface InputProps {
    label: string;
    name: string;
    value: string;
    placeholder?: string;
    error?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
    label,
    name,
    value,
    placeholder,
    error,
    onChange,
}: InputProps): React.ReactElement {
    return (
        <label className="block">
            <span className="text-sm font-medium">{label}</span>
            <input
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`mt-2 block w-full rounded-full border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${error
                        ? "border-rose-500 focus:ring-rose-400"
                        : "border-gray-200 focus:ring-black"
                    }`}
            />
            {error && <p className="text-rose-600 text-xs mt-1">{error}</p>}
        </label>
    );
}

// ✅ Contact Info Component
function ContactInfo({
    icon,
    title,
    subtitle,
}: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}) {
    return (
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-red-600 text-white">{icon}</div>
            <div>
                <div className="text-sm font-semibold">{title}</div>
                <div className="text-xs text-gray-500">{subtitle}</div>
            </div>
        </div>
    );
}
