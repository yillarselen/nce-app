import styled from "styled-components";

type ButtonType = "primary" | "secondary" | "danger";

type size = "sm" | "md" | "lg";

export const Button = styled.button<{ type?: ButtonType; size?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) =>
    size === "sm"
      ? ".85rem"
      : size === "md"
      ? ".95rem"
      : size === "lg"
      ? "1.2rem"
      : "1rem"};
  padding: ${({ type }) => type !== "danger" && "0.5rem 1rem"};
  border: ${(props) =>
    props.type === "secondary"
      ? `1px solid ${props.theme.colors.slate500}`
      : "none"};
  border-radius: 2rem;
  box-shadow: ${({ type }) =>
    type === "primary" && "0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)"};
  background: ${(props) =>
    props.type === "primary"
      ? props.theme.colors.black
      : props.type === "secondary"
      ? "#fff"
      : "none"};
  color: ${(props) =>
    props.type === "primary"
      ? "#fff"
      : props.type === "secondary"
      ? props.theme.colors.black
      : "red"};
`;
