import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Input = styled.input`
  padding: 0.9rem;
  font-size: 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.slate300};
  border-radius: 2rem;
  outline: none;
  width: 70%;

  &:focus {
    border-color: #ec5e28;
    box-shadow: 0 0 5px rgba(154, 60, 25, 0.5);
  }
`;

export const Container = styled.div<{ $show: boolean }>`
  position: fixed;
  background-color: #fff;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 2.5rem;
  width: 50%;
  justify-content: center;
  align-items: center;
  display: ${({ $show }) => ($show ? "flex" : "none")};
  animation: ${({ $show }) => ($show ? fadeIn : fadeOut)} 0.2s ease-in-out;
`;
