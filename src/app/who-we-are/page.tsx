"use client";

import Image from "next/image";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

export default function WhoWeAre() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[28rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
                <Image
                    src="/Factory_building.png"
                    alt="Glovios Manufacturing Facility"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Who We Are
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl">
                            Your trusted partner in protective safety solutions
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Glovios is a dominant player in the safety industry and a
                                    manufacturer of high-quality personal and industrial protective
                                    gloves along with protective apparel. We are pleased to
                                    introduce our company as the leading manufacturer of premium
                                    leather gloves.
                                </p>
                                <p>
                                    We take pride in being the preferred supplier for a group of
                                    esteemed customers worldwide. Our commitment to excellence has
                                    made us the trusted choice for international brands in the USA,
                                    Germany, UK, Czech Republic, and Korea.
                                </p>
                                <p>
                                    Through continuous innovation and dedication to quality, we've
                                    built a reputation for delivering protective solutions that
                                    keep workers safe in the most demanding environments.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/hero3.png"
                                alt="Our Team"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Award,
                                title: "Quality First",
                                text: "We never compromise on quality, ensuring every product meets the highest standards.",
                            },
                            {
                                icon: Users,
                                title: "Customer Focus",
                                text: "Our customers' safety and satisfaction drive every decision we make.",
                            },
                            {
                                icon: TrendingUp,
                                title: "Innovation",
                                text: "Constantly improving our products and processes to stay ahead.",
                            },
                            {
                                icon: Globe,
                                title: "Global Reach",
                                text: "Bringing safety solutions to workers worldwide.",
                            },
                        ].map(({ icon: Icon, title, text }) => (
                            <div key={title} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                                <p className="text-muted-foreground">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manufacturing Excellence */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/stitching.png"
                                alt="Manufacturing Process"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold mb-6">
                                Manufacturing Excellence
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Our state-of-the-art manufacturing facility combines
                                    traditional craftsmanship with modern technology. Every glove
                                    is crafted with precision and care, ensuring consistent quality
                                    across our entire product range.
                                </p>
                                <p>
                                    From raw material selection to final quality inspection, each
                                    step in our manufacturing process is carefully controlled and
                                    monitored. Our experienced team of craftspeople brings decades
                                    of expertise to every product we make.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                                {[
                                    { value: "25+", label: "Years Experience" },
                                    { value: "50+", label: "Countries Served" },
                                    { value: "1M+", label: "Gloves Produced" },
                                    { value: "100%", label: "Quality Tested" },
                                ].map(({ value, label }) => (
                                    <div
                                        key={label}
                                        className="text-center p-4 bg-muted rounded-lg"
                                    >
                                        <div className="text-3xl font-bold text-primary mb-2">
                                            {value}
                                        </div>
                                        <div className="text-sm text-muted-foreground">{label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                    <p className="text-xl leading-relaxed">
                        To be the world's most trusted manufacturer of protective gloves,
                        ensuring worker safety through innovative products, uncompromising
                        quality, and exceptional service. We are committed to protecting
                        hands, empowering workers, and contributing to a safer industrial
                        future.
                    </p>
                </div>
            </section>
        </div>
    );
}
