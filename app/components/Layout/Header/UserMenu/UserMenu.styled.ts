import styled from "styled-components";

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1;
  justify-content: flex-end;
`;

export const ShoppingCartCount = styled.div`
  display: flex;
  font-size: 0.7rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.green};
  color: #fff;
  width: 0.9rem;
  height: 0.9rem;
  position: absolute;
  right: 6px;
  top: 8px;
  justify-content: center;
  align-items: center;
`;
