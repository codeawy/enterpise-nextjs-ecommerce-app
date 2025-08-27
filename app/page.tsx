import FeaturedProducts from "@/components/featured-products";
import { HeroSection } from "@/components/HeroSection";
import { CategorySection } from "@/components/category-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <div className="container mx-auto px-4 py-16 space-y-20">
        <FeaturedProducts />
        <CategorySection />
      </div>
    </div>
  );
}
