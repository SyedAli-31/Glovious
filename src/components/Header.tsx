"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { categories } from "../../shared/mockData";
import type { Category } from "../../shared/data";
import { usePathname } from "next/navigation"; // 👈 detect route changes
 


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [ , setProductsDropdownOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const catList = categories as Category[];

    // 👇 Whenever route changes → close dropdown & mobile menu
    useEffect(() => {
        setProductsOpen(false); // close mobile dropdown
        setMobileMenuOpen(false); // close mobile menu
        setProductsDropdownOpen(false); // close desktop dropdown
    }, [pathname]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const toggleProductsMenu = () => {
        setProductsOpen((prev) => !prev);
    };
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(
            `Hello! I'm interested in the . Can you provide more information?`
        );
        const phoneNumber = "923142238189";
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };
    return (
        <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
            {/* Top Contact Strip */}
            <div className="bg-foreground text-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-2 text-sm">
                        <div className="flex items-center gap-6">
                            <Link
                                href="mailto:info@glovios.com"
                                className="flex items-center gap-2 hover:opacity-80 transition-opacity px-2 py-1 rounded"
                            >
                                <Mail className="h-4 w-4" />
                                <span className="hidden sm:inline">info@glovios.com</span>
                            </Link>
                            <Link
                                href="tel:+18001234567"
                                className="flex items-center gap-2 hover:opacity-80 transition-opacity px-2 py-1 rounded"
                            >
                                <Phone className="h-4 w-4" />
                                <span className="hidden sm:inline">+1 (800) 123-4567</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-2xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity">
                        GLOVIOS
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        <Link href="/">
                            <Button variant="ghost" className="hover:scale-105 hover:text-red-600 transition-transform">
                                Home
                            </Button>
                        </Link>

                        <Link href="/who-we-are">
                            <Button variant="ghost" className="hover:scale-105 hover:text-red-600 transition-transform">
                                Who We Are
                            </Button>
                        </Link>

                        {/* Products Dropdown */}
                        {/* Products Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                        >
                            {/* Dropdown Trigger */}
                            <Button
                                variant="ghost"
                                className="flex items-center gap-1 hover:text-red-600 transition-colors"
                            >
                                Our Products
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-red-600" : ""
                                        }`}
                                />
                            </Button>

                            {/* Dropdown Menu */}
                            <div
                                className={`absolute top-full left-0 mt-2 w-80 bg-popover border rounded-lg shadow-lg p-4 grid grid-cols-2 gap-2 z-50 transform transition-all duration-200 ease-out ${isOpen
                                        ? "opacity-100 visible translate-y-0"
                                        : "opacity-0 invisible -translate-y-2"
                                    }`}
                            >
                                {catList.map((category) => (
                                    <Link key={category.id} href={`/products/${category.slug}`}>
                                        <div className="text-sm p-2 hover:bg-red-600 hover:text-white rounded-lg transition-all hover:scale-105">
                                            {category.name}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>


                        <Link href="/blog">
                            <Button variant="ghost" className="hover:scale-105 hover:text-red-600 transition-transform">
                                Blog
                            </Button>
                        </Link>

                        <Link href="/contact">
                            <Button variant="ghost" className="hover:scale-105 hover:text-red-600 transition-transform">
                                Contact Us
                            </Button>
                        </Link>
                    </nav>

                    {/* Theme + Quote + Mobile Menu */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        <Link href="/get-quote">
                            <Button className="hidden md:inline-flex">Get Quote</Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={toggleMobileMenu}
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden border-t  bg-background animate-in slide-in-from-top-5 duration-300 shadow-lg"
                >
                    <nav className="px-4 py-4 space-y-2 ">
                        {/* Main Links */}
                        {[
                            { href: "/", label: "Home" },
                            { href: "/who-we-are", label: "Who We Are" },
                          
                            { href: "/blog", label: "Blog" },
                          
                            { href: "/contact", label: "Contact Us" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href}>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start  hover:text-red-600 text-base font-medium rounded-xl transition-all duration-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Button>
                            </Link>
                        ))}

                        {/* Our Products Dropdown */}
                        <div className=" border-border ">
                            <button
                                onClick={toggleProductsMenu}
                                className="w-full flex items-center gap-2 text-base font-semibold text-foreground hover:text-red-600 transition-colors"
                            >
                                <span>Our Products</span>
                                <ChevronDown
                                    className={`h-5 w-5 transform transition-transform duration-300 ${productsOpen ? "rotate-180 text-red-600" : "rotate-0 text-muted-foreground"
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${productsOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <ul className="pl-3 space-y-1">
                                    {catList.map((category) => (
                                        <li key={category.id}>
                                            <Link href={`/products/${category.slug}`}>
                                                <Button
                                                    variant="ghost"
                                                    className="w-full justify-start text-sm text-muted-foreground hover:text-white hover:bg-red-600 rounded-lg transition-all duration-300"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {category.name}
                                                </Button>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link
                            href="/contact"
                            className="w-full mt-4 block"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Button
                                asChild
                                className="w-full bg-red-600 hover:bg-red-700 text-white text-base font-semibold rounded-xl shadow-md transition-all duration-300"
                            >
                                <span>Get Quote</span>
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
                    </nav>
                </div>
            )}
        </header>
    );
}
