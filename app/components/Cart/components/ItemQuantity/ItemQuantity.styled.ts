import styled from "styled-components";
import { StyledSelect } from "../../../styles/Select.styled";

export const NumberInput = styled.div`
  display: none;
  justify-content: space-between;
  width: 7rem;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    display: flex;
  }

  span {
    line-height: 2rem;
  }
`;

export const QuantitySelect = styled(StyledSelect)`
  display: block;
  padding: 0.3rem 1rem;
  height: 1.7rem;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    display: none;
  }
`;
