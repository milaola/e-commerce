import { useOutletContext } from "react-router-dom";

const ProductSpecifications = () => {
  const { product } = useOutletContext();

  return (
    <div>
      <h2 className="text-2xl font-bold">
        Specifications
      </h2>

      <div className="flex justify-between p-4">
        <span>Product ID</span>
        <span>{product.id}</span>
      </div>

      <div className="flex justify-between p-4">
        <span>Category</span>
        <span>{product.category}</span>
      </div>

      <div className="flex justify-between p-4">
        <span>Price</span>
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default ProductSpecifications;
