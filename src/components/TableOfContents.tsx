"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TOCItem {
    id: string;
    title: string;
    level: number;
}

interface TableOfContentsProps {
    content: Array<{ type: string; content: string }>;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");
    const [tocItems, setTocItems] = useState<TOCItem[]>([]);

    useEffect(() => {
        // Generate TOC items from content
        const items: TOCItem[] = content
            .filter((item) => item.type === "heading")
            .map((item, index) => ({
                id: `heading-${index}`,
                title: item.content,
                level: 2,
            }));

        setTocItems(items);
    }, [content]);

    useEffect(() => {
        // Intersection Observer for active section tracking
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -80% 0px" }
        );

        // Observe all headings
        const headings = document.querySelectorAll('[id^="heading-"]');
        headings.forEach((heading) => observer.observe(heading));

        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, [tocItems]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    if (tocItems.length === 0) return null;

    return (
        <Card className="p-6 sticky top-24 hidden lg:block">
            <h3 className="font-semibold text-lg mb-4">Table of Contents</h3>
            <nav className="space-y-2">
                {tocItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                            "block w-full text-left text-sm py-2 px-3 rounded-md transition-all hover:bg-accent",
                            activeId === item.id
                                ? "bg-accent text-accent-foreground font-medium border-l-2 border-primary"
                                : "text-muted-foreground"
                        )}
                    >
                        {item.title}
                    </button>
                ))}
            </nav>
        </Card>
    );
}