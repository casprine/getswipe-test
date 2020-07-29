import React from 'react';
import styled from 'styled-components';

// components
import { TextInput } from '../formElements';
import { CalendarIcon } from '../../icons';

const InvoiceBilling = () => {
  return (
    <StyledInvoiceBilling>
      <h4 className="black-text">Billing</h4>

      <div className="form-control">
        <label>When is payment due</label>
        <TextInput placeholder="30 days from now" prependIcon={CalendarIcon} />
      </div>

      <div className="form-control">
        <label>Set early payment discount</label>
        <div className="flex">
          <TextInput placeholder="Do not award discount" className="first-item" />
          <TextInput placeholder="0.00" />
        </div>
      </div>

      <div className="form-control">
        <label>How do you want to get paid?</label>
        <select>
          <option value="">Use Swipe payment page</option>
        </select>

        <label>A link to a swipe payment page will be included in the invoice email</label>
      </div>

      <div className="form-control">
        <label>Accepted payment methods</label>

        <div className="payment-options">
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
        </div>
      </div>
    </StyledInvoiceBilling>
  );
};

const StyledInvoiceBilling = styled.div`
  select {
    margin: 5px 0;
  }

  .form-control {
    margin-top: 15px;
    label {
      font-size: 12px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray500};
    }

    .prepend-icon {
      margin-top: -10px;
    }

    input {
      width: 100%;
      margin: 5px 0;
    }

    .flex {
      width: 100%;
      display: grid;
      grid-column-gap: ${({ theme }) => theme.padding.xlg};
      grid-template-columns: 4fr 1.5fr;

      input {
        min-width: auto;
      }
    }
  }
`;

export default InvoiceBilling;
