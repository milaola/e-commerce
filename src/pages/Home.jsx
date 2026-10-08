import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main>

      <section className="bg-gradient-to-r from-primary to-purple-600 px-4 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">

            <p className="font-medium uppercase tracking-wider">
              Welcome to ShopEase
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Click Shop Now and start Shopping
            </h1>

            <p className="mt-6 text-lg text-white/80">
              Discover quality products at great prices.
            </p>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8 bg-green-700"
            >
              <Link to="/products">
                Shop Now
              </Link>
            </Button>

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">

        <h2 className="text-center text-3xl font-bold">
          Why Shop With Us?
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <Card className="transition hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">
                Quality Products
              </h3>

              <p className="mt-3 text-gray-500">
                Discover a wide range of quality products.
              </p>
            </CardContent>
          </Card>

          <Card className="transition hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">
                Easy Shopping
              </h3>

              <p className="mt-3 text-gray-500">
                Search, filter and shop with ease.
              </p>
            </CardContent>
          </Card>

          <Card className="transition hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">
                Secure Checkout
              </h3>

              <p className="mt-3 text-gray-500">
                Enjoy a simple and protected checkout.
              </p>

              <Button
                asChild
                size="lg"
                variant="secondary"
                className="mt-8 bg-black text-white"
              >
                <Link to="/products">
                  Shop Now
                </Link>
              </Button>
            </CardContent>
          </Card>

        </div>
      </section>

    </main>
  );
};

export default Home
