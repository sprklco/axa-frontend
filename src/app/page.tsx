import { HeroBanner } from "@/components/sections/HeroBanner";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { QuickActionsSection } from "@/components/sections/QuickActionsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { TopTabs, MainNavbar } from "@/components/layout/Navbar";
import { MetaHeader } from "@/components/layout/MetaHeader";
import { BottomNavbar } from "@/components/layout/BottomNavbar";
import { heroSlides } from "@/data/heroSlides";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-gray-50 pb-22 lg:pb-0">
      {/* Top Tabs - non-sticky, white bg, stays above hero */}
      {/* <TopTabs /> */}

      {/* Wrapper for sticky navbar + hero + featured section */}
      <div className="relative flex flex-col">
        {/* Meta Header - top bar above main navbar */}
        <MetaHeader />

        {/* Main Navbar - sticky */}
        <MainNavbar />

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

      {/* Footer */}
      <Footer />

      {/* Bottom sticky navigation bar */}
      <BottomNavbar />
    </main>
  );
}
