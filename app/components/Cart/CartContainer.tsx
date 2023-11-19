"use client";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import { IntroContainer } from "../styles/IntroContainer.styled";
import { CartList, Seperator } from "./CartContainer.styled";
import CartItem from "./CartItem/CartItem";
import OrderSummary from "./OrderSummary/OrderSummary";

export default function CartContainer() {
  return (
    <Container>
      <IntroContainer>
        <h2>Shopping Cart</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </IntroContainer>
      <Flex $smBlock>
        <CartList>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </CartList>
        <Seperator />
        <OrderSummary />
      </Flex>
    </Container>
  );
}
