import styled from "styled-components";

type ButtonType = "primary" | "secondary";

export const Button = styled.button<{ type?: ButtonType | undefined }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  background: ${(props) =>
    props.type === "primary" ? props.theme.colors.black : "#fff"};
  color: ${(props) =>
    props.type === "primary" ? "#fff" : props.theme.colors.black};
`;
