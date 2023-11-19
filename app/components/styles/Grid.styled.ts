import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem 2.5rem;
  margin: 2rem 0;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.screens.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
