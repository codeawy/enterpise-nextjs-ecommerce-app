import { products } from "@/data/products";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

export default function OrderSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {products.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">1 ×</span>
                <span className="text-sm">{item.name}</span>
              </div>
              <span className="text-sm font-medium">
                ${(item.price * 1).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${0}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>Calculated at checkout</span>
        </div>
        <Separator />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${0}</span>
        </div>
      </CardContent>
    </Card>
  );
}
