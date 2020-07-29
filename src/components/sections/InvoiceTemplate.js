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
  h4 {
    font-size: 16px;
  }
`;

export default InvoiceTemplate;
