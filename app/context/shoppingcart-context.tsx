"use client";

import React, { createContext, useContext, useState } from "react";
import { Product } from "../types/ProductTypes";
import { CartItem } from "../types/CartTypes";

interface ShoppingCartContextProviderProps {
  children: React.ReactNode;
}

interface ShoppingCartContext {
  cartItems: CartItem[];
  handleAddToCart: (item: Product) => void;
  handleRemoveFromCart: (item: Product) => void;
  total: number;
}

export const ShoppingCartContext = createContext<ShoppingCartContext | null>(
  null
);

export default function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[] | []>([]);
  const [total, setTotal] = useState<number>(0);

  function handleAddToCart(currentItem: Product) {
    const items = [...cartItems];
    const totalPrice = items.reduce(
      (total, obj) => obj.product.price * obj.quantity + total,
      0
    );

    const itemIndex = items.findIndex(
      (item) => item.product.id === currentItem.id
    );

    if (itemIndex !== -1) {
      let item = items[itemIndex];
      item = { ...item, quantity: item.quantity++ };
    } else {
      items.push({ product: currentItem, quantity: 1 });
    }

    setCartItems(items);
    setTotal(totalPrice + currentItem.price);
  }

  function handleRemoveFromCart(currentItem: Product) {
    const items = [...cartItems];
    const filteredItems = items.filter(
      (item) => item.product.id !== currentItem.id
    );
    const totalPrice = filteredItems.reduce(
      (total, obj) => obj.product.price * obj.quantity + total,
      0
    );

    setCartItems(filteredItems);
    setTotal(totalPrice);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        handleRemoveFromCart,
        total,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCartContext() {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error(
      "useShoppingCartContext must be used within a ShoppingCartContextProvider."
    );
  }

  return context;
}
