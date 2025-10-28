"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
    name: string;
    description: string;
    image: string;
    slug: string;
}

export default function CategoryCard({
    name,
    description,
    image,
    slug,
}: CategoryCardProps) {
    return (
        <Link
            href={`/products/${slug}`}
            className="block group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer h-64"
            data-testid={`card-category-${slug}`}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-sm text-white/80 mb-4 line-clamp-2">{description}</p>
                <div className="flex items-center gap-2 text-accent font-medium">
                    <span>See Products</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
}
