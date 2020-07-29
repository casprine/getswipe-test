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
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    font-feature-settings: 'calt', 'kern', 'liga';
  }

  button {
    cursor: pointer;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    max-width: 1024px;
    margin: 0px auto;
    width: 100%;
    position: relative;
    box-sizing: border-box;
  }

  .rounded {
    border-radius: 4px;
  }

  .border {
    border: 1px solid ${({ theme }) => theme.colors.gray300};
  }

  .black-text {
    color: ${({ theme }) => theme.colors.primaryText};
  }

  .gray-text {
    color: ${({ theme }) => theme.colors.gray600};
  }

  .white-text {
    color: white;
  }

  .page-wrapper {
    padding: 40px 0;
  }

  .button-text {
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
  }

  .button-group {
    button {
      padding: 12px 20px;

      p {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }

  .btn-grp-first {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-width: 0;
  }

  .btn-grp-last {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
  }

  .btn-grp-middle {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .sections {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-column-gap: ${({ theme }) => theme.padding.xxlg};

    .left-section {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  section {
    border: 0.5px solid ${({ theme }) => theme.colors.gray300};
    border-radius: 4px;
    padding: ${({ theme }) => theme.padding.extra};
  }

  .input-container {
    position: relative;
  }
`;

export default GlobalStyles;
