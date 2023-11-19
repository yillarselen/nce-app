"use client";
import Link from "next/link";
import { Flex, FlexBetween } from "../../styles/Flex.styled";
import {
  ItemDetailsContainer,
  ItemProperties,
  ProductSelectionContainer,
  StyledCartItem,
  ItemName,
} from "./CartItem.styled";
import { ImageContainer } from "../../styles/ImageContainer.styled";
import Image from "next/image";
import { PriceLabel } from "../../styles/PriceLabel.styled";
import ItemQuantity from "../ItemQuantity/ItemQuantity";
import { Button } from "../../styles/Button.styled";
import { PiTrash, PiPaintBucket, PiTag } from "react-icons/pi";
import { StyledBadge } from "../../styles/Badge.styled";

export default function CartItem() {
  return (
    <StyledCartItem>
      <Link href="/product-detail">
        <ImageContainer width="8" height="9">
          <Image
            src="https://source.unsplash.com/random/300×300"
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
      </Link>
      <ItemDetailsContainer>
        <FlexBetween>
          <ItemName>
            <h3>
              <Link href="/product-detail">Hoodie Sweatshirt</Link>
            </h3>
            <ItemProperties>
              <Flex>
                <PiPaintBucket />
                Black
              </Flex>
              <span className="seperator">|</span>
              <Flex>
                <PiTag />
                XL
              </Flex>
            </ItemProperties>
          </ItemName>
          <ProductSelectionContainer>
            <ItemQuantity />
            <PriceLabel>$300.00</PriceLabel>
          </ProductSelectionContainer>
        </FlexBetween>
        <footer>
          <StyledBadge>In Stock</StyledBadge>
          <Button type="danger" size="md">
            <PiTrash />
            <span>Remove</span>
          </Button>
        </footer>
      </ItemDetailsContainer>
    </StyledCartItem>
  );
}
