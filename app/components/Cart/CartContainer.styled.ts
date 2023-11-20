import styled from "styled-components";

export const CartList = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    width: 60%;
  }
`;

export const Seperator = styled.div`
  display: flex;
  border-left: 1px solid ${({ theme }) => theme.colors.gray};
  margin: 0 2.5rem;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: none;
  }
`;
