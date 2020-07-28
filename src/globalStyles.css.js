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
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  svg {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-block-end: 0;
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

  .rounded {
    border-radius: 3px;
  }

  .border {
    border: 1px solid ${({ theme }) => theme.colors.gray300};
  }

  .black-text {
    color: ${({ theme }) => theme.colors.primaryText};
  }

  .gray-text {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

export default GlobalStyles;
