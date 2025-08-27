"use client";

import { ShoppingCart } from "lucide-react";
import type { Product } from "@/data/products";
import ProductCard from "./product-cart";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="text-muted-foreground mb-4">
          <ShoppingCart className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-lg font-medium">No products found</h3>
          <p className="text-sm">
            Try adjusting your filters to see more results.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
