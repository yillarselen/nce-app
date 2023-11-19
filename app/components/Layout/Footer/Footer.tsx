"use client";

import React from "react";
import { FooterWrapper, MenuList, MenuItem } from "./Footer.styled";

export default function Footer() {
  return (
    <FooterWrapper>
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuList>
      <small>&copy; 2023 Company. All rights reserved.</small>
    </FooterWrapper>
  );
}
