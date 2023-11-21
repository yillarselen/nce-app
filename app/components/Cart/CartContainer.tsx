"use client";

import { useShoppingCartContext } from "@/app/context/shoppingcart-context";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import { IntroContainer } from "../styles/IntroContainer.styled";
import { CartList, Seperator } from "./CartContainer.styled";
import CartItem from "./components/CartItem/CartItem";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import LoadingSpinner from "../Layout/UI/Spinner/Spinner";

export default function CartContainer() {
  const { cartItems, isCartLoading } = useShoppingCartContext();

  return (
    <Container>
      <IntroContainer>
        <h2>Shopping Cart</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </IntroContainer>
      {!isCartLoading && cartItems?.length > 0 ? (
        <Flex $smBlock>
          <CartList>
            {cartItems.map((item) => (
              <CartItem cartItem={item} key={item.product.id} />
            ))}
          </CartList>
          <Seperator />
          <OrderSummary />
        </Flex>
      ) : isCartLoading ? (
        <LoadingSpinner />
      ) : (
        <h3 style={{ textAlign: "center" }}>Your cart is empty :(</h3>
      )}
    </Container>
  );
}
