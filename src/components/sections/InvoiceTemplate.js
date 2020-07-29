import React from 'react';
import styled from 'styled-components';

// components
import { Checkbox } from '../formElements';

const InvoiceTemplate = () => {
  return (
    <>
      <StyledInvoiceTemplate>
        <h4 className="black-text">Template</h4>
        <select name="" id="">
          <option value="">Default</option>
        </select>

        <div className="checkbox-container">
          <Checkbox name="" value="" text="Save invoice as template" />
        </div>
      </StyledInvoiceTemplate>
    </>
  );
};

const StyledInvoiceTemplate = styled.div`
  select {
    padding: ${({ theme }) => `12px ${theme.padding.xlg}`};
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.primaryText};
    width: 100%;
    background-color: white;
    margin: 8px 0;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
  }

  h4 {
    font-size: 16px;
  }
  /* 
  * {
    outline: 1px solid red;
  } */
`;

export default InvoiceTemplate;
