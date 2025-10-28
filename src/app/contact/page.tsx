"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

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
}

export default function ContactPage(): React.ReactElement {
    const [form, setForm] = useState<ContactFormData>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
        setSuccess(null);
    };

    const validate = (): boolean => {
        const newErrors: typeof errors = {};
        if (!form.firstName.trim()) newErrors.firstName = "First name is required";
        if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!form.phone.trim()) newErrors.phone = "Phone number is required";
        if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
            newErrors.email = "Valid email required";
        if (!form.subject.trim()) newErrors.subject = "Subject is required";
        if (!form.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        setSuccess(null);

        // Simulate sending request
        await new Promise((resolve) => setTimeout(resolve, 900));

        setSubmitting(false);
        setSuccess("Thank you — your message has been sent!");
        setForm({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
        });
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
                                We'd love to hear from you! Fill out the form or use the details
                                below — our team will get back to you shortly.
                            </p>

                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-red-600 text-white">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold">
                                            info@noorsonss.com
                                        </div>
                                        <div className="text-xs text-gray-500">Mail Us On</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-red-600 text-white">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold">+92 324 8881119</div>
                                        <div className="text-xs text-gray-500">Make a Call</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-red-600 text-white">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold">
                                            551, Sector 7-A, Korangi Industrial Area, Karachi
                                        </div>
                                        <div className="text-xs text-gray-500">Location</div>
                                    </div>
                                </div>
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
                                        value={form.firstName}
                                        error={errors.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter Your First Name"
                                    />
                                    <InputField
                                        label="Last Name *"
                                        name="lastName"
                                        value={form.lastName}
                                        error={errors.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter Your Last Name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputField
                                        label="Phone Number *"
                                        name="phone"
                                        value={form.phone}
                                        error={errors.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                    />
                                    <InputField
                                        label="Email *"
                                        name="email"
                                        value={form.email}
                                        error={errors.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputField
                                        label="Subject *"
                                        name="subject"
                                        value={form.subject}
                                        error={errors.subject}
                                        onChange={handleChange}
                                        placeholder="General Inquiry, Partnership, etc"
                                    />
                                    <InputField
                                        label="(optional) Order/Ref No."
                                        name="order"
                                        value=""
                                        onChange={() => { }}
                                        placeholder="Order reference (optional)"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">
                                        Message *
                                        <textarea
                                            name="message"
                                            value={form.message}
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
                                        disabled={submitting}
                                        className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:opacity-95 disabled:opacity-60"
                                    >
                                        {submitting ? "Sending..." : "Send Message"}
                                    </button>

                                    <Link
                                        href="mailto:info@noorsonss.com"
                                        className="inline-flex items-center text-sm text-gray-500"
                                    >
                                        <Mail className="w-4 h-4 mr-2" />
                                        info@noorsonss.com
                                    </Link>
                                </div>

                                {success && (
                                    <div className="mt-4 rounded-md bg-green-50 border border-green-200 p-3 text-sm text-green-800">
                                        {success}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

// ✅ Small reusable input field component
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
