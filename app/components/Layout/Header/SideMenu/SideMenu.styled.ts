import styled from "styled-components";

export const SideMenuContainer = styled.div<{ open: boolean }>`
  width: 300px;
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid ${({ theme }) => theme.colors.lightgray};
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-300px")};
  transition: left 0.3s ease-in-out;
  z-index: 2;
`;

export const SideMenuList = styled.ul`
  list-style: none;
  padding: 3rem 2rem;
`;

export const SideMenuItem = styled.li`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.buttons.nav.color};
  font-size: 1rem;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 1;
`;
