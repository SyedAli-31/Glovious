import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@shared/mockData";

const productImages: Record<string, string> = {
    "mech-1": "/mech1.png",
    "mech-2": "/mech2.png",
    "asm-1": "/asm1.png",
    "asm-2": "/asm2.png",
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

// Loading Component
function CategoryPageLoading() {
    return (
        <div className="min-h-screen">
            {/* Hero Skeleton with Shimmer */}
            <section className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 animate-shimmer" />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="h-10 w-32 bg-white/10 rounded-lg mb-4 animate-pulse" />
                        <div className="h-12 w-96 bg-white/20 rounded-lg mb-4 animate-pulse" />
                        <div className="h-6 w-full max-w-2xl bg-white/10 rounded-lg animate-pulse" />
                    </div>
                </div>
            </section>

            {/* Glovious Loading Animation */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-8">
                        {/* Animated Logo/Brand */}
                        <div className="relative">
                            <div className="text-6xl md:text-7xl font-bold text-primary animate-pulse-glow">
                                GLOVIOUS
                            </div>
                            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full animate-blob" />
                        </div>

                        {/* Animated Glove Icons */}
                        <div className="flex space-x-4">
                            {[0, 1, 2].map((i) => (
                                <div
                                    key={i}
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 animate-bounce-stagger shadow-lg shadow-primary/50"
                                    style={{
                                        animationDelay: `${i * 0.2}s`,
                                    }}
                                >
                                    <div className="w-full h-full flex items-center justify-center text-2xl">
                                        🧤
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Loading Text */}
                        <div className="text-center space-y-2">
                            <p className="text-xl font-semibold text-foreground animate-pulse">
                                Loading Premium Protection...
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Preparing the best gloves for you
                            </p>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary animate-progress" />
                        </div>

                        {/* Animated Features */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            {['Durable', 'Certified', 'Professional'].map((text, i) => (
                                <div
                                    key={text}
                                    className="text-center p-4 rounded-lg bg-muted/50 animate-fade-in"
                                    style={{
                                        animationDelay: `${i * 0.3}s`,
                                    }}
                                >
                                    <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/20 animate-pulse" />
                                    <p className="text-xs font-medium text-muted-foreground">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Skeleton */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-10 w-96 bg-muted rounded-lg mx-auto mb-8 animate-pulse" />
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 animate-pulse" />
                                <div className="h-6 w-32 bg-muted rounded mx-auto mb-2 animate-pulse" />
                                <div className="h-4 w-full bg-muted rounded animate-pulse" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

// Category Content Component
async function CategoryContent({ categorySlug }: { categorySlug: string }) {
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

// Main Page Component with Suspense
export default async function CategoryPage({ params }: CategoryPageProps) {
    const { categorySlug } = await params;

    return (
        <Suspense fallback={<CategoryPageLoading />}>
            <CategoryContent categorySlug={categorySlug} />
        </Suspense>
    );
}