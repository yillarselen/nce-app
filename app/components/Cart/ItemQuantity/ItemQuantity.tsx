"use client";

import { NumberInput, QuantitySelect } from "./ItemQuantity.styled";
import { IconButton } from "../../styles/IconButton.styled";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useState } from "react";

export default function ItemQuantity() {
  const [quantity, setQuantity] = useState(0);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 0) setQuantity(quantity - 1);
  }

  console.log(!quantity);

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
