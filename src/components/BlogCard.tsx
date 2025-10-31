"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    slug: string;
}

export default function BlogCard({
    title,
    excerpt,
    image,
    date,
    slug,
}: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`} className="block h-full">
            <Card
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full rounded-xl border border-gray-200"
                data-testid={`card-blog-${slug}`}
            >
                {/* ✅ Blog Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>

                {/* ✅ Blog Content */}
                <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4 shrink-0" />
                        <time>
                            {new Date(date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                    </div>

                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-foreground">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                        {excerpt}
                    </p>
                </CardContent>
            </Card>
        </Link>
    );
}
