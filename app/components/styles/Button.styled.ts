import styled from "styled-components";

type ButtonType = "primary" | "secondary" | "danger";

type size = "sm" | "md" | "lg";

const properties = {
  sm: {
    fontSize: ".85rem",
    padding: ".5rem 1rem",
  },
  md: {
    fontSize: ".95rem",
    padding: ".7rem 1.2rem",
  },
  lg: {
    fontSize: "1rem",
    padding: "1rem 1.5rem",
  },
};

export const Button = styled.button<{ type?: ButtonType; size?: size }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) =>
    size ? properties[size].fontSize : properties.md.fontSize};
  padding: ${({ size, type }) =>
    type !== "danger" && size ? properties[size].padding : 0};
  border: ${(props) =>
    props.type !== "danger"
      ? `1px solid ${props.theme.colors.slate300}`
      : "none"};
  border-radius: 2rem;
  box-shadow: ${({ type }) =>
    type !== "danger" && "0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)"};
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

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  button,
  a {
    width: 100%;
  }
`;
