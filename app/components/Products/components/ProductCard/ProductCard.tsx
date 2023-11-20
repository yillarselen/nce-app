import Image from "next/image";

import { useTheme } from "styled-components";
import Link from "next/link";
import { PiHeartLight, PiShoppingCart } from "react-icons/pi";
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

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const theme = useTheme();

  return (
    <Card>
      <CardContainer>
        <FavButton type={theme.buttons.fav}>
          <PiHeartLight />
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
          <Button type="primary" size="sm">
            <PiShoppingCart size={20} />
            <span>Add to bag</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
