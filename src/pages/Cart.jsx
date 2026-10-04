import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { useCart } from "../context/CartContext";

const Cart = () => {

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
  } = useCart();

  const navigate =
    useNavigate();

  if (cartItems.length === 0) {

    return (
      <main className="py-20 text-center">

        <h1 className="text-3xl font-bold">
          Your Cart is Empty
        </h1>

        <Button
          asChild
          className="mt-6"
        >
          <Link to="/products">
            Browse Products
          </Link>
        </Button>

      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Shopping Cart
        </h1>

        <Button
          variant="destructive"
          onClick={clearCart}
        >
          Clear Cart
        </Button>

      </div>

      <div className="mt-8 space-y-4">

        {cartItems.map((item) => (

          <Card key={item.id}>

            <CardContent className="flex flex-col gap-5 p-5 md:flex-row md:items-center">

              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-24 object-contain"
              />

              <div className="flex-1">

                <h2 className="font-semibold">
                  {item.title}
                </h2>

                <p className="mt-2">
                  ${item.price.toFixed(2)}
                </p>

              </div>

              <div className="flex items-center gap-3">

                <Button
                  variant="outline"
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity - 1
                    )
                  }
                >
                  -
                </Button>

                <span>
                  {item.quantity}
                </span>

                <Button
                  variant="outline"
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity + 1
                    )
                  }
                >
                  +
                </Button>

              </div>

              <Button
                variant="destructive"
                onClick={() =>
                  removeFromCart(
                    item.id
                  )
                }
              >
                Remove
              </Button>

            </CardContent>

          </Card>

        ))}

      </div>

      <div className="mt-10 rounded-xl border bg-gray-50 p-6">

        <div className="flex justify-between">

          <span className="text-xl">
            Total
          </span>

          <span className="text-2xl font-bold">
            ${cartTotal.toFixed(2)}
          </span>

        </div>

        <Button
          className="mt-6 w-full"
          onClick={() =>
            navigate("/checkout")
          }
        >
          Proceed to Checkout
        </Button>

      </div>

    </main>
  );
};

export default Cart
