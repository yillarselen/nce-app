import styled from "styled-components";

export const StyledBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.slate300};
  color: ${({ theme }) => theme.colors.slate500};
  border-radius: 1rem;
  font-size: 0.75rem;
`;
