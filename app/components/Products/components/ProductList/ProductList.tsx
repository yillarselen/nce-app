"use client";

import React, { useState } from "react";
import { Grid } from "../../../styles/Grid.styled";
import ProductCard from "../ProductCard/ProductCard";
import { useProductsContext } from "@/app/context/products-context";
import { LoadMoreButton } from "@/app/components/styles/Button.styled";
import { FlexCenter } from "@/app/components/styles/Flex.styled";
import { Product } from "@/app/types/ProductTypes";

const itemsToShowNumber = 6;

interface ProductListProps {
  products: Product[];
  loading: boolean;
}

export default function ProductList({ products, loading }: ProductListProps) {
  const [itemsToShow, setItemsToShow] = useState(itemsToShowNumber);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + itemsToShowNumber);
  };

  return (
    <div data-testid="product-list">
      <Grid>
        {products.slice(0, itemsToShow).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      {itemsToShow < products.length && !loading && (
        <FlexCenter>
          <LoadMoreButton
            type="primary"
            size="lg"
            onClick={handleLoadMore}
            data-testid="loadmore-button"
          >
            Load More
          </LoadMoreButton>
        </FlexCenter>
      )}
    </div>
  );
}
