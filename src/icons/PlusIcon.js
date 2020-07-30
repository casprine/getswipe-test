import * as React from 'react';

function PlusIcon(props) {
  return (
    <svg width={20} height={20} viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
        d="M256 112L256 400"
      />
      <path
        fill="none"
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
        d="M400 256L112 256"
      />
    </svg>
  );
}

PlusIcon.defaultProps = {
  fill: 'white',
};

export default PlusIcon;
