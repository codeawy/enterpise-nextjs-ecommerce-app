"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/data/products";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);

  const handleAddToCart = () => {
    // TODO: Implement add to cart logic
    console.log("Adding to cart:", {
      product: product.name,
      quantity,
      size: selectedSize,
      color: selectedColor,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-4">
        <div className="relative aspect-square overflow-hidden rounded-lg border">
          <Image
            src={product.images?.[selectedImage] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.isNew && (
            <Badge className="absolute top-4 right-4">New</Badge>
          )}
        </div>

        <div className="flex gap-4">
          {product.images?.map((image, index) => (
            <button
              key={index}
              className={`relative aspect-square w-20 overflow-hidden rounded-md border ${
                selectedImage === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.name} - Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold mt-2">${product.price.toFixed(2)}</p>
        </div>

        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes?.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  className="min-w-[60px]"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
            {!selectedSize && (
              <p className="text-sm text-muted-foreground mt-2">
                Please select a size
              </p>
            )}
          </div>

          <div>
            <h3 className="font-medium mb-2">Color</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors?.map((color) => (
                <Button
                  key={color}
                  variant={selectedColor === color ? "default" : "outline"}
                  className="min-w-[80px]"
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </Button>
              ))}
            </div>
            {!selectedColor && (
              <p className="text-sm text-muted-foreground mt-2">
                Please select a color
              </p>
            )}
          </div>

          <div>
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="w-full"
          disabled={!selectedSize || !selectedColor}
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to Cart
        </Button>

        <Tabs defaultValue="details">
          <TabsList className="w-full">
            <TabsTrigger value="details" className="flex-1">
              Details
            </TabsTrigger>
            <TabsTrigger value="shipping" className="flex-1">
              Shipping & Returns
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">Material</h4>
                <p className="text-sm text-muted-foreground">
                  {product.details?.material}
                </p>
              </div>
              <div>
                <h4 className="font-medium">Fit</h4>
                <p className="text-sm text-muted-foreground">Slim Fit</p>
              </div>
              <div>
                <h4 className="font-medium">Care</h4>
                <p className="text-sm text-muted-foreground">Machine Wash</p>
              </div>
              <div>
                <h4 className="font-medium">Origin</h4>
                <p className="text-sm text-muted-foreground">Italy</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="shipping" className="space-y-4 pt-4">
            <div>
              <h4 className="font-medium">Shipping</h4>
              <p className="text-sm text-muted-foreground">
                Free standard shipping on all orders over $100. Delivery within
                3-5 business days.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Returns</h4>
              <p className="text-sm text-muted-foreground">
                We accept returns within 30 days of delivery. Items must be
                unworn, unwashed, and with the original tags attached.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
