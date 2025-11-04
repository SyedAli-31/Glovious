"use client";

import { motion, Variants } from "framer-motion";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@shared/mockData";

const ProductCategories = () => {
    // ✅ Image paths (from /public)
    const categoryImages: Record<string, string> = {
        "mechanical-gloves": "/Mechanic.png",
        "assembly-gloves": "/Assembly.png",
        "stick-welding-gloves": "/Stickwelding.png",
        "impact-gloves": "/Impact.png",
        "driver-gloves": "/Driver.png",
        "electrical-gloves": "/Electrical.png",
        "general-purpose-gloves": "/Generalpurpose.png",
        "tig-mig-welding-gloves": "/TIGMIG_welding.png",
    };

    // ✅ Animation variants
    const cardVariants: Variants = {
        hidden: { opacity: 0, x: -80, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <div>
            {/* ✅ Product Categories Section */}
            <section id="Productcategories" className="py-16 md:py-24 bg-muted/30 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Title & Description */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                            Our Products
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore our comprehensive range of protective gloves designed for every industrial application.
                        </p>
                    </motion.div>

                    {/* ✅ Animated Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{
                                    delay: index * 0.12,
                                    duration: 0.6,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                className="transform-gpu will-change-transform"
                            >
                                <CategoryCard
                                    name={category.name}
                                    description={category.description}
                                    image={categoryImages[category.slug]}
                                    slug={category.slug}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ Legacy Section */}
            <motion.section
                className="py-16 md:py-24 bg-[#0950c3] text-center overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6 text-white"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        A Prosperous Legacy of Superiority
                    </motion.h2>

                    <motion.p
                        className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        Explore the world of <span className="font-semibold">Glovios</span>, where safety and style come together seamlessly.
                        We are dedicated to providing top-quality gloves that protect workers in the most demanding environments.
                    </motion.p>
                </div>
            </motion.section>
        </div>
    );
};

export default ProductCategories;
