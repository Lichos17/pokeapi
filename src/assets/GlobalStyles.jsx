import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    font-family: Arial, Verdana, Helvetica;
    margin: 0;

    transition: background .3s;
  }`;
