"use client";

import React from "react";
import { Grid } from "../../../styles/Grid.styled";
import ProductCard from "../ProductCard/ProductCard";
import { useProductsContext } from "@/app/context/products-context";

export default function ProductList() {
  const { products } = useProductsContext();

  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}
