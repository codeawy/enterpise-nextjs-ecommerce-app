"use client";

import { useState, useMemo } from "react";
import { ProductFilterSidebar } from "@/components/product-filter-sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/product-grid";

export type FilterState = {
  priceRange: [number, number];
  minRating: number;
  categories: string[];
  sortBy: "price-asc" | "price-desc" | "rating-desc" | "newest";
};

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 200],
    minRating: 0,
    categories: [],
    sortBy: "newest",
  });

  const filteredAndSortedProducts = () => {
    // TODO: Implement filtered and sorted products
  };

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="flex flex-col items-center text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
        <p className="text-muted-foreground max-w-[600px]">
          Browse our complete collection of premium clothing
        </p>
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <ProductFilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters & Sort
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <ProductFilterSidebar
                  filters={filters}
                  onFiltersChange={setFilters}
                />
              </SheetContent>
            </Sheet>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredAndSortedProducts.length} of {products.length}{" "}
              products
            </p>
          </div>

          {/* Product Grid */}
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
