import React from 'react';
import styled from 'styled-components';

// components
import { Checkbox, Select } from '../formElements';

// dropdown options
const options = [
  {
    label: 'Default',
    value: 'default',
  },
];

const InvoiceTemplate = () => {
  return (
    <>
      <StyledInvoiceTemplate>
        <h4 className="black-text">Template</h4>
        <Select defaultValue={options[0]} className="select" options={options} />

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
