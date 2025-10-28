

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@shared/mockData";

const productImages: Record<string, string> = {
    "mech-1": "/Mech1.png",
    "mech-2": "/Mech2.png",
    "asm-1": "/Asm1.png",
    "asm-2": "/Asm2.png",
    "weld-1": "/Stickwelding1.png",
    "weld-2": "/Stickwelding2.png",
    "imp-1": "/Impact1.png",
    "imp-2": "/Impact2.png",
    "drv-1": "/Driver1.png",
    "drv-2": "/Driver2.png",
    "elec-1": "/Electrical1.png",
    "elec-2": "/Electrical2.png",
    "gen-1": "/Generalpurpose1.png",
    "gen-2": "/Generalpurpose2.png",
    "tigmig-1": "/TIGMIG1.png",
    "tigmig-2": "/TIGMIG2.png",
};

const categoryImages: Record<string, string> = {
    "mechanical-gloves": "/1Mechanic.png",
    "assembly-gloves": "/Assembly.png",
    "stick-welding-gloves": "/Stickwelding.png",
    "impact-gloves": "/Impact.png",
    "driver-gloves": "/Driver.png",
    "electrical-gloves": "/Electrical.png",
    "general-purpose-gloves": "/1Generalpurpose.png",
    "tig-mig-welding-gloves": "/1TIGMIG_welding.png",
};

interface CategoryPageProps {
    params: Promise<{
        categorySlug: string;
    }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { categorySlug } = await params; // ✅ FIXED LINE

    const category = categories.find((c) => c.slug === categorySlug);
    const categoryProducts = products.filter((p) => p.categorySlug === categorySlug);

    if (!category) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
                    <p className="text-muted-foreground mb-8">
                        The category you're looking for doesn't exist.
                    </p>
                    <Link href="/">
                        <Button>Back to Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const categoryImage = categoryImages[category.slug];

    return (
        <div className="min-h-screen">
            {/* 🧭 Category Hero */}
            <section className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
                <Image
                    src={categoryImage}
                    alt={category.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-20 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <Link href="/">
                            <Button
                                variant="ghost"
                                className="text-white hover:bg-white/20 mb-4"
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Home
                            </Button>
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {category.name}
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl">
                            {category.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* 🧤 Product Grid */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {categoryProducts.length > 0 ? (
                        <>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold">
                                    {categoryProducts.length}{" "}
                                    {categoryProducts.length === 1 ? "Product" : "Products"} Available
                                </h2>
                                <Link href="/get-quote">
                                    <Button>Request Quote</Button>
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {categoryProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        name={product.name}
                                        description={product.description}
                                        image={productImages[product.images[0]]}
                                        categorySlug={product.categorySlug}
                                        productSlug={product.slug}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <h2 className="text-2xl font-bold mb-4">No Products Available</h2>
                            <p className="text-muted-foreground mb-8">
                                Products in this category are coming soon.
                            </p>
                            <Link href="/get-quote">
                                <Button>Contact Us for Custom Solutions</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* ⭐ Category Features */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Why Choose Our {category.name}?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                number: "1",
                                title: "Premium Materials",
                                text: "Crafted from the highest quality materials for maximum durability and protection.",
                            },
                            {
                                number: "2",
                                title: "Safety Certified",
                                text: "Meets or exceeds international safety standards and certifications.",
                            },
                            {
                                number: "3",
                                title: "Proven Performance",
                                text: "Trusted by professionals worldwide in demanding work environments.",
                            },
                        ].map((feature) => (
                            <div key={feature.number} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl font-bold text-primary">
                                        {feature.number}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
