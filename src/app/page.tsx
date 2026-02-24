import { HeroBanner } from "@/components/sections/HeroBanner";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { QuickActionsSection } from "@/components/sections/QuickActionsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { heroSlides } from "@/data/heroSlides";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      {/* Top Tabs - non-sticky, white bg, stays above hero */}
      {/* <TopTabs /> */}

      {/* Wrapper for hero + featured section */}
      <div className="relative flex flex-col">
        {/* Hero Section - positioned behind navbar */}
        <div className="-mt-[108px] lg:-mt-[150px]">
          <HeroBanner slides={heroSlides} />
        </div>

        {/* Featured Section (Quote Calculator) - overlaps hero bottom or sits below */}
        <FeaturedSection />

        {/* Quick Actions (Carousel) */}
        <QuickActionsSection />

        {/* Products (Carousel) */}
        <ProductsSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  );
}
