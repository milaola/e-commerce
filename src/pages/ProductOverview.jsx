import {useOutletContext} from "react-router-dom";

const ProductOverview = () => {

  const { product } =
    useOutletContext();

  return (
    <div>

      <h2 className="text-2xl font-bold">Overview</h2>

      <p className="mt-4 text-gray-600">
        {product.description}
      </p>

    </div>
  );
};

export default ProductOverview
