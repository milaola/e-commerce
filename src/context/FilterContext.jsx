import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("all");
    const [sortBy, setSortBy] = useState("default");

    const value = {
        searchTerm,
        setSearchTerm,
        category,
        setCategory,
        sortBy,
        setSortBy,
    };

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilters = () => {
    const context = useContext(FilterContext);

    if (!context) {
        throw new Error(
            "useFilters must be used inside a FilterProvider"
        );
    }

    return context;
};