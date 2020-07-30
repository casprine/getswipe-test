import * as React from 'react';
import PropTypes from 'prop-types';

// theme
import theme from '../theme';
function DollarIcon({ fill, ...rest }) {
  return (
    <svg viewBox="0 0 339.004 339.004" xmlSpace="preserve" {...rest}>
      <path
        d="M262.122 232.344c.197-26.82-10.405-48.031-31.552-63.01-16.333-11.533-36.154-17.549-55.325-23.33-39.936-12.107-51.521-18.484-51.521-37.582 0-21.273 27.646-28.842 51.313-28.842 17.236 0 37.066 5.359 49.381 13.301l24.415-37.812c-16.095-10.434-38.123-17.551-59.875-19.76V0H143.92v37.785c-40.035 8.807-65.255 34.973-65.255 70.637 0 24.977 10.379 44.785 30.79 58.756 15.524 10.666 34.457 16.393 52.746 21.938 39.172 11.84 55.079 19.055 54.898 42.949l-.001.176c0 20.055-26.577 27.184-49.346 27.184-21.508 0-44.897-9.426-58.155-23.441l-32.719 30.949c16.79 17.758 41.184 30.313 67.041 35.234v36.838h45.039V302.96c44.487-6.368 73.12-33.151 73.164-70.616z"
        fill={fill}
      />
    </svg>
  );
}

DollarIcon.defaultProps = {
  fill: PropTypes.string,
};

DollarIcon.defaultProps = {
  fill: theme.colors.gray500,
};

export default DollarIcon;