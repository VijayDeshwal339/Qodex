import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background: #1E213A;
    color: white;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
  }
`;

export default GlobalStyles;
