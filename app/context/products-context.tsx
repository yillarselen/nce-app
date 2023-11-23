"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../types/ProductTypes";
import debounce from "../utils/debounce";

interface ProductsContextProviderProps {
  productsData: Product[];
  children: React.ReactNode;
}

export interface ProductsContext {
  isProductsLoading: boolean;
  handleSetIsProductLoading: (val: boolean) => void;
  searchTerm?: string;
  handleSetSearchTerm: (val: string) => void;
  products: Product[];
}

export const ProductsContext = createContext<ProductsContext | null>(null);

export default function ProductsContextProvider({
  productsData,
  children,
}: ProductsContextProviderProps) {
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>(productsData);

  const updateFilteredProducts = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filtered);
  };

  const debouncedUpdateFilteredProducts = debounce(updateFilteredProducts, 500);

  const handleSetSearchTerm = (val: string) => {
    setSearchTerm(val);
  };

  const handleSetIsProductLoading = (val: boolean) => {
    setIsProductsLoading(val);
  };

  useEffect(() => {
    if (searchTerm.length > 2) {
      debouncedUpdateFilteredProducts();
    } else {
      setProducts(productsData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <ProductsContext.Provider
      value={{
        isProductsLoading,
        handleSetIsProductLoading,
        searchTerm,
        handleSetSearchTerm,
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsContextProvider."
    );
  }

  return context;
}
