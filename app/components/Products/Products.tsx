"use client";

import React, { useEffect } from "react";
import { Container } from "../styles/Container.styled";
import { IntroContainer } from "../styles/IntroContainer.styled";
import ProductList from "./components/ProductList/ProductList";
import { useProductsContext } from "@/app/context/products-context";
import LoadingSpinner from "../Layout/UI/Spinner/Spinner";
import { FlexCenter } from "../styles/Flex.styled";

export default function Products() {
  const { products, isProductsLoading, handleSetIsProductLoading, searchTerm } =
    useProductsContext();

  useEffect(() => {
    if (products && products.length > 0) handleSetIsProductLoading(false);
  }, [products, handleSetIsProductLoading]);

  return (
    <Container>
      <IntroContainer>
        <h2 data-testid="header-title">Collection</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </IntroContainer>
      {isProductsLoading ? (
        <LoadingSpinner />
      ) : products.length > 0 ? (
        <ProductList products={products} loading={isProductsLoading} />
      ) : (
        <FlexCenter>
          <h3>
            Your search for &quot;{searchTerm}&quot; did not return any results.
          </h3>
        </FlexCenter>
      )}
    </Container>
  );
}
