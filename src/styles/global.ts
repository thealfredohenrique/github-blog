import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.baseBackground};
    color: ${(props) => props.theme.baseText};
  }

  body,
  button,
  input,
  textarea {
    font: 400 1rem Nunito, sans-serif;
  }
`;

export default GlobalStyle;
