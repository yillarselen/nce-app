"use client";

import React from "react";
import { Container } from "../styles/Container.styled";
import { Grid } from "../styles/Grid.styled";
import StyledProductCard from "../ProductCard/ProductCard";

export default function ProductList() {
  return (
    <Container>
      <Grid>
        <StyledProductCard />
        <StyledProductCard />
        <StyledProductCard />
        <StyledProductCard />
        <StyledProductCard />
        <StyledProductCard />
        <StyledProductCard />
      </Grid>
    </Container>
  );
}
