import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', serif;
  }
  body {
    overflow-x:hidden;
  }
  html {
    scroll-behavior: smooth;

  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: grey;
  padding: 20px;
`;

export const Header = styled.div`
  background-color: grey;
  background-size: cover;
  color: white;
  height: 50px;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
