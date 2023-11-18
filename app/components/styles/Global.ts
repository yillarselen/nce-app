import { createGlobalStyle, css } from "styled-components";

const styles = css``;

const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    line-height: 1.5rem;
  }

  main {
    flex-grow: 1;
  }
`;

export default GlobalStyles;
