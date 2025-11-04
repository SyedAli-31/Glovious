'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
    return (
        <section className="py-16 md:py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            About Us
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Glovios is a dominant player in the safety industry and a
                            manufacturer of high-quality personal and industrial protective
                            gloves along with protective apparel.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We take pride in being the preferred supplier for a group of
                            esteemed customers worldwide.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                { title: "Quality Workmanship", subtitle: "Premium craftsmanship" },
                                { title: "Quality Tools", subtitle: "Advanced equipment" },
                                { title: "Continuous Improvements", subtitle: "Always evolving" },
                                { title: "Experienced Team", subtitle: "Expert professionals" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-1 text-foreground">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="rounded-lg overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/Factory_building.png"
                            alt="Glovios Manufacturing Facility"
                            className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
                            width={600}
                            height={400}
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
