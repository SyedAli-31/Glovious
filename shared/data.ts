// src/types/data.ts
export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
}

export interface Product {
    id: string;
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
    price?: string;
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    date: string;
    content?: string;
}

export interface HeroSlide {
    id: string;
    title: string;
    subtitle: string;
    image: string;
}
