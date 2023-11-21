import styled from "styled-components";

export const IntroContainer = styled.div`
  padding: 1rem 0;
  margin-top: 5rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    padding: 2rem 0;
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
