"use client";

import React from "react";
import { StyledUserMenu } from "./UserMenu.styled";
import { PiHeart, PiMagnifyingGlass } from "react-icons/pi";
import { IconButton } from "@/app/components/styles/IconButton.styled";
import { useTheme } from "styled-components";
import MyCartButton from "./components/MyCartButton/MyCartButton";

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
      <MyCartButton />
    </StyledUserMenu>
  );
}
