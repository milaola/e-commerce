import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    useFilters,
} from "../context/FilterContext";

const SearchFilter = ({
    categories,
}) => {

    const {
        searchTerm,
        setSearchTerm,
        category,
        setCategory,
        sortBy,
        setSortBy,
        clearFilters,
    } = useFilters();

    return (
        <div className="my-8 rounded-xl border bg-white p-5 shadow-sm">

            <div className="grid gap-4 md:grid-cols-4">

                {/* CONTROLLED SEARCH */}
                <div className="md:col-span-2">

                    <label
                        htmlFor="search"
                        className="mb-2 block text-sm font-medium"
                    >
                        Search
                    </label>

                    <Input
                        id="search"
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(
                                event.target.value
                            )
                        }
                    />

                </div>

                {/* CONTROLLED CATEGORY */}
                <div>

                    <label
                        htmlFor="category"
                        className="mb-2 block text-sm font-medium"
                    >
                        Category
                    </label>

                    <select
                        id="category"
                        value={category}
                        onChange={(event) =>
                            setCategory(
                                event.target.value
                            )
                        }
                        className="h-10 w-full rounded-md border px-3"
                    >

                        <option value="all">
                            All Categories
                        </option>

                        {categories.map(
                            (item) => (
                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </option>
                            )
                        )}

                    </select>

                </div>

                {/* CONTROLLED SORT */}
                <div>

                    <label
                        htmlFor="sort"
                        className="mb-2 block text-sm font-medium"
                    >
                        Sort
                    </label>

                    <select
                        id="sort"
                        value={sortBy}
                        onChange={(event) =>
                            setSortBy(
                                event.target.value
                            )
                        }
                        className="h-10 w-full rounded-md border px-3"
                    >

                        <option value="default">
                            Default
                        </option>

                        <option value="price-low">
                            Price: Low to High
                        </option>

                        <option value="price-high">
                            Price: High to Low
                        </option>

                        <option value="name">
                            Name A-Z
                        </option>

                    </select>

                </div>

            </div>

            <Button
                variant="outline"
                className="mt-4"
                onClick={clearFilters}
            >
                Clear Filters
            </Button>

        </div>
    );
};

export default SearchFilter;
