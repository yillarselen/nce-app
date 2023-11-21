"use client";

import React from "react";
import { StyledUserMenu } from "./UserMenu.styled";
import { PiHeart, PiMagnifyingGlass } from "react-icons/pi";
import { IconButton } from "@/app/components/styles/IconButton.styled";
import { useTheme } from "styled-components";
import MyCartButton from "./components/MyCartButton/MyCartButton";
import Link from "next/link";

// TODO: Change icons
export default function UserMenu() {
  const theme = useTheme();

  return (
    <StyledUserMenu>
      <IconButton type={theme.buttons.nav}>
        <PiMagnifyingGlass />
      </IconButton>
      <Link href="/favorites" legacyBehavior passHref>
        <IconButton as="a" type={theme.buttons.nav}>
          <PiHeart />
        </IconButton>
      </Link>
      <MyCartButton />
    </StyledUserMenu>
  );
}
