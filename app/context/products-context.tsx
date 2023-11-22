"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../types/ProductTypes";
import debounce from "../utils/debounce";

interface ProductsContextProviderProps {
  productsData: Product[];
  children: React.ReactNode;
}

interface ProductsContext {
  isProductsLoading: boolean;
  setIsProductsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
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
        setIsProductsLoading,
        searchTerm,
        setSearchTerm,
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
