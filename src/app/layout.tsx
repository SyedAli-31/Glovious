import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
// import WhatsAppButton from "@/components/WhatsAppButton";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GLOVIOS - Premium Protective Gloves Manufacturer",
  description: "Leading manufacturer of premium protective gloves for industrial, mechanical, welding, and safety applications. Trusted by industries worldwide.",
  keywords: "protective gloves, safety gloves, industrial gloves, welding gloves, mechanical gloves",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="light" >
            <TooltipProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
                <FloatingWhatsApp phoneNumber="+923486906754" />
              </div>
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </QueryClientProvider >
      </body>
    </html>
  );
}
