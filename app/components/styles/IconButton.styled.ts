import { styled } from "styled-components";

interface ButtonType {
  color?: string;
  hoverBg?: string;
  hoverColor?: string;
}

export const IconButton = styled.button<{ type?: ButtonType }>`
  position: relative;
  display: flex;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  color: ${(props) => props.type?.color || props.theme.colors.darkgray};

  &:hover {
    background-color: ${(props) => props.type?.hoverBg || "transparent"};
    fill: ${(props) => props.type?.hoverColor || "transparent"};
  }
`;