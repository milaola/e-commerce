import {useEffect,useState,} from "react";

import {NavLink,Outlet,useParams,} from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { useCart } from "../context/CartContext";

const ProductDetails = () => {

  const { id } =useParams();

  const [product, setProduct] =useState(null);

  const [loading, setLoading] =useState(true);

  const [error, setError] =useState("");

  const { addToCart } =useCart();

  useEffect(() => {

    const fetchProduct =
      async () => {

        try {

          setLoading(true);

          const response =
            await fetch(
              `https://dummyjson.com/products/${id}`
            );

          if (!response.ok) {
            throw new Error(
              "Product not found."
            );
          }

          const data =
            await response.json();

          setProduct(data);

        } catch (err) {

          setError(
            err.message
          );

        } finally {

          setLoading(false);

        }
      };

    fetchProduct();

  }, [id]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading product...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">

      <div className="grid gap-10 md:grid-cols-2">

        <div className="flex min-h-[400px] items-center justify-center rounded-xl border bg-white p-10">

          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-[350px] object-contain"
          />

        </div>

        <div>

          <Badge>
            {product.category}
          </Badge>

          <h1 className="mt-4 text-3xl font-bold">
            {product.title}
          </h1>

          <p className="mt-4 text-3xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>

          <p className="mt-6 leading-7 text-gray-600">
            {product.description}
          </p>

          <Button
            className="mt-8"
            onClick={() =>
              addToCart(product)
            }
          >
            Add to Cart
          </Button>

        </div>

      </div>

      <div className="mt-16">

        <nav className="flex gap-6 border-b">

          <NavLink to="overview">
            Overview
          </NavLink>

          <NavLink to="reviews">
            Reviews
          </NavLink>

          <NavLink to="specifications">
            Specifications
          </NavLink>

        </nav>

        <div className="py-8">

          <Outlet
            context={{
              product,
            }}
          />

        </div>

      </div>

    </main>
  )
}

export default ProductDetails
