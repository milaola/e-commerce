import { Card, CardContent, CardFooter, } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

import { useCart } from "../context/CartContext";

const ProductCard = ({
  product,
}) => {

  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <Link
        to={`/products/${product.id}`}
      >
        <div className="flex h-64 items-center justify-center p-6">

          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />

        </div>
      </Link>

      <CardContent>

        <Badge>
          {product.category}
        </Badge>

        <Link
          to={`/products/${product.id}`}
        >
          <h2 className="mt-3 line-clamp-2 font-semibold hover:text-primary">
            {product.title}
          </h2>
        </Link>

        <p className="mt-3 text-2xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>

      </CardContent>

      <CardFooter>

        <Button
          className="w-full"
          onClick={() =>
            addToCart(product)
          }
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>

      </CardFooter>

    </Card>
  );
};

export default ProductCard;
