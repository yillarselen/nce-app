"use client";

import React, { useState } from "react";
import { Navigation, Nav, NavItem, NavLink, Logo } from "./Navbar.styled";
import UserMenu from "../UserMenu/UserMenu";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import SideMenu from "../SideMenu/SideMenu";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Navigation>
      <HamburgerMenu onClick={toggleMenu} />
      <Logo>Logo</Logo>
      <SideMenu open={menuOpen} onClose={closeMenu} />
      <Nav>
        <NavItem>
          <Link href="/" passHref legacyBehavior>
            <NavLink>Men</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/" passHref legacyBehavior>
            <NavLink>Women</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/" passHref legacyBehavior>
            <NavLink>Kids</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/" passHref legacyBehavior>
            <NavLink>Sport</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/" passHref legacyBehavior>
            <NavLink>Accessories</NavLink>
          </Link>
        </NavItem>
      </Nav>
      <UserMenu />
    </Navigation>
  );
}
