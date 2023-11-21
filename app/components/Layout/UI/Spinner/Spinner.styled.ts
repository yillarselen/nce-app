import styled, { keyframes } from "styled-components";

export interface SpinnerProps {
  size?: string;
  color?: string;
  spinColor?: string;
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div<SpinnerProps>`
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
  border: 4px solid ${(props) => props.color || props.theme.colors.darkgray};
  border-radius: 50%;
  border-top: 4px solid ${(props) => props.spinColor || "transparent"};
  animation: ${rotate} 1s linear infinite;
  margin: 20% auto;
`;
