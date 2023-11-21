"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../types/ProductTypes";

interface FavoriteContextProviderProps {
  children: React.ReactNode;
}

interface FavoriteContext {
  favoriteItems: Product[];
  toggleFavorite: (item: Product) => void;
  isFavoritesLoading: boolean;
}

export const FavoriteContext = createContext<FavoriteContext | null>(null);

export default function FavoriteContextProvider({
  children,
}: FavoriteContextProviderProps) {
  const [favoriteItems, setFavoriteItems] = useState<Product[] | []>([]);
  const [isFavoritesLoading, setIsFavoritesLoading] = useState(true);

  function toggleFavorite(currentItem: Product) {
    const items = [...favoriteItems];

    const itemIsSelected = items.some(
      (element) => element.id === currentItem.id
    );

    if (itemIsSelected) {
      const index = items.findIndex((element) => element.id === currentItem.id);

      items.splice(index, 1);
    } else {
      items.push(currentItem);
    }

    setFavoriteItems(items);
    localStorage.setItem("favoriteItems", JSON.stringify(items));
  }

  useEffect(() => {
    const localStorageItems = JSON.parse(
      localStorage.getItem("favoriteItems") || "[]"
    );

    setFavoriteItems(localStorageItems);
    setIsFavoritesLoading(false);
  }, []);

  return (
    <FavoriteContext.Provider
      value={{
        favoriteItems,
        toggleFavorite,
        isFavoritesLoading,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavoriteContext() {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error(
      "useFavoriteContext must be used within a FavoriteContextProvider."
    );
  }

  return context;
}
