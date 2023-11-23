import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "@/app/components/styles/Theme";
import { ProductsContext } from "@/app/context/products-context";
import { ShoppingCartContext } from "@/app/context/shoppingcart-context";
import { FavoriteContext } from "@/app/context/favorite-context";

interface CustomRenderOptions extends RenderOptions {
  productsProps?: any;
  cartProps?: any;
  favoriteProps?: any;
}

export const customRender = (
  ui: React.ReactElement,
  {
    favoriteProps,
    cartProps,
    productsProps,
    ...renderOptions
  }: CustomRenderOptions = {}
) => {
  return render(
    <ThemeProvider theme={theme}>
      <ProductsContext.Provider {...productsProps}>
        <FavoriteContext.Provider {...favoriteProps}>
          <ShoppingCartContext.Provider {...cartProps}>
            {ui}
          </ShoppingCartContext.Provider>
        </FavoriteContext.Provider>
      </ProductsContext.Provider>
    </ThemeProvider>,
    renderOptions
  );
};

// Sample data for testing
export const mockProducts = [
  {
    id: 1,
    name: "Men's Ski Jacket",
    description: "A high-performance ski jacket for men",
    price: 299.99,
    image: "https://source.unsplash.com/random/300×300",
    category: "Ski",
    brand: "The North Face",
    sku: "TNF-SKI-MJ01",
  },
];

export const mockProduct = {
  id: 1,
  name: "Men's Ski Jacket",
  description: "A high-performance ski jacket for men",
  price: 299.99,
  image: "https://source.unsplash.com/random/300×300",
  category: "Ski",
  brand: "The North Face",
  sku: "TNF-SKI-MJ01",
};

export const mockProductWithQuantity = {
  product: {
    id: 1,
    name: "Men's Ski Jacket",
    description: "A high-performance ski jacket for men",
    price: 299.99,
    image: "https://source.unsplash.com/random/300×300",
    category: "Ski",
    brand: "The North Face",
    sku: "TNF-SKI-MJ01",
  },
  quantity: 1,
};

export const favoriteProps = {
  value: {
    favoriteItems: mockProducts,
  },
};
export const cartProps = {
  value: {
    cartItems: [mockProductWithQuantity],
    addToCart: jest.fn(),
    removeItemFromCart: jest.fn(),
  },
};
export const productsProps = {
  value: {
    products: mockProducts,
    isProductsLoading: true,
    handleSetIsProductLoading: jest.fn(),
    handleSetSearchTerm: jest.fn(),
  },
};

export const handleLoading = () => {
  productsProps.value.handleSetIsProductLoading = jest
    .fn()
    .mockImplementation((val) => {
      productsProps.value.isProductsLoading = val;
    });
};
