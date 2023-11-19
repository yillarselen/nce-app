import React, { FC, MouseEvent } from "react";
import { HamburgerButton, HamburgerLine } from "./HamburgerMenu.styled";

interface HamburgerMenuProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ onClick }) => {
  return (
    <HamburgerButton onClick={onClick}>
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </HamburgerButton>
  );
};

export default HamburgerMenu;
