"use client";

import { NumberInput, QuantitySelect } from "./ItemQuantity.styled";
import { IconButton } from "../../../styles/IconButton.styled";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useState } from "react";

interface ItemQuantityProps {
  itemQuantity: number;
}

export default function ItemQuantity({ itemQuantity }: ItemQuantityProps) {
  const [quantity, setQuantity] = useState(itemQuantity);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 0) setQuantity(quantity - 1);
  }

  return (
    <>
      <NumberInput>
        <IconButton disabled={!quantity} onClick={decrement} size="md" $border>
          <PiMinus />
        </IconButton>
        <span>{quantity}</span>
        <IconButton onClick={increment} size="md" $border>
          <PiPlus />
        </IconButton>
      </NumberInput>
      <QuantitySelect>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </QuantitySelect>
    </>
  );
}
