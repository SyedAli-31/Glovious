import Link from 'next/link';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { categories } from '../../shared/mockData';

export default function Footer() {
    return (
        <footer className="bg-foreground text-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">GLOVIOS</h3>
                        <p className="text-background/80 mb-4 leading-relaxed">
                            Step into the safety zone with us! We're here to make sure your hands are in good hands.
                        </p>
                        <Link href="/get-quote" passHref>
                            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover-elevate active-elevate-2" data-testid="button-footer-quote">
                                Get Quote
                            </button>
                        </Link>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Useful Links</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', href: '/', testId: 'footer-link-home' },
                                { name: 'About Us', href: '/who-we-are', testId: 'footer-link-about' },
                                { name: 'Careers', href: '/careers', testId: 'footer-link-careers' },
                                { name: 'Blog', href: '/blog', testId: 'footer-link-blog' },
                                { name: 'Contact Us', href: '/contact', testId: 'footer-link-contact' }
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} passHref>
                                        <span className="text-background/80 hover:text-background cursor-pointer hover-elevate inline-block px-2 py-1 rounded" data-testid={link.testId}>
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Our Products</h4>
                        <ul className="space-y-2">
                            {categories.slice(0, 5).map((category) => (
                                <li key={category.id}>
                                    <Link href={`/products/${category.slug}`} passHref>
                                        <span className="text-background/80 hover:text-background cursor-pointer hover-elevate inline-block px-2 py-1 rounded text-sm" data-testid={`footer-link-${category.slug}`}>
                                            {category.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Connect with Us</h4>
                        <div className="space-y-3 mb-6">
                            <a href="mailto:info@glovios.com" className="flex items-center gap-2 text-background/80 hover:text-background hover-elevate px-2 py-1 rounded" data-testid="footer-email">
                                <Mail className="h-4 w-4" />
                                <span>info@glovios.com</span>
                            </a>
                            <a href="tel:+18001234567" className="flex items-center gap-2 text-background/80 hover:text-background hover-elevate px-2 py-1 rounded" data-testid="footer-phone">
                                <Phone className="h-4 w-4" />
                                <span>+1 (800) 123-4567</span>
                            </a>
                        </div>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, label: 'Facebook', href: '#', testId: 'social-facebook' },
                                { icon: Twitter, label: 'Twitter', href: '#', testId: 'social-twitter' },
                                { icon: Instagram, label: 'Instagram', href: '#', testId: 'social-instagram' },
                                { icon: Linkedin, label: 'LinkedIn', href: '#', testId: 'social-linkedin' }
                            ].map(({ icon: Icon, label, href, testId }) => (
                                <a key={label} href={href} className="hover-elevate p-2 rounded" aria-label={label} data-testid={testId}>
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-background/20 pt-6 text-center text-sm text-background/60">
                    <p>
                        Copyright {new Date().getFullYear()} © All Rights Reserved |{' '}
                        <Link href="/terms" passHref>
                            <span className="hover:text-background cursor-pointer">Terms & Conditions</span>
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
