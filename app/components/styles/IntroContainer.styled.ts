import styled from "styled-components";

export const IntroContainer = styled.div`
  padding: 1.5rem 0;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    padding: 3rem 0;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 600;
    margin-bottom: 1.75rem;

    @media (min-width: ${({ theme }) => theme.screens.md}) {
      font-size: 2.5rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.slate500};
    line-height: 1.85rem;

    @media (min-width: ${({ theme }) => theme.screens.md}) {
      width: 75%;
    }
  }
`;