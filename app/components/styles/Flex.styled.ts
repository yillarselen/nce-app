import styled from "styled-components";

export const Flex = styled.div<{ $smBlock?: boolean }>`
  display: ${({ $smBlock }) => ($smBlock ? "block" : "flex")};

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: flex;
  }
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
