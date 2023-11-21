"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../types/ProductTypes";
import { CartItem } from "../types/CartTypes";

interface ShoppingCartContextProviderProps {
  children: React.ReactNode;
}

interface ShoppingCartContext {
  cartItems: CartItem[];
  addToCart: (item: Product) => void;
  removeItemFromCart: (item: Product) => void;
  removeQuantityFromCart: (item: Product) => void;
  changeItemQuantity: (item: Product, quantity: number) => void;
  total: number;
  itemQuantity: number;
  isCartLoading: boolean;
}

export const ShoppingCartContext = createContext<ShoppingCartContext | null>(
  null
);

const calcQuantity = (items: CartItem[]) => {
  return items.reduce((total, obj) => obj.quantity + total, 0);
};

const calcTotalPrice = (items: CartItem[]) => {
  const sum = items.reduce(
    (total, obj) => obj.product.price * obj.quantity + total,
    0
  );

  return Math.round(sum * 100) / 100;
};

export default function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[] | []>([]);
  const [total, setTotal] = useState<number>(0);
  const [itemQuantity, setItemQuantity] = useState<number>(0);
  const [isCartLoading, setIsCartLoading] = useState<boolean>(true);

  function addToCart(currentItem: Product) {
    const items = [...cartItems];

    const itemIndex = items.findIndex(
      (item) => item.product.id === currentItem.id
    );

    if (itemIndex !== -1) {
      let item = items[itemIndex];
      item.quantity += 1;
    } else {
      items.push({ product: currentItem, quantity: 1 });
    }

    updateState(items);
    localStorage.setItem("cartItems", JSON.stringify(items));
  }

  function removeQuantityFromCart(currentItem: Product) {
    let items = [...cartItems];
    const item = items.find((item) => item.product.id === currentItem.id);

    if (item) {
      item.quantity -= 1;

      if (item.quantity === 0) {
        items = items.filter((item) => item.product.id !== currentItem.id);
      }

      updateState(items);
      localStorage.setItem("cartItems", JSON.stringify(items));
    }
  }

  function removeItemFromCart(currentItem: Product) {
    const items = [...cartItems];
    let filteredItems = items.filter(
      (item) => item.product.id !== currentItem.id
    );

    updateState(filteredItems);
    localStorage.setItem("cartItems", JSON.stringify(items));
  }

  function changeItemQuantity(currentItem: Product, quantity: number) {
    let items = [...cartItems];
    const item = items.find((item) => item.product.id === currentItem.id);

    if (item) {
      item.quantity = quantity;

      updateState(items);
      localStorage.setItem("cartItems", JSON.stringify(items));
    }
  }

  function updateState(items: CartItem[]) {
    const totalPrice = calcTotalPrice(items);
    const quantity = calcQuantity(items);

    setCartItems(items);
    setTotal(totalPrice);
    setItemQuantity(quantity);
    setIsCartLoading(false);
  }

  useEffect(() => {
    const localStorageItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );

    updateState(localStorageItems);
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItemFromCart,
        removeQuantityFromCart,
        changeItemQuantity,
        total,
        itemQuantity,
        isCartLoading,
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
