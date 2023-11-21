"use client";

import React, { createContext, useContext, useState } from "react";
import { Product } from "../types/ProductTypes";

interface ProductsContextProviderProps {
  children: React.ReactNode;
}

interface ProductsContext {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  isProductsLoading: boolean;
  setIsProductsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductsContext = createContext<ProductsContext | null>(null);

export default function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [isProductsLoading, setIsProductsLoading] = useState(true);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        isProductsLoading,
        setIsProductsLoading,
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
