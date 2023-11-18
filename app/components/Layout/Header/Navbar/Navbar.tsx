"use client";

import React from "react";
import { Navigation, Nav, NavItem, NavLink, Logo } from "./Navbar.styled";
import UserMenu from "../UserMenu/UserMenu";

export default function Navbar() {
  return (
    <Navigation>
      <Logo>Logo</Logo>
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
