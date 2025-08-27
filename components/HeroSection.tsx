import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Truck, Shield, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden border-b border-gray-200">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2">
                <Star className="w-4 h-4 mr-2 fill-current" />
                New Season Collection
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Elevate Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Style Game
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Discover premium fashion pieces that define contemporary
                elegance. From timeless classics to modern trends, find your
                perfect style statement.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  10K+
                </div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  500+
                </div>
                <div className="text-sm text-gray-600">Premium Products</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">
                    4.9
                  </span>
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/products">
                  Shop Collection
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-3 bg-transparent"
              >
                {/* TODO: Add browse categories */}
                <Link href="/products?category=all">Browse Categories</Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Quick Access:</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products?category=new"
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  New Arrivals
                </Link>
                <Link
                  href="/products?featured=true"
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Best Sellers
                </Link>
                <Link
                  href="/products?sale=true"
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Sale Items
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/hero-section-placeholder.png"
                  alt="Fashion model showcasing premium clothing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  //   priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 animate-bounce">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Free Shipping
                    </div>
                    <div className="text-xs text-gray-600">On orders $50+</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 animate-bounce delay-1000">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Best Prices
                    </div>
                    <div className="text-xs text-gray-600">Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
