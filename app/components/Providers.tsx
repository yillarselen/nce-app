"use client";

import { ThemeProvider } from "styled-components";
import { Layout } from "./styles/Layout.styled";
import StyledComponentsRegistry from "../lib/registry";
import GlobalStyles from "./styles/Global";
import theme from "./styles/Theme";
import ProductsContextProvider from "../context/products-context";
import ShoppingCartContextProvider from "../context/shoppingcart-context";
import ToastProvider from "../lib/ToastProvider";
import FavoriteContextProvider from "../context/favorite-context";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ProductsContextProvider>
          <FavoriteContextProvider>
            <ShoppingCartContextProvider>
              <ToastProvider>
                <Layout>{children}</Layout>
              </ToastProvider>
            </ShoppingCartContextProvider>
          </FavoriteContextProvider>
        </ProductsContextProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
