"use client";

import React, { useEffect } from "react";
import { Container } from "../styles/Container.styled";
import { IntroContainer } from "../styles/IntroContainer.styled";
import ProductList from "./components/ProductList/ProductList";
import { useProductsContext } from "@/app/context/products-context";
import { Product } from "@/app/types/ProductTypes";

interface ProductsProps {
  data: Product[];
}

export default function Products({ data }: ProductsProps) {
  const { setProducts } = useProductsContext();

  useEffect(() => {
    setProducts(data);
  }, []);

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
