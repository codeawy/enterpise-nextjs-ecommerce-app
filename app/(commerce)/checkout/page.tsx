"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, CreditCard, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderSummary from "@/components/order-summary";

export default function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: Implement handle submit
  };

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/cart">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Cart
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-medium mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apartment">
                      Apartment, suite, etc. (optional)
                    </Label>
                    <Input id="apartment" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select defaultValue="">
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                          <SelectItem value="fl">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" required />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-medium mb-4">Payment Method</h2>
                <Tabs defaultValue="card">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="cod">Cash on Delivery</TabsTrigger>
                  </TabsList>
                  <TabsContent value="card" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                        <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" required />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="paypal" className="pt-4">
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <p className="mb-4">
                        You will be redirected to PayPal to complete your
                        purchase securely.
                      </p>
                      <Button type="button" className="w-full">
                        Continue with PayPal
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="cod" className="pt-4">
                    <div className="flex flex-col space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Cash on Delivery</h3>
                        <p className="text-sm text-muted-foreground">
                          Pay with cash when your order is delivered to your
                          doorstep. A small COD fee may apply.
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">Secure and convenient</p>
                          <p className="text-muted-foreground">
                            No need to share payment details online
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">
                            Pay only when you receive
                          </p>
                          <p className="text-muted-foreground">
                            Inspect your items before payment
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-medium mb-4">Shipping Method</h2>
                <RadioGroup defaultValue="standard" className="space-y-3">
                  <div className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex-1">
                      <div className="flex justify-between">
                        <span>Standard Shipping</span>
                        <span>Free</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Delivery in 5-7 business days
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="flex-1">
                      <div className="flex justify-between">
                        <span>Express Shipping</span>
                        <span>$9.99</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Delivery in 2-3 business days
                      </span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="lg:hidden">
                <OrderSummary />
              </div>

              <div className="flex justify-end">
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Place Order"}
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="hidden lg:block">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
