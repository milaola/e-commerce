
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ProductOverview from "./pages/ProductOverview";
import ProductReviews from "./pages/ProductReviews";
import ProductSpecifications from "./pages/ProductSpecifications";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

       
        <Route
          path="/"
          element={<Home />}
        />

        
        <Route
          path="/products"
          element={<Products />}
        />

      
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        >
          <Route
            index
            element={<ProductOverview />}
          />

          <Route
            path="overview"
            element={<ProductOverview />}
          />

          <Route
            path="reviews"
            element={<ProductReviews />}
          />

          <Route
            path="specifications"
            element={<ProductSpecifications />}
          />
        </Route>

       
        <Route
          path="/cart"
          element={<Cart />}
        />

      
        <Route
          path="/login"
          element={<Login />}
        />

        
        <Route element={<ProtectedRoute />}>
          <Route
            path="/checkout"
            element={<Checkout />}
          />
        </Route>

        
        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center">
              <h1 className="text-4xl font-bold">
                404 - Page Not Found
              </h1>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

