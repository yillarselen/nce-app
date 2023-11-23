import React from "react";
import { screen } from "@testing-library/react";
import ProductCard from "../ProductCard";
import {
  customRender,
  productsProps,
  mockProduct,
  cartProps,
  favoriteProps,
} from "@/__utils__/test-utils";
const { describe, expect, it } = require("@jest/globals");

describe("Products component", () => {
  it("renders ProductCard component", () => {
    customRender(<ProductCard product={mockProduct} />, {
      productsProps,
      cartProps,
      favoriteProps,
    });
    const productCard = screen.getByTestId("product-card");
    expect(productCard).toBeInTheDocument();
  });

  it("renders product specifications", () => {
    customRender(<ProductCard product={mockProduct} />, {
      productsProps,
      cartProps,
      favoriteProps,
    });
    const productName = screen.getByRole("heading", { level: 3 });
    const brandName = screen.getByRole("heading", { level: 4 });
    const productPrice = screen.getByText(`$${mockProduct.price}`);
    const addProductButton = screen.getByRole("button", {
      name: /add-product-button/i,
    });

    expect(productName).toBeInTheDocument();
    expect(addProductButton).toBeInTheDocument();
    expect(addProductButton).toHaveTextContent("Add to bag");
    expect(productName).toHaveTextContent(mockProduct.name);
    expect(brandName).toHaveTextContent(mockProduct.brand);
    expect(productPrice).toBeInTheDocument();
  });
});
