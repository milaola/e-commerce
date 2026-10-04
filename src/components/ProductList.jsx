import ProductCard from "./ProductCard";

const ProductList = ({
  products,
}) => {

  if (products.length === 0) {
    return (
      <div className="py-16 text-center">

        <h2 className="text-xl font-semibold">
          No products found
        </h2>

        <p className="mt-2 text-gray-500">
          Try changing your search or filters.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>
  );
};

export default ProductList
