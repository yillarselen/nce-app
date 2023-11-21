import Image from "next/image";

import { useTheme } from "styled-components";
import Link from "next/link";
import { PiHeartFill, PiHeartLight, PiShoppingCart } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { Button } from "../../../styles/Button.styled";
import {
  Card,
  CardContainer,
  CardFooter,
  FavButton,
  ProductTitle,
} from "./ProductCard.styled";
import { ImageContainer } from "../../../styles/ImageContainer.styled";
import { PriceLabel } from "../../../styles/PriceLabel.styled";
import { Product } from "@/app/types/ProductTypes";
import { useShoppingCartContext } from "@/app/context/shoppingcart-context";
import { toast } from "react-toastify";
import { useState } from "react";
import { useFavoriteContext } from "@/app/context/favorite-context";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const theme = useTheme();
  const { addToCart } = useShoppingCartContext();
  const { toggleFavorite, favoriteItems } = useFavoriteContext();
  const [addButtonText, setAddButtonText] = useState("Add to bag");
  const favItem = favoriteItems.some((e) => e.id === product.id);

  function handleAdd(product: Product) {
    addToCart(product);
    toast(`${product.name} has been added to your cart!`);
    setAddButtonText("Added!");
    setTimeout(() => {
      setAddButtonText("Add to bag");
    }, 4000);
  }

  return (
    <Card>
      <CardContainer>
        <FavButton
          onClick={() => toggleFavorite(product)}
          type={theme.buttons.fav}
        >
          {favItem ? <PiHeartFill fill="red" /> : <PiHeartLight />}
        </FavButton>
        <Link href="/product-detail">
          <ImageContainer>
            <Image
              src={product.image}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              priority
              width={300}
              height={300}
              alt=""
            />
          </ImageContainer>
          <ProductTitle>
            <h3>{product.name}</h3>
            <h4>{product.brand}</h4>
          </ProductTitle>
        </Link>
      </CardContainer>

      <CardFooter>
        <PriceLabel>${product.price}</PriceLabel>
        <div>
          <Button onClick={() => handleAdd(product)} type="primary" size="sm">
            <PiShoppingCart size={20} />
            <span>{addButtonText}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
