import styled from "styled-components";

export const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 5px;
  flex: 1 1;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: none;
  }
`;

export const HamburgerLine = styled.div`
  width: 1.6rem;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.darkgray};
  margin: 2px 0;
`;
