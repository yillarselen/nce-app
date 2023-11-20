"use client";

import React from "react";
import { Grid } from "../../../styles/Grid.styled";
import StyledProductCard from "../ProductCard/ProductCard";

export default function ProductList() {
  return (
    <Grid>
      <StyledProductCard />
      <StyledProductCard />
      <StyledProductCard />
      <StyledProductCard />
      <StyledProductCard />
      <StyledProductCard />
      <StyledProductCard />
    </Grid>
  );
}
