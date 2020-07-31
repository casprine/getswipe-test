import * as styled from 'styled-components';

const GlobalStyles = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
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
    outline: 1px solid red;
    padding-bottom: 8rem;
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
    max-width: 1120px;
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
    grid-column-gap: ${({ theme }) => theme.padding.extra};
    grid-template-columns: 1fr 2fr 2fr 1fr 1fr 2fr;

    .left-section {
      grid-column: 1 / 5;
    }

    .right-section {
      grid-column: auto / span 2;
    }
  }

  section {
    border: 0.5px solid ${({ theme }) => theme.colors.gray300};
    border-radius: 4px;
    padding: ${({ theme }) => theme.padding.extra};
  }

  .invoice-items-section {
    padding: 30px 30px 0 30px;
  }

  .section-lg-padding {
    padding: ${({ theme }) => theme.padding.xxlg};
  }

  .input-container {
    position: relative;
  }

  .section-gutter {
    margin-bottom: 10px;
  }

  .select {
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.primaryText};
    width: 100%;
    background-color: white;
    margin: 8px 0;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    margin: 15px 0;
  }

  .recurring-section {
    .gray-text {
      font-size: 12px;
      font-weight: 500;
      margin-top: 8px;
      margin-bottom: 10px;
    }
    .recurring-btn {
      display: flex;
      align-items: center;
      margin-top: 20px;

      p {
        font-weight: 500;
        font-size: 15px;
        margin-right: 10px;
      }
    }
  }
`;

export default GlobalStyles;
