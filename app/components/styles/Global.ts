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
    cursor: pointer;
  }

  p {
    line-height: 1.5rem;
  }
 
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
 
  main {
    flex-grow: 1;
  }

  h3 {
    margin-bottom: 0.3rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  h4 {
    font-size: 0.9rem;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.slate500};
  }
`;

export default GlobalStyles;
