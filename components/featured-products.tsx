"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/data/products";

import ProductCard from "@/components/product-cart";

export default function FeaturedProducts() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Featured Products
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of trending items that define modern
          style
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center pt-8">
        <Button
          asChild
          size="lg"
          variant="outline"
          className="px-8 bg-transparent"
        >
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
    </section>
  );
}
