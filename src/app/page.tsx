
"use client"
import HeroCarousel from "@/components/HeroCarousel";
import Home from "@/pages/Home";

import {
  Award,
  Clock,
  DollarSign,
  Truck,

} from "lucide-react";


import FeatureCard from "@/components/FeatureCard";

import Bloglist from "@/components/Bloglist";

export default function Page() {



  return (
    <div>
      <HeroCarousel />
      <Home />
      {/* 📰 Blog Grid */}
      <Bloglist />
      {/* Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FeatureCard icon={Award} title="Premium Quality" />
            <FeatureCard icon={Clock} title="24/7 Free Support" />
            <FeatureCard icon={DollarSign} title="Best Prices" />
            <FeatureCard icon={Truck} title="Rapid Delivery" />
          </div>
        </div>
      </section>
    </div>
  );
}
