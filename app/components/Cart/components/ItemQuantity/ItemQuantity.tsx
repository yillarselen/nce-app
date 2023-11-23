"use client";

import { NumberInput, QuantitySelect } from "./ItemQuantity.styled";
import { IconButton } from "../../../styles/IconButton.styled";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useState } from "react";
import { useShoppingCartContext } from "@/app/context/shoppingcart-context";
import { CartItem } from "@/app/types/CartTypes";

interface ItemQuantityProps {
  item: CartItem;
}

const options = 10;

function getOptions() {
  return [...Array(options)].map((_, i) => {
    const num = i + 1;
    return (
      <option value={num} key={num}>
        {num}
      </option>
    );
  });
}

export default function ItemQuantity({ item }: ItemQuantityProps) {
  const { addToCart, removeQuantityFromCart, changeItemQuantity } =
    useShoppingCartContext();

  function increment() {
    addToCart(item.product);
  }

  function decrement() {
    removeQuantityFromCart(item.product);
  }

  function changeQuantity(val: string) {
    changeItemQuantity(item.product, Number(val));
  }

  return (
    <div>
      <NumberInput>
        <IconButton
          disabled={!item.quantity}
          onClick={decrement}
          size="md"
          $border
        >
          <PiMinus />
        </IconButton>
        <span data-testid="quantity">{item.quantity}</span>
        <IconButton onClick={increment} size="md" $border>
          <PiPlus />
        </IconButton>
      </NumberInput>
      <QuantitySelect
        defaultValue={item.quantity}
        onChange={(event) => changeQuantity(event.target.value)}
      >
        {getOptions()}
      </QuantitySelect>
    </div>
  );
}
