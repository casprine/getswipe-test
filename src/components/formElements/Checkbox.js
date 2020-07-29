import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ text, className }) => {
  const [checked, setChecked] = React.useReducer((toggled) => !toggled, true);
  return (
    <StyledCheckbox className={className}>
      {text}
      <input type="checkbox" checked={checked} onChange={setChecked} />
      <span className="checkmark" />
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 500;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    :checked ~ .checkmark {
      background-color: ${({ theme }) => theme.colors.primaryText};
      border: 1px solid ${({ theme }) => theme.colors.primaryText};

      :after {
        display: block;
      }
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 17px;
    width: 17px;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: 4px;

    ::after {
      content: '';
      position: absolute;
      display: none;
    }
  }

  .checkmark:after {
    top: 2px;
    left: 5px;
    width: 3px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export default Checkbox;
