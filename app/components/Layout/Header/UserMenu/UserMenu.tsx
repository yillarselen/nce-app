"use client";

import React from "react";
import { ShoppingCartCount, StyledUserMenu } from "./UserMenu.styled";
import { PiShoppingCart, PiHeart, PiMagnifyingGlass } from "react-icons/pi";
import { IconButton } from "@/app/components/styles/IconButton.styled";
import { useTheme } from "styled-components";

// TODO: Change icons
export default function UserMenu() {
  const theme = useTheme();

  return (
    <StyledUserMenu>
      <IconButton type={theme.buttons.nav}>
        <PiMagnifyingGlass />
      </IconButton>
      <IconButton type={theme.buttons.nav}>
        <PiHeart />
      </IconButton>
      <IconButton type={theme.buttons.nav}>
        <PiShoppingCart />
        {/* Check count */}
        <ShoppingCartCount>3</ShoppingCartCount>
      </IconButton>
    </StyledUserMenu>
  );
}
