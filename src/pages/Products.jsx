import {useEffect,useMemo,useState,} from "react";

import ProductList from "../components/ProductList";
import SearchFilter from "../components/SearchFilter";

import {useFilters,} from "../context/FilterContext";



const Products = () => {

    const [products, setProducts] =
        useState([]);

    const [categories, setCategories] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    const {
        searchTerm,
        category,
        sortBy,
    } = useFilters();

    useEffect(() => {

        const fetchProducts =
            async () => {

                try {

                    setLoading(true);
                    setError("");

                    const response =
                        await fetch(
                            "https://dummyjson.com/products"
                        );

                    if (!response.ok) {
                        throw new Error(
                            "Failed to fetch products"
                        );
                    }

                    const data = await response.json();

                    setProducts(data.products);

                    const uniqueCategories =
                        [
                            ...new Set(
                                data.products.map(
                                    (product) =>
                                        product.category
                                )
                            ),
                        ];

                    setCategories(
                        uniqueCategories
                    );

                } catch (err) {

                    setError(
                        err.message ||
                        "Something went wrong."
                    );

                } finally {

                    setLoading(false);

                }
            };

        fetchProducts();

    }, []);

    const filteredProducts =
        useMemo(() => {

            let result = [...products];

       
            if (searchTerm.trim()) {

                result = result.filter(
                    (product) =>
                        product.title
                            .toLowerCase()
                            .includes(
                                searchTerm.toLowerCase()
                            )
                );
            }

          
            if (category !== "all") {

                result = result.filter(
                    (product) =>
                        product.category ===
                        category
                );
            }

           
            if (sortBy === "price-low") {

                result.sort(
                    (a, b) =>
                        a.price - b.price
                );
            }

            if (sortBy === "price-high") {

                result.sort(
                    (a, b) =>
                        b.price - a.price
                );
            }

            if (sortBy === "name") {

                result.sort((a, b) =>
                    a.title.localeCompare(
                        b.title
                    )
                );
            }

            return result;

        }, [
            products,
            searchTerm,
            category,
            sortBy,
        ]);

    return (
        <main className="mx-auto max-w-7xl px-4 py-10">

            <h1 className="text-3xl font-bold">
                Our Products
            </h1>

            <p className="mt-2 text-gray-500">
                Browse our collection.
            </p>

            <SearchFilter
                categories={categories}
            />

            {loading && (
                <div className="py-16 text-center">
                    Loading products...
                </div>
            )}

            {error && (
                <div className="rounded-lg bg-red-50 p-6 text-center text-red-600">
                    {error}
                </div>
            )}

            {!loading && !error && (
                <ProductList
                    products={filteredProducts}
                />
            )}

        </main>
    );
};

export default Products;
