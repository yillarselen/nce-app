import React from "react";
import { waitFor, screen } from "@testing-library/react";
import Products from "../Products";
import {
  favoriteProps,
  productsProps,
  cartProps,
  customRender,
  mockProduct,
  handleLoading,
} from "@/__utils__/test-utils";
const { describe, expect, test } = require("@jest/globals");

describe("Products component", () => {
  it("shows page title", async () => {
    customRender(<Products />, { favoriteProps, cartProps, productsProps });

    await waitFor(() => {
      expect(screen.getByTestId("header-title")).toHaveTextContent(
        "Collection"
      );
    });
  });

  it("checks if the loading spinner is rendered", async () => {
    handleLoading();
    customRender(<Products />, { favoriteProps, cartProps, productsProps });
    const loadingSpinner = screen.getByTestId("loading-spinner");

    await waitFor(() => {
      expect(loadingSpinner).toBeInTheDocument();
    });
  });

  it("shows ProductList when products are available", async () => {
    customRender(<Products />, { favoriteProps, cartProps, productsProps });
    const productList = screen.getByTestId("product-list");
    expect(productList).toBeInTheDocument();
  });

  it("checks if Load More button is not rendered", async () => {
    customRender(<Products />, { favoriteProps, cartProps, productsProps });

    const loadMoreButton = screen.queryByText("Load More");
    expect(loadMoreButton).not.toBeInTheDocument();
  });

  it("checks if Load More button is rendered", async () => {
    const products = Array.from(Array(10).keys()).map((item) => {
      return { ...mockProduct, id: item };
    });
    productsProps.value.products = products;
    customRender(<Products />, {
      favoriteProps,
      cartProps,
      productsProps,
    });

    const loadMoreButton = screen.getByTestId("loadmore-button");
    expect(loadMoreButton).toBeInTheDocument();
  });
});
