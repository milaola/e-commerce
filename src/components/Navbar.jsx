import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-6">

         
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-700 font-bold text-white">
              S
            </div>

            <span className="text-xl font-bold text-gray-900">
              ShopEase
            </span>
          </Link>

        
          <div className="hidden items-center gap-1 md:flex">

            <Link
              to="/"
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                isActive("/")
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Home
            </Link>

            <Link
              to="/products"
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                isActive("/products")
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Products
            </Link>

            <Link
              to="/categories"
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                isActive("/categories")
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Categories
            </Link>

            <Link
              to="/orders"
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                isActive("/orders")
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Orders
            </Link>
          </div>

        
          <div className="hidden flex-1 max-w-sm lg:block">
            <Input
              placeholder="Search products..."
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  navigate(
                    `/products?search=${encodeURIComponent(
                      event.target.value
                    )}`
                  );
                }
              }}
            />
          </div>

          
          <div className="flex items-center gap-3">

            
            <Link
              to="/cart"
              className="relative rounded-md p-2 text-gray-600 transition hover:bg-gray-100 hover:text-purple-700"
              aria-label="Shopping cart"
            >
              <span className="text-xl">🛒</span>

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-purple-700 px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => navigate("/profile")}
                >
                  Account
                </Button>

                <Button
                  variant="outline"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                className="bg-purple-700 hover:bg-purple-800"
              >
                Login
              </Button>
            )}
          </div>
        </div>

        
        <div className="flex gap-2 overflow-x-auto border-t py-3 md:hidden">
          <Link
            to="/"
            className="whitespace-nowrap rounded-md bg-gray-100 px-3 py-2 text-sm"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="whitespace-nowrap rounded-md bg-gray-100 px-3 py-2 text-sm"
          >
            Products
          </Link>

          <Link
            to="/categories"
            className="whitespace-nowrap rounded-md bg-gray-100 px-3 py-2 text-sm"
          >
            Categories
          </Link>

          <Link
            to="/orders"
            className="whitespace-nowrap rounded-md bg-gray-100 px-3 py-2 text-sm"
          >
            Orders
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;