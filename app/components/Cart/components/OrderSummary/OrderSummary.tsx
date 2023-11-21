"use client";

import { useShoppingCartContext } from "@/app/context/shoppingcart-context";
import { Button } from "../../../styles/Button.styled";
import { ListItem, List } from "./OrderSummary.styled";

export default function OrderSummary() {
  const { total } = useShoppingCartContext();
  return (
    <List>
      <h3>Order Summary</h3>
      <div>
        <ListItem>
          <span>Subtotal</span>
          <strong>${total}</strong>
        </ListItem>
        <ListItem>
          <span>Shipping</span>
          <strong>$5.00</strong>
        </ListItem>
        <ListItem>
          <h3>Total</h3>
          <h3>{total + 5}</h3>
        </ListItem>
      </div>
      <Button size="lg" type="primary">
        Checkout
      </Button>
    </List>
  );
}
