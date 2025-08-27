import { Heart, Loader2, ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { featuredProducts } from "@/data/products";

interface ProductCardProps {
  product: (typeof featuredProducts)[0];
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = async () => {
    //TODO: Add to cart
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 p-0">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.image || "/images/products/placeholder.png"}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <Badge
              className={`${product.badgeColor} text-white border-0 text-xs font-medium`}
            >
              {product.badge}
            </Badge>
            {discountPercentage > 0 && (
              <Badge className="bg-orange-500 text-white border-0 text-xs font-medium">
                -{discountPercentage}%
              </Badge>
            )}
          </div>

          {/* Favorite button */}
          <button
            onClick={toggleFavorite}
            className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white hover:scale-110"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </button>

          {/* Quick add to cart overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className="bg-white text-black hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              {isAddingToCart ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <ShoppingCart className="w-4 h-4 mr-2" />
              )}
              {isAddingToCart ? "Adding..." : "Quick Add"}
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <Link href={`/products/${product.id}`}>
              <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium text-gray-700">
                  {product.rating}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              size="sm"
              className="bg-black hover:bg-gray-800 text-white"
            >
              {isAddingToCart ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <ShoppingCart className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
