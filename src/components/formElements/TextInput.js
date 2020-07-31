import React, { useReducer } from 'react';
import styled from 'styled-components';

// theme
import theme from '../../theme';

const Input = ({ prependIcon: PrependIcon, appendIcon: AppendIcon, ...rest }) => {
  const [focus, toggleFocus] = useReducer((toggled) => !toggled, false);

  const fill = focus ? theme.colors.primaryBlue : theme.colors.gray300;

  return (
    <StyledInput focus={focus} fill={fill}>
      {AppendIcon && (
        <div className="append-icon">
          <AppendIcon fill={fill} />
        </div>
      )}
      <input onBlur={toggleFocus} onFocus={toggleFocus} {...rest} />

      {PrependIcon && (
        <div className="prepend-icon">
          <PrependIcon fill={fill} />
        </div>
      )}
    </StyledInput>
  );
};

const StyledInput = styled.div`
  position: relative;

  input[type='date']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }
  input[type='date']::-webkit-calendar-picker-indicator {
    -webkit-appearance: none;
    display: none;
  }

  input {
    padding: ${({ theme }) => `12px ${theme.padding.xlg}`};
    background-color: white;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    min-width: 250px;
    border: 1px solid ${({ fill }) => fill};
    color: ${({ theme }) => theme.colors.primaryText};
    margin-top: 10px;
    outline: none;

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray500};
      font-weight: 500;
    }
  }

  .append-icon {
    position: absolute;
    text-align: right;
    left: 15px;
    top: 50%;
    margin-top: -5px;

    svg {
      width: 17px;
      height: 17px;
    }
  }

  .prepend-icon {
    position: absolute;
    text-align: right;
    right: 15px;
    top: 50%;
    margin-top: -5px;

    svg {
      width: 17px;
      height: 17px;
    }
  }
`;
export default Input;
