"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products } from "@shared/mockData";

type Product = {
    name: string;
    slug: string;
    categorySlug: string;
    description: string;
    features: string[];
    specifications: {
        material: string;
        protection: string;
        sizes: string;
        certification?: string;
    };
    images: string[];
};

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

export default function ProductDetailPage() {
    const params = useParams();
    const categorySlug = params?.categorySlug as string;
    const productSlug = params?.productSlug as string;

    const product = (products as Product[]).find(
        (p) => p.slug === productSlug && p.categorySlug === categorySlug
    );

    if (!product) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                    <p className="text-muted-foreground mb-8">
                        The product you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <Link href="/">
                        <Button>Back to Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(
            `Hello! I'm interested in the ${product.name}. Can you provide more information?`
        );
        const phoneNumber = "923142238189";
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };

    return (
        <div className="min-h-screen py-8 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href={`/products/${categorySlug}`}>
                        <Button variant="ghost" className="hover-elevate">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Category
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="space-y-4">
                        <div className="aspect-square rounded-lg overflow-hidden bg-muted relative">
                            <Image
                                src={productImages[product.images[0]]}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                            <ul className="space-y-3">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Specifications */}
                        <Card className="p-6">
                            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                            <div className="space-y-3">
                                {Object.entries(product.specifications).map(([key, value]) =>
                                    value ? (
                                        <div key={key} className="flex justify-between py-2 border-b last:border-0">
                                            <span className="font-medium capitalize">{key}</span>
                                            <span className="text-muted-foreground">{value}</span>
                                        </div>
                                    ) : null
                                )}
                            </div>
                        </Card>

                        {/* CTA Buttons */}
                        <div className="space-y-3 pt-4">
                            <Link href="/get-quote" className="block">
                                <Button size="lg" className="w-full">
                                    Request a Quote
                                </Button>
                            </Link>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full bg-green-500"
                                onClick={handleWhatsAppClick}
                            >
                                <MessageCircle className="h-5 w-5 mr-2 " />
                                Quick Inquiry via WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Quality Assurance",
                            text: "Every glove undergoes rigorous quality control testing to ensure it meets our high standards.",
                        },
                        {
                            title: "Custom Orders",
                            text: "Need customization? We offer bulk orders with custom branding and specifications.",
                        },
                        {
                            title: "Fast Delivery",
                            text: "Quick turnaround times with worldwide shipping to get your order when you need it.",
                        },
                    ].map(({ title, text }) => (
                        <Card key={title} className="p-6">
                            <h3 className="text-lg font-semibold mb-3">{title}</h3>
                            <p className="text-muted-foreground">{text}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
