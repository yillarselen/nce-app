"use client";

import React from "react";
import { Container } from "../../styles/Container.styled";
import { StyledHeader } from "./Header.styled";
import Navbar from "./components/Navbar/Navbar";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Navbar />
      </Container>
    </StyledHeader>
  );
}
