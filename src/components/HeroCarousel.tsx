"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Slide {
    id: number;
    title: string;
    subtitle: string;
    image: string;
}

const slides: Slide[] = [
    {
        id: 1,
        title: "Safety Essentials at Your Fingertips",
        subtitle: "Leading manufacturer of premium protective gloves",
        image: "/hero1.png",
    },
    {
        id: 2,
        title: "Safety Solutions for a Better Tomorrow",
        subtitle: "Your investment in safety matters",
        image: "/1Generalpurpose.png",
    },
    {
        id: 3,
        title: "Skill for Success, Build for Safety",
        subtitle: "Create with care, defend with expertise",
        image: "/hero3.png",
    },
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    // ✅ Auto slide
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isPaused]);

    // ✅ Smooth scroll behavior (once globally)
    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.style.scrollBehavior = "smooth";
        }
    }, []);

    // ✅ Scroll function for Explore Products
    const handleScrollToProducts = () => {
        const section = document.getElementById("Productcategories");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div
            className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            data-testid="hero-carousel"
        >
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
                        }`}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10" />

                    {/* Background Image */}
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={index === 0}
                        className="object-cover"
                    />

                    {/* Text Content */}
                    <div className="absolute inset-0 z-20 flex items-center justify-start">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg sm:text-xl text-white/90 mb-8">
                                    {slide.subtitle}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Button
                                        size="lg"
                                        onClick={handleScrollToProducts}
                                        data-testid="button-explore-products"
                                        className="bg-white text-black hover:bg-gray-100 transition"
                                    >
                                        Explore Products
                                    </Button>

                                    <Link href="/about">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
                                            data-testid="button-learn-more"
                                        >
                                            Learn More
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 z-30 pointer-events-none">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevSlide}
                    className="pointer-events-auto h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 transition"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextSlide}
                    className="pointer-events-auto h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 transition"
                    aria-label="Next Slide"
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
