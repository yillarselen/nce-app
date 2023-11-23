"use client";

import React, { useEffect, useState } from "react";
import { Container } from "../styles/Container.styled";
import { IntroContainer } from "../styles/IntroContainer.styled";
import ProductList from "../Products/components/ProductList/ProductList";
import { useProductsContext } from "@/app/context/products-context";
import { Product } from "@/app/types/ProductTypes";
import LoadingSpinner from "../Layout/UI/Spinner/Spinner";
import { useFavoriteContext } from "@/app/context/favorite-context";

export default function FavoritesContainer() {
  const { favoriteItems, isFavoritesLoading } = useFavoriteContext();

  return (
    <Container>
      <IntroContainer>
        <h2>Favorites</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </IntroContainer>
      {isFavoritesLoading ? (
        <LoadingSpinner />
      ) : favoriteItems?.length > 0 ? (
        <ProductList
          products={favoriteItems}
          loading={isFavoritesLoading}
          data-testid="product-list"
        />
      ) : (
        <h3 style={{ textAlign: "center" }}>Your favorites list is empty :(</h3>
      )}
    </Container>
  );
}
