"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
    name: string;
    description: string;
    image: string;
    categorySlug: string;
    productSlug: string;
}

export default function ProductCard({
    name,
    description,
    image,
    categorySlug,
    productSlug,
}: ProductCardProps) {
    return (
        <Card
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            data-testid={`card-product-${productSlug}`}
        >
            <div className="relative aspect-square overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                />
               
            </div>

            <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-foreground">
                    {name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                    {description}
                </p>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Link
                    href={`/products/${categorySlug}/${productSlug}`}
                    className="w-full"
                >
                    <Button
                        variant="outline"
                        className="w-full transition-transform duration-200 hover:scale-[1.02]"
                        data-testid={`button-view-${productSlug}`}
                    >
                        View Details
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
