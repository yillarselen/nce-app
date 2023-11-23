"use client";

import React, { useState } from "react";
import { StyledUserMenu } from "./UserMenu.styled";
import { PiHeart, PiMagnifyingGlass } from "react-icons/pi";
import { IconButton } from "@/app/components/styles/IconButton.styled";
import { useTheme } from "styled-components";
import MyCartButton from "./components/MyCartButton/MyCartButton";
import Link from "next/link";
import SearchInput from "../../../UI/SearchInput/SearchInput";

// TODO: Change icons
export default function UserMenu() {
  const theme = useTheme();
  const [toggleSearch, setToggleSearch] = useState(false);

  function handleClose() {
    setToggleSearch(!toggleSearch);
  }

  return (
    <StyledUserMenu>
      <SearchInput show={toggleSearch} handleClose={handleClose} />
      <IconButton
        onClick={() => setToggleSearch((toggleSearch) => !toggleSearch)}
        type={theme.buttons.nav}
      >
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
