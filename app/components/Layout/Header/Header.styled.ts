import styled from "styled-components";

export const StyledHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
`;
