"use client";

import { motion, Variants } from "framer-motion";
import ProcessStep from "@/components/ProcessStep";

const Manufacturing = () => {
    // ✅ Type-safe Variants
    const cardVariants: Variants = {
        hidden: { opacity: 0, x: -80, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1], // ✅ Correct bezier format (type-safe)
            },
        },
    };

    const steps = [
        {
            stepNumber: "01",
            title: "Quality Check",
            subtitle: "Raw Leather",
            description:
                "Every raw leather piece undergoes a strict quality check to ensure it meets our high standards before production begins.",
            image: "/quality check.png",
        },
        {
            stepNumber: "02",
            title: "Leather Sheets",
            subtitle: "Cutting Process",
            description:
                "We transform selected hides into durable leather sheets through precision cutting with minimal waste.",
            image: "/Leathersheets.png",
        },
        {
            stepNumber: "03",
            title: "Your Safety Gloves",
            subtitle: "Stitching",
            description:
                "Our skilled craftsmen carefully stitch each glove to ensure comfort, durability, and maximum hand protection.",
            image: "/stitching.png",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ✅ Heading Animation */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Our Manufacturing Process
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From raw materials to the final product, every step is handled with precision,
                        quality control, and craftsmanship.
                    </p>
                </motion.div>

                {/* ✅ Animated Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                delay: index * 0.15,
                                duration: 0.6,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            className="transform-gpu will-change-transform"
                        >
                            <ProcessStep {...step} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Manufacturing;
