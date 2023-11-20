import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  top: 4.4rem;
  right: 2rem;
  width: 500px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1.5rem 2rem;
  z-index: 2;
  border-radius: 1rem;

  h2 {
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    font-size: 1.2rem;
    font-weight: 600;
  }

  h3 {
    font-weight: 500;
    margin-bottom: 0;
  }
`;

export const ShoppingCartCount = styled.div`
  display: flex;
  font-size: 0.7rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.green};
  color: #fff;
  width: 0.9rem;
  height: 0.9rem;
  position: absolute;
  right: 6px;
  top: 8px;
  justify-content: center;
  align-items: center;
`;

export const CartButton = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;

export const CartButtonLink = styled.div`
  display: block;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: none;
  }
`;

export const CartFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.lightgray};
  margin: 0 -2rem -2rem -2rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 1.5rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;

  a {
    margin-top: 1.2rem;
  }
`;