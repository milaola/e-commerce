import {
  createContext,
  useContext,
  useState,
} from "react";

const FilterContext =
  createContext();

export const FilterProvider = ({
  children,
}) => {

  const [searchTerm, setSearchTerm] =
    useState("");

  const [category, setCategory] =
    useState("all");

  const [sortBy, setSortBy] =
    useState("default");

  const clearFilters = () => {
    setSearchTerm("");
    setCategory("all");
    setSortBy("default");
  };

  return (
    <FilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        category,
        setCategory,
        sortBy,
        setSortBy,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {

  const context =
    useContext(FilterContext);

  if (!context) {
    throw new Error(
      "useFilters must be used inside FilterProvider"
    );
  }

  return context;
};
