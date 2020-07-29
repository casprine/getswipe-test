import * as React from 'react';
import PropTypes from 'prop-types';

// theme
import theme from '../theme';

function CalendarIcon(props) {
  return (
    <svg x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve" {...props}>
      <path d="M452 40h-24V0h-40v40H124V0H84v40H60C26.916 40 0 66.916 0 100v352c0 33.084 26.916 60 60 60h392c33.084 0 60-26.916 60-60V100c0-33.084-26.916-60-60-60zm20 412c0 11.028-8.972 20-20 20H60c-11.028 0-20-8.972-20-20V188h432v264zm0-304H40v-48c0-11.028 8.972-20 20-20h24v40h40V80h264v40h40V80h24c11.028 0 20 8.972 20 20v48z" />
      <path d="M76 230H116V270H76z" />
      <path d="M156 230H196V270H156z" />
      <path d="M236 230H276V270H236z" />
      <path d="M316 230H356V270H316z" />
      <path d="M396 230H436V270H396z" />
      <path d="M76 310H116V350H76z" />
      <path d="M156 310H196V350H156z" />
      <path d="M236 310H276V350H236z" />
      <path d="M316 310H356V350H316z" />
      <path d="M76 390H116V430H76z" />
      <path d="M156 390H196V430H156z" />
      <path d="M236 390H276V430H236z" />
      <path d="M316 390H356V430H316z" />
      <path d="M396 310H436V350H396z" />
    </svg>
  );
}

CalendarIcon.defaultProps = {
  fill: PropTypes.string,
};

CalendarIcon.defaultProps = {
  fill: theme.colors.gray500,
};

export default CalendarIcon;
