import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {Card,CardContent} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useCart } from "../context/CartContext";

const Checkout = () => {
  const {
    cartItems,
    cartTotal,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.address.trim() ||
      !formData.city.trim() ||
      !formData.phone.trim()
    ) {
      setError("Please complete all fields.");
      return;
    }

    setError("");
    setSuccess(true);
    clearCart();
  };

  if (success) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-600">
            Order Placed Successfully!
          </h1>

          <p className="mt-3 text-gray-500">
            Thank you for shopping with ShopEase.
          </p>

          <Button
            className="mt-6"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">
        Checkout
      </h1>

      <div className="mt-8 grid gap-8 md:grid-cols-2">

        {/* Checkout Form */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">
              Shipping Information
            </h2>

            {error && (
              <div className="mt-4 rounded-md bg-red-50 p-3 text-red-600">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Address
                </label>

                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  City
                </label>

                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone
                </label>

                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
              >
                Place Order
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">
              Order Summary
            </h2>

            {cartItems.length === 0 ? (
              <p className="mt-6 text-gray-500">
                Your cart is empty.
              </p>
            ) : (
              <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-4"
                  >
                    <span className="text-sm">
                      {item.title} × {item.quantity}
                    </span>

                    <span className="font-medium">
                      $
                      {(
                        item.price * item.quantity
                      ).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 border-t pt-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>

                <span>
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </main>
  )
}

export default Checkout
