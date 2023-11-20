"use client";

import React, { createContext, useContext, useState } from "react";
import { Product } from "../types/ProductTypes";

interface ProductsContextProviderProps {
  children: React.ReactNode;
}

interface ProductsContext {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const ProductsContext = createContext<ProductsContext | null>(null);

export default function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<Product[] | []>([]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
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
