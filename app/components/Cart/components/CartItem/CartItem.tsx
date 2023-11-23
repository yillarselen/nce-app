"use client";
import Link from "next/link";
import { Flex, FlexBetween } from "../../../styles/Flex.styled";
import {
  ItemDetailsContainer,
  ItemProperties,
  ProductSelectionContainer,
  StyledCartItem,
  ItemName,
} from "./CartItem.styled";
import { ImageContainer } from "../../../styles/ImageContainer.styled";
import Image from "next/image";
import { PriceLabel } from "../../../styles/PriceLabel.styled";
import ItemQuantity from "../ItemQuantity/ItemQuantity";
import { Button } from "../../../styles/Button.styled";
import { PiTrash, PiPaintBucket, PiTag } from "react-icons/pi";
import { StyledBadge } from "../../../styles/Badge.styled";
import { useShoppingCartContext } from "@/app/context/shoppingcart-context";
import { CartItem as Item } from "@/app/types/CartTypes";

interface CartItemProps {
  cartItem: Item;
  size?: string;
}

export default function CartItem({ cartItem, size }: CartItemProps) {
  const { removeItemFromCart } = useShoppingCartContext();

  return (
    <StyledCartItem size={size} role="cart-item">
      <Link href="/product-detail">
        <ImageContainer
          width={size === "sm" ? "5" : "8"}
          height={size === "sm" ? "6" : "9"}
        >
          <Image
            src={cartItem.product.image}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            priority
            width={300}
            height={300}
            alt={cartItem.product.name}
          />
        </ImageContainer>
      </Link>
      <ItemDetailsContainer>
        <FlexBetween>
          <ItemName>
            <h3>
              <Link href="/product-detail">{cartItem.product.name}</Link>
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
            {size !== "sm" && <ItemQuantity item={cartItem} />}
            <PriceLabel>${cartItem.product.price}</PriceLabel>
          </ProductSelectionContainer>
        </FlexBetween>
        <footer>
          <StyledBadge>
            {size === "sm" ? `Qty: ${cartItem.quantity}` : "In Stock"}
          </StyledBadge>
          <Button
            aria-label="remove-product-button"
            onClick={() => removeItemFromCart(cartItem.product)}
            type="danger"
            size="md"
          >
            <PiTrash />
            <span>Remove</span>
          </Button>
        </footer>
      </ItemDetailsContainer>
    </StyledCartItem>
  );
}
