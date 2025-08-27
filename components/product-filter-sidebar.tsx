"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";
import type { FilterState } from "@/app/(commerce)/products/page";

interface ProductFilterSidebarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export function ProductFilterSidebar({
  filters,
  onFiltersChange,
}: ProductFilterSidebarProps) {
  const updateFilters = () => {
    // TODO: Implement update filters
  };

  const resetFilters = () => {
    // TODO: Implement reset filters
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    // TODO: Implement handle category change
  };

  const categories = [
    { id: "men", label: "Men", count: 5 },
    { id: "women", label: "Women", count: 4 },
    { id: "accessories", label: "Accessories", count: 3 },
  ];

  return (
    <div className="space-y-6">
      {/* Sort By */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sort By</CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            value={filters.sortBy}
            onValueChange={() => {
              // TODO: Implement sort by
            }}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating-desc">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={filters.categories.includes(category.id)}
                onCheckedChange={(checked) =>
                  handleCategoryChange(category.id, checked as boolean)
                }
              />
              <Label htmlFor={category.id} className="flex-1 cursor-pointer">
                <div className="flex items-center justify-between">
                  <span>{category.label}</span>
                  <span className="text-sm text-muted-foreground">
                    ({category.count})
                  </span>
                </div>
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={() => {
                // TODO: Implement price range change
              }}
              max={200}
              min={0}
              step={5}
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label htmlFor="min-price" className="text-xs">
                Min
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                  $
                </span>
                <input
                  id="min-price"
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => {
                    const value = Math.max(
                      0,
                      Math.min(Number(e.target.value), filters.priceRange[1])
                    );
                    // TODO: Implement price range change
                  }}
                  className="w-full pl-6 pr-2 py-1 text-sm border rounded-md"
                  min="0"
                  max="200"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="max-price" className="text-xs">
                Max
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                  $
                </span>
                <input
                  id="max-price"
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => {
                    const value = Math.max(
                      filters.priceRange[0],
                      Math.min(Number(e.target.value), 200)
                    );
                    // TODO: Implement price range change
                  }}
                  className="w-full pl-6 pr-2 py-1 text-sm border rounded-md"
                  min="0"
                  max="200"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rating Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Minimum Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={filters.minRating.toString()}
            onValueChange={() => {
              // TODO: Implement minimum rating change
            }}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="0" id="rating-all" />
              <Label
                htmlFor="rating-all"
                className="flex items-center cursor-pointer"
              >
                All Ratings
              </Label>
            </div>
            {[4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={rating.toString()}
                  id={`rating-${rating}`}
                />
                <Label
                  htmlFor={`rating-${rating}`}
                  className="flex items-center cursor-pointer"
                >
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm">& up</span>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Reset Filters */}
      <Button variant="outline" onClick={resetFilters} className="w-full">
        Reset All Filters
      </Button>
    </div>
  );
}
