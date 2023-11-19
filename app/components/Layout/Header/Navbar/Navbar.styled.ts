import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  height: 5rem;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1;
`;

export const Nav = styled.ul`
  align-items: center;
  display: flex;
  flex: 2 1;
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
