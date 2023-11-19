import styled from "styled-components";

export const PriceLabel = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.green};
  padding: 0.15rem 0.625rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.green};
  height: 1.7rem;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    font-size: 0.9rem;
    height: 2.2rem;
  }
`;
