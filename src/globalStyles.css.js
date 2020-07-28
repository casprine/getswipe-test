import * as styled from 'styled-components';
import InterFont from './assets/Inter.var.ttf';

const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${InterFont}) format('truetype');
    font-style: normal;
    font-display: auto;
  }

  * {
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
      Droid Sans, Helvetica Neue, sans-serif;
    outline: 1px solid red;
  }

  main {
    min-height: 100vh;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    font-feature-settings: 'calt', 'kern', 'liga';
  }

  .container {
    max-width: 1024px;
    margin: 0px auto;
    width: 100%;
    position: relative;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
