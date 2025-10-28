"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { categories } from "../../shared/mockData";
import type { Category } from "../../shared/data";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

    const catList = categories as Category[];

    return (
        <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
            {/* Top Contact Strip */}
            <div className="bg-foreground text-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-2 text-sm">
                        <div className="flex items-center gap-6">
                            <a
                                href="mailto:info@glovios.com"
                                className="flex items-center gap-2 hover:opacity-80 transition-opacity px-2 py-1 rounded"
                                data-testid="link-email"
                            >
                                <Mail className="h-4 w-4" />
                                <span className="hidden sm:inline">info@glovios.com</span>
                            </a>
                            <a
                                href="tel:+18001234567"
                                className="flex items-center gap-2 hover:opacity-80 transition-opacity px-2 py-1 rounded"
                                data-testid="link-phone"
                            >
                                <Phone className="h-4 w-4" />
                                <span className="hidden sm:inline">+1 (800) 123-4567</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" data-testid="link-home">
                        <div className="text-2xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity">
                            GLOVIOS
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        <Link href="/" data-testid="nav-home">
                            <Button variant="ghost" className="hover:scale-105 transition-transform">
                                Home
                            </Button>
                        </Link>

                        <Link href="/who-we-are" data-testid="nav-about">
                            <Button variant="ghost" className="hover:scale-105 transition-transform">
                                Who We Are
                            </Button>
                        </Link>

                        {/* Products Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProductsDropdownOpen(true)}
                            onMouseLeave={() => setProductsDropdownOpen(false)}
                        >
                            <Button
                                variant="ghost"
                                className="hover:scale-105 transition-transform"
                                data-testid="nav-products"
                                aria-haspopup="menu"
                                aria-expanded={productsDropdownOpen}
                            >
                                Our Products <ChevronDown className="ml-1 h-4 w-4" />
                            </Button>

                            {productsDropdownOpen && (
                                <div className="absolute top-full left-0 mt-1 w-80 bg-popover border rounded-lg shadow-lg p-4 grid grid-cols-2 gap-2 animate-in fade-in-0 zoom-in-95 duration-200">
                                    {catList.map((category) => (
                                        <Link
                                            key={category.id}
                                            href={`/products/${category.slug}`}
                                            data-testid={`dropdown-${category.slug}`}
                                        >
                                            <div className="text-sm p-2 hover:bg-accent hover:scale-105 transition-all rounded cursor-pointer">
                                                {category.name}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        

                        <Link href="/blog" data-testid="nav-blog">
                            <Button variant="ghost" className="hover:scale-105 transition-transform">
                                Blog
                            </Button>
                        </Link>

                        

                        <Link href="/contact" data-testid="nav-contact">
                            <Button variant="ghost" className="hover:scale-105 transition-transform">
                                Contact Us
                            </Button>
                        </Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        <Link href="/get-quote" data-testid="button-get-quote">
                            <Button className="hidden md:inline-flex" data-testid="button-quote-desktop">
                                Get Quote
                            </Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-menu"
                            data-testid="button-mobile-menu"
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden border-t bg-background animate-in slide-in-from-top-5 duration-300">
                    <nav className="px-4 py-4 space-y-2">
                        <Link href="/" data-testid="mobile-nav-home">
                            <Button
                                variant="ghost"
                                className="w-full justify-start hover:bg-accent transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Button>
                        </Link>

                        <Link href="/who-we-are" data-testid="mobile-nav-about">
                            <Button
                                variant="ghost"
                                className="w-full justify-start hover:bg-accent transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Who We Are
                            </Button>
                        </Link>

                        <div className="pl-4 space-y-1">
                            <div className="text-sm font-semibold text-muted-foreground py-2">
                                Our Products
                            </div>
                            {catList.map((category) => (
                                <Link
                                    key={category.id}
                                    href={`/products/${category.slug}`}
                                    data-testid={`mobile-dropdown-${category.slug}`}
                                >
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-sm hover:bg-accent transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {category.name}
                                    </Button>
                                </Link>
                            ))}
                        </div>

                        <Link href="/careers" data-testid="mobile-nav-careers">
                            <Button
                                variant="ghost"
                                className="w-full justify-start hover:bg-accent transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Careers
                            </Button>
                        </Link>

                        <Link href="/blog" data-testid="mobile-nav-blog">
                            <Button
                                variant="ghost"
                                className="w-full justify-start hover:bg-accent transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Blog
                            </Button>
                        </Link>

                        <Link href="/catalog" data-testid="mobile-nav-catalog">
                            <Button
                                variant="ghost"
                                className="w-full justify-start hover:bg-accent transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Catalog
                            </Button>
                        </Link>

                        <Link href="/contact" data-testid="mobile-nav-contact">
                            <Button
                                variant="ghost"
                                className="w-full justify-start hover:bg-accent transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Button>
                        </Link>

                        <Link href="/get-quote" data-testid="mobile-nav-quote">
                            <Button
                                className="w-full"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Quote
                            </Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}