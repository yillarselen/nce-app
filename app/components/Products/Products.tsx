"use client";

import React from "react";
import { Container } from "../styles/Container.styled";
import { IntroContainer } from "../styles/IntroContainer.styled";
import ProductList from "./ProductList/ProductList";

export default function Products() {
  return (
    <Container>
      <IntroContainer>
        <h2>Collection</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </IntroContainer>
      <ProductList />
    </Container>
  );
}
