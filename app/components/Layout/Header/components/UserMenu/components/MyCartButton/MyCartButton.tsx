import React, { useRef, useEffect, useCallback, useState } from "react";
import { CartContainer, CartFooter } from "./MyCartButton.styled";
import CartItem from "@/app/components/Cart/components/CartItem/CartItem";
import { IconButton } from "@/app/components/styles/IconButton.styled";
import { PiShoppingCart } from "react-icons/pi";
import {
  ShoppingCartCount,
  CartButton,
  CartButtonLink,
} from "./MyCartButton.styled";
import { useTheme } from "styled-components";
import Link from "next/link";
import { FlexBetween } from "@/app/components/styles/Flex.styled";
import { Button, ButtonGroup } from "@/app/components/styles/Button.styled";
import { useShoppingCartContext } from "@/app/context/shoppingcart-context";

export default function CartContent() {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const { cartItems, total } = useShoppingCartContext();

  const toggleCart = (event: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", toggleCart);
    } else {
      document.removeEventListener("mousedown", toggleCart);
    }

    return () => {
      document.removeEventListener("mousedown", toggleCart);
    };
  }, [isOpen, toggleCart]);

  return (
    <div ref={cartRef}>
      <CartButton>
        <IconButton
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          type={theme.buttons.nav}
        >
          <PiShoppingCart />
          {/* Check count */}
          <ShoppingCartCount>{cartItems.length}</ShoppingCartCount>
        </IconButton>
      </CartButton>

      <CartButtonLink>
        <Link href="/cart" passHref legacyBehavior>
          <IconButton as="a" type={theme.buttons.nav}>
            <PiShoppingCart />
            <ShoppingCartCount>{cartItems.length}</ShoppingCartCount>
          </IconButton>
        </Link>
      </CartButtonLink>
      {isOpen && (
        <CartContainer>
          <h2>Shopping Cart</h2>
          <div>
            {cartItems.length ? (
              cartItems.map((item) => (
                <CartItem cartItem={item} size="sm" key={item.product.id} />
              ))
            ) : (
              <h3>Your cart is empty :(</h3>
            )}
          </div>
          <CartFooter>
            <FlexBetween>
              <span>Total</span>
              <span>${total}</span>
            </FlexBetween>
            <ButtonGroup>
              <Link href="/cart" passHref legacyBehavior>
                <Button
                  onClick={() => setIsOpen(false)}
                  as="a"
                  type="secondary"
                  size="lg"
                >
                  View Cart
                </Button>
              </Link>

              <Link href="/" passHref legacyBehavior>
                <Button
                  onClick={() => setIsOpen(false)}
                  as="a"
                  type="primary"
                  size="lg"
                >
                  Checkout
                </Button>
              </Link>
            </ButtonGroup>
          </CartFooter>
        </CartContainer>
      )}
    </div>
  );
}
