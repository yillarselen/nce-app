import Image from "next/image";

import { useTheme } from "styled-components";
import Link from "next/link";
import { PiHeartLight, PiShoppingCart } from "react-icons/pi";
import { Button } from "../styles/Button.styled";
import {
  Card,
  CardContainer,
  ImageContainer,
  CardFooter,
  FavButton,
  ProductTitle,
  PriceLabel,
} from "./ProductCard.styled";

const ProductCard = () => {
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
              src="https://picsum.photos/600/300"
              layout="responsive"
              width={500}
              height={500}
              alt=""
            />
          </ImageContainer>
          <ProductTitle>
            <h3>Hoodie Sweatshirt</h3>
            <h4>Mint green</h4>
          </ProductTitle>
        </Link>
      </CardContainer>

      <CardFooter>
        <PriceLabel>$30.00</PriceLabel>
        <div>
          <Button type="primary">
            <PiShoppingCart size={20} />
            <span style={{ marginLeft: ".35rem" }}>Add to bag</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
