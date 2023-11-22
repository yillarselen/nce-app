import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  height: 5rem;
  justify-content: space-between;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  flex: 1 1;
  margin-top: 1rem;
`;

export const Nav = styled.ul`
  display: none;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    align-items: center;
    flex: 2 1;
    display: flex;
  }
`;

export const NavItem = styled.li`
  flex-shrink: 0;

  > div {
    align-items: center;
    height: 5rem;
    display: flex;
  }
`;

export const NavLink = styled.a`
  padding: 0.5rem 2rem;
  align-items: center;
  display: inline-flex;
  color: ${({ theme }) => theme.colors.nav.link};

  &:hover {
    background-color: ${({ theme }) => theme.colors.nav.hover};
    border-radius: 2rem;
  }
`;
