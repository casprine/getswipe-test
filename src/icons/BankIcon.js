import * as React from 'react';
// theme
import theme from '../theme';

function BankIcon(props) {
  return (
    <svg width={15} height={15} viewBox="0 0 512.006 512.006" {...props}>
      <path d="M0.02 451.96H511.986V512.006H0.02z" fill={theme.colors.primaryText} />
      <path d="M0.02 130.991H511.986V191.037H0.02z" fill={theme.colors.primaryText} />
      <path d="M256.003 0L12.036 100.995 499.97 100.995z" fill={theme.colors.primaryText} />
      <path d="M45.04 221.055H105.316V421.952H45.04z" />
      <path d="M165.592 221.055H225.86800000000002V421.952H165.592z" fill={theme.colors.primaryText} />
      <path d="M286.144 221.055H346.42V421.952H286.144z" fill={theme.colors.primaryText} />
      <path d="M406.686 221.055H466.962V421.952H406.686z" fill={theme.colors.primaryText} />
    </svg>
  );
}

export default BankIcon;
