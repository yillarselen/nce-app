import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const CartContainer = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 4.4rem;
  right: 2rem;
  width: 500px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1.5rem 2rem;
  z-index: 2;
  border-radius: 1rem;
  animation: ${({ $show }) => ($show ? fadeIn : fadeOut)} 0.1s ease-in-out;
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  transition: visibility 0.1s ease-in-out;

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

export const ScrollableContent = styled.div`
  overflow-y: auto;
  max-height: 400px;
  padding-right: 1rem;
  margin-right: -1rem;

  &::-webkit-scrollbar {
    width: 0.4em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.slate300};
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.slate500};
    border-radius: 1rem;
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
  line-height: 0.87rem;
  position: absolute;
  right: 1px;
  top: 1px;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    right: 6px;
    top: 8px;
  }
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
  margin: 1.5rem -2rem -2rem -2rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 1.5rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;

  a {
    margin-top: 1.2rem;
  }
`;
