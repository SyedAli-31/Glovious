"use client";

import { useState, ChangeEvent } from "react";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@shared/mockData";

export default function BlogList(): React.ReactElement {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredPosts = blogPosts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background py-16">
            <div className="container mx-auto px-4">
                {/* 🧠 Header */}
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Safety Insights & Industry News
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                        Expert advice, safety guidelines, and the latest innovations in
                        industrial protective equipment.
                    </p>
                </div>

                {/* 🔍 Search Bar */}
                <div className="flex justify-center mb-12">
                    <input
                        type="text"
                        placeholder="Search blog posts..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full max-w-lg px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />
                </div>

                {/* 📰 Blog Grid Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blogs</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Stay informed with our latest insights on industrial safety.
                    </p>
                </div>

                {/* 📄 Blog Posts Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                title={post.title}
                                excerpt={post.excerpt}
                                image={post.image}
                                date={post.date}
                                slug={post.slug}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-xl text-muted-foreground">
                            No articles found matching “{searchQuery}”.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
