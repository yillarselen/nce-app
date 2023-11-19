import styled from "styled-components";

export const IntroContainer = styled.div`
  padding: 3rem 0;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};

  h2 {
    font-size: 2.5rem;
    line-height: 2.5rem;
    font-weight: 600;
    margin-bottom: 1.75rem;
  }

  p {
    color: ${({ theme }) => theme.colors.slate500};
    line-height: 1.85rem;

    @media (min-width: ${({ theme }) => theme.screens.lg}) {
      width: 75%;
    }
  }
`;
