import styled, { keyframes } from "styled-components";

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 2rem;
  outline: none;
  width: 200px;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const Container = styled.div<{ $show: boolean }>`
  position: relative;
  background-color: #fff;
`;
