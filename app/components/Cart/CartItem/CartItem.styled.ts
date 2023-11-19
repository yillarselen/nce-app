import styled from "styled-components";

export const StyledCartItem = styled.div`
  position: relative;
  display: flex;
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.lightgray};

  &:first-child {
    border-top: none;
    padding-top: 0;
  }
`;

export const ItemName = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 0.3rem;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    display: flex;
    flex-direction: column;
    flex: 2 1;
  }
`;

export const ItemDetailsContainer = styled.div`
  margin-left: 1.5rem;
  display: flex;
  flex: 1 1;
  flex-direction: column;

  > div:first-child {
    display: block;

    @media (min-width: ${({ theme }) => theme.screens.md}) {
      display: flex;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 1rem;

    svg {
      margin-right: 0.4rem;
    }
  }
`;

export const ProductSelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
`;

export const ItemProperties = styled.div`
  display: flex;
  margin-top: 0;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.slate500};

  > .seperator {
    margin: 0 1rem;
  }

  svg {
    margin-right: 0.4rem;
  }

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    margin-top: 0.7rem;
  }
`;
