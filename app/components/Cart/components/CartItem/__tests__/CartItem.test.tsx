import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import CartItem from "../CartItem";
import {
  customRender,
  mockProductWithQuantity,
  cartProps,
  productsProps,
  favoriteProps,
} from "@/__utils__/test-utils";
const { describe, expect, it } = require("@jest/globals");

describe("Products component", () => {
  it("shows CartItem component is on the screen", () => {
    customRender(<CartItem cartItem={mockProductWithQuantity} />, {
      cartProps,
      productsProps,
      favoriteProps,
    });
    const cartItem = screen.getByRole("cart-item");
    expect(cartItem).toBeInTheDocument();
  });

  it("renders cart item specifications", () => {
    customRender(<CartItem cartItem={mockProductWithQuantity} />, {
      cartProps,
      productsProps,
      favoriteProps,
    });
    const productName = screen.getByRole("heading", { level: 3 });
    const productImage = screen.getByAltText(
      mockProductWithQuantity.product.name
    );
    const productPrice = screen.getByText(
      `$${mockProductWithQuantity.product.price}`
    );
    const itemQuantity = screen.getByTestId("quantity");

    expect(productName).toBeInTheDocument();
    expect(productName).toHaveTextContent(mockProductWithQuantity.product.name);
    expect(productPrice).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
    expect(itemQuantity).toBeInTheDocument();
  });

  it("renders remove button", () => {
    customRender(<CartItem cartItem={mockProductWithQuantity} />, {
      cartProps,
      productsProps,
      favoriteProps,
    });
    const removeProductButton = screen.getByRole("button", {
      name: /remove-product-button/i,
    });

    expect(removeProductButton).toHaveTextContent("Remove");
  });

  it("removes product", () => {
    const click = cartProps.value.removeItemFromCart;
    customRender(<CartItem cartItem={mockProductWithQuantity} />, {
      cartProps,
      productsProps,
      favoriteProps,
    });
    const removeProductButton = screen.getByRole("button", {
      name: /remove-product-button/i,
    });

    fireEvent.click(removeProductButton);
    expect(click).toBeCalled();
  });
});
