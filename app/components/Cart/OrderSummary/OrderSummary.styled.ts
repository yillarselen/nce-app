import styled from "styled-components";

export const List = styled.div`
  flex: 1;

  button {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
  padding: 1rem 0;

  strong {
    font-weight: 600;
  }
`;
