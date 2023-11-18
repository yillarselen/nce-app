import { styled } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    max-width: ${({ theme }) => theme.screens.sm};
  }

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    max-width: ${({ theme }) => theme.screens.md};
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    max-width: ${({ theme }) => theme.screens.lg};
  }

  @media (min-width: ${({ theme }) => theme.screens.xl}) {
    max-width: ${({ theme }) => theme.screens.xl};
    padding: 0 40px;
  }
`;
