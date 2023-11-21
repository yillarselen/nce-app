"use client";

import React, { useState } from "react";
import { Grid } from "../../../styles/Grid.styled";
import ProductCard from "../ProductCard/ProductCard";
import { useProductsContext } from "@/app/context/products-context";
import { LoadMoreButton } from "@/app/components/styles/Button.styled";
import { FlexCenter } from "@/app/components/styles/Flex.styled";

const itemsToShowNumber = 6;

export default function ProductList() {
  const { products, isProductsLoading } = useProductsContext();
  const [itemsToShow, setItemsToShow] = useState(itemsToShowNumber);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + itemsToShowNumber);
  };

  return (
    <>
      <Grid>
        {products.slice(0, itemsToShow).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      {itemsToShow < products.length && !isProductsLoading && (
        <FlexCenter>
          <LoadMoreButton type="primary" size="lg" onClick={handleLoadMore}>
            Load More
          </LoadMoreButton>
        </FlexCenter>
      )}
    </>
  );
}
