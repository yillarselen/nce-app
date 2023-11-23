import { styled } from "styled-components";

interface ButtonType {
  color?: string;
  hoverBg?: string;
  hoverColor?: string;
}

type size = "sm" | "md";

export const IconButton = styled.button<{
  type?: ButtonType;
  size?: size;
  $border?: boolean;
}>`
  position: relative;
  display: flex;
  width: ${(props) =>
    props.size === "sm" ? "1.25rem" : props.size === "md" ? "2rem" : "3rem"};
  height: ${(props) =>
    props.size === "sm" ? "1.25rem" : props.size === "md" ? "2rem" : "3rem"};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: ${(props) =>
    props.$border ? `1px solid ${props.theme.colors.darkgray}` : "none"};
  background-color: transparent;
  font-size: ${(props) =>
    props.size === "sm" ? ".75rem" : props.size === "md" ? "1rem" : "1.5rem"};
  color: ${(props) => props.type?.color || props.theme.colors.darkgray};

  &:hover {
    background-color: ${(props) => props.type?.hoverBg || "transparent"};
    fill: ${(props) => props.type?.hoverColor || "transparent"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width: 2rem;
    height: 2rem;
  }

  &.close-search {
    display: none;

    @media (min-width: ${({ theme }) => theme.screens.md}) {
      display: flex;
      position: absolute;
      right: 15%;
    }
  }
`;
