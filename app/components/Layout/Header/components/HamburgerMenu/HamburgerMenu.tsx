import React, { MouseEvent } from "react";
import { HamburgerButton, HamburgerLine } from "./HamburgerMenu.styled";

interface HamburgerMenuProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function HamburgerMenu({ onClick }: HamburgerMenuProps) {
  return (
    <HamburgerButton onClick={onClick}>
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </HamburgerButton>
  );
}
