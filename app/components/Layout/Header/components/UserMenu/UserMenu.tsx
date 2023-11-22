"use client";

import React, { useState } from "react";
import { StyledUserMenu } from "./UserMenu.styled";
import { PiHeart, PiMagnifyingGlass } from "react-icons/pi";
import { IconButton } from "@/app/components/styles/IconButton.styled";
import { useTheme } from "styled-components";
import MyCartButton from "./components/MyCartButton/MyCartButton";
import Link from "next/link";
import { useProductsContext } from "@/app/context/products-context";
import SearchInput from "../../../UI/SearchInput/SearchInput";

// TODO: Change icons
export default function UserMenu() {
  const theme = useTheme();
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <StyledUserMenu>
      <SearchInput show={toggleSearch} />
      {/* <IconButton
        onClick={() => setToggleSearch(!toggleSearch)}
        type={theme.buttons.nav}
      >
        <PiMagnifyingGlass />
      </IconButton> */}
      <Link href="/favorites" legacyBehavior passHref>
        <IconButton as="a" type={theme.buttons.nav}>
          <PiHeart />
        </IconButton>
      </Link>
      <MyCartButton />
    </StyledUserMenu>
  );
}
