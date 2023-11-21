"use client";

import { useShoppingCartContext } from "@/app/context/shoppingcart-context";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import { IntroContainer } from "../styles/IntroContainer.styled";
import { CartList, Seperator } from "./CartContainer.styled";
import CartItem from "./components/CartItem/CartItem";
import OrderSummary from "./components/OrderSummary/OrderSummary";

export default function CartContainer() {
  const { cartItems } = useShoppingCartContext();

  console.log(cartItems);

  return (
    <Container>
      <IntroContainer>
        <h2>Shopping Cart</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </IntroContainer>

      {cartItems.length > 0 ? (
        <Flex $smBlock>
          <CartList>
            {cartItems.map((item) => (
              <CartItem cartItem={item} key={item.product.id} />
            ))}
          </CartList>
          <Seperator />
          <OrderSummary />
        </Flex>
      ) : (
        <h3 style={{ textAlign: "center" }}>Your cart is empty :(</h3>
      )}
    </Container>
  );
}
