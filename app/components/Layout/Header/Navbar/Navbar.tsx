"use client";

import React, { useState } from "react";
import { Navigation, Nav, NavItem, NavLink, Logo } from "./Navbar.styled";
import UserMenu from "../UserMenu/UserMenu";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import SideMenu from "../SideMenu/SideMenu";

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
          <div>
            <NavLink href="#">Men</NavLink>
          </div>
        </NavItem>
        <NavItem>
          <div>
            <NavLink href="#">Women</NavLink>
          </div>
        </NavItem>
        <NavItem>
          <div>
            <NavLink href="#">Kids</NavLink>
          </div>
        </NavItem>
        <NavItem>
          <div>
            <NavLink href="#">Sport</NavLink>
          </div>
        </NavItem>
        <NavItem>
          <div>
            <NavLink href="#">Accessories</NavLink>
          </div>
        </NavItem>
      </Nav>
      <UserMenu />
    </Navigation>
  );
}
