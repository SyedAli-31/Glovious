"use client";

import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    iconImage?: string;
}

export default function FeatureCard({ icon: Icon, title, iconImage }: FeatureCardProps) {
    return (
        <div
            className="text-center space-y-4"
            data-testid={`feature-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
            {iconImage ? (
                <div className="mx-auto w-16 h-16 relative">
                    <Image
                        src={iconImage}
                        alt={title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 64px, 64px"
                        priority
                    />
                </div>
            ) : (
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
                </div>
            )}
            <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        </div>
    );
}
