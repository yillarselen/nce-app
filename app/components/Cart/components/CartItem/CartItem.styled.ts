import styled from "styled-components";

export const StyledCartItem = styled.div<{ size?: string }>`
  position: relative;
  display: flex;
  padding: ${({ size }) => (size === "sm" ? "1.3rem 0" : "2rem 0")};
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

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
    align-items: center;

    svg {
      margin-right: 0.4rem;
    }
  }
`;

export const ProductSelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > div:last-child {
    margin-left: 3.5rem;
  }
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
