import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ children, variant, onClick, className, ...rest }) => {
  return (
    <>
      <StyledButton className={`${className}`} variant={variant} {...rest}>
        {children}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  border-radius: 4px;
  background-color: ${({ theme, variant }) => (variant === 'outline' ? 'white' : theme.colors.primaryText)};
  padding: ${({ theme }) => `${theme.padding.lg} ${theme.padding.xlg}`};
  border: 1px solid ${({ theme, variant }) => (variant === 'outline' ? theme.colors.gray300 : theme.colors.primaryText)};
`;

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
