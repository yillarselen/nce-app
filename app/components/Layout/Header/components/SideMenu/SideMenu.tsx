// SideMenu.tsx
import Link from "next/link";
import React from "react";
import {
  SideMenuContainer,
  SideMenuItem,
  SideMenuList,
  CloseButton,
  Overlay,
} from "./SideMenu.styled";

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function HamburgerMenu({ open, onClose }: SideMenuProps) {
  return (
    <>
      <Overlay open={open} onClick={onClose} />
      <SideMenuContainer open={open}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <SideMenuList>
          <SideMenuItem>
            <Link href="/">Men</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link href="/">Women</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link href="/">Kids</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link href="/">Sport</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link href="/">Accessories</Link>
          </SideMenuItem>
        </SideMenuList>
      </SideMenuContainer>
    </>
  );
}
