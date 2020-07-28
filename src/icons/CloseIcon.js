import * as React from 'react';

import theme from '../theme';

function CloseIcon(props) {
  return (
    <svg width={20} height={20} viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke={theme.colors.primaryText}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="40px"
        d="M368 368L144 144"
      />
      <path
        fill="none"
        stroke={theme.colors.primaryText}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="40px"
        d="M368 144L144 368"
      />
    </svg>
  );
}

export default CloseIcon;
