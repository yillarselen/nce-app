"use client";

import { Button } from "../../../styles/Button.styled";
import { ListItem, List } from "./OrderSummary.styled";

export default function OrderSummary() {
  return (
    <List>
      <h3>Order Summary</h3>
      <div>
        <ListItem>
          <span>Subtotal</span>
          <strong>$249.00</strong>
        </ListItem>
        <ListItem>
          <span>Shipping</span>
          <strong>$4.00</strong>
        </ListItem>
        <ListItem>
          <span>Tax</span>
          <strong>$13.00</strong>
        </ListItem>
        <ListItem>
          <h3>Total</h3>
          <h3>$300.00</h3>
        </ListItem>
      </div>
      <Button size="lg" type="primary">
        Checkout
      </Button>
    </List>
  );
}
