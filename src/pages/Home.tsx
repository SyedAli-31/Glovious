"use client";

import Image from "next/image";
import {
    Award,
    Clock,
    DollarSign,
    Truck,
    CheckCircle,
    Users,
    Target,
} from "lucide-react";

import HeroCarousel from "@/components/HeroCarousel";
import CategoryCard from "@/components/CategoryCard";
import ProcessStep from "@/components/ProcessStep";
import BlogCard from "@/components/BlogCard";
import FeatureCard from "@/components/FeatureCard";
import { categories, blogPosts } from "@shared/mockData";

// ✅ Image paths (from public folder)
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

const blogImages = [
    "/assets/generated_images/Industrial_worker_with_gloves_machinery_6f933cc0.png",
    "/assets/generated_images/Leather_gloves_product_photography_8dc87566.png",
    "/assets/generated_images/Factory_workers_teamwork_safety_4829c1f7.png",
];

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Carousel */}
            <HeroCarousel />

            {/* About Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
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
                                    <div className="flex items-start gap-3" key={i}>
                                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-1">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/Factory_building.png"
                                alt="Glovios Manufacturing Facility"
                                className="w-full h-[400px] object-cover"
                                width={600}
                                height={400}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore our comprehensive range of protective gloves designed for
                            every industrial application.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <CategoryCard
                                key={category.id}
                                name={category.name}
                                description={category.description}
                                image={categoryImages[category.slug]}
                                slug={category.slug}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/* Legacy Section */}
            <section className="py-16 md:py-24 bg-[#0950c3]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">
                        A Prosperous Legacy of Superiority
                    </h2>
                    <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                        Explore the world of <span className="font-semibold">Glovios</span>, where
                        safety and style come together seamlessly. We are dedicated to providing
                        top-quality gloves that protect workers in the most demanding
                        environments.
                    </p>
                </div>
            </section>


            {/* Manufacturing Process */}
            <section className="py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Manufacturing Process
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            From raw materials to finished product, every step is carefully
                            controlled.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ProcessStep
                            stepNumber="01"
                            title="Quality Check"
                            subtitle="Raw Leather"
                            description="We check every raw leather piece carefully to ensure it’s ready for use."
                            image="/quality check.png"
                        />
                        <ProcessStep
                            stepNumber="02"
                            title="Leather Sheets"
                            subtitle="Cutting Process"
                            description="Turning rough leather into strong sheets with precision cutting."
                            image="/Leathersheets.png"
                        />
                        <ProcessStep
                            stepNumber="03"
                            title="Your Safety Gloves"
                            subtitle="Stitching"
                            description="Our skilled hands sew leather into protective gloves with care."
                            image="/stitching.png"
                        />
                    </div>
                </div>
            </section>

            {/* Global Reach */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Safety Beyond Borders
                        </h2>
                        <h3 className="text-2xl font-semibold mb-6 text-primary">
                            Bringing Safety to You, Everywhere
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Glovios doesn't believe in borders when it comes to safety. We export
                            our fantastic protective gloves to different parts of the world, making
                            sure everyone, no matter where they are, stays safe.
                        </p>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6 leading-relaxed">
                            Glovios is the trusted choice for international brands in the USA,
                            Germany, UK, Czech Republic, and Korea, delivering high-quality
                            protective gloves and safety solutions across borders.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
                        {[
                            { name: "USA", icon: "Users" },
                            { name: "Germany", icon: "Users" },
                            { name: "UK", icon: "Users" },
                            { name: "Czech Rep.", icon: "Users" },
                            { name: "Korea", icon: "Users" },
                            { name: "Worldwide", icon: "Target" },
                        ].map((country, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-6 bg-card rounded-lg shadow-sm"
                            >
                                <div className="text-center">
                                    {country.icon === "Users" ? (
                                        <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                                    ) : (
                                        <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                                    )}
                                    <p className="font-semibold">{country.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Blogs */}
            <section className="py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blogs</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Stay informed with our latest insights on industrial safety.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogPosts.map((post, i) => (
                            <BlogCard
                                key={post.id}
                                title={post.title}
                                excerpt={post.excerpt}
                                image={blogImages[i]}
                                date={post.date}
                                slug={post.slug}
                            />
                        ))}
                    </div>
                </div>
            </section>



            {/* Features */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <FeatureCard icon={Award} title="Premium Quality" />
                        <FeatureCard icon={Clock} title="24/7 Free Support" />
                        <FeatureCard icon={DollarSign} title="Best Prices" />
                        <FeatureCard icon={Truck} title="Rapid Delivery" />
                    </div>
                </div>
            </section>
        </div>
    );
}
