import React from 'react';
import styled from 'styled-components';

// components
import { TextInput, Checkbox, Select } from '../formElements';
import { CalendarIcon, VisaIcon, BankIcon, SwipeIcon, CreditCardIcon } from '../../icons';

// dropdown options
const options = [
  {
    label: 'Use Swipe payment page',
    value: 'swipe',
  },
];

const orderTypeOptions = [
  {
    label: 'Select Purchase Order',
    value: '',
  },
];

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

      <div className="form-control reduced-margin">
        <label>How do you want to get paid?</label>
        <Select defaultValue={options[0]} options={options} />

        <label>A link to a swipe payment page will be included in the invoice email</label>
      </div>

      <div className="form-control payments">
        <label>Accepted payment methods</label>
        <div className="payment-options">
          <div className="option center" tabIndex="0">
            <SwipeIcon />
          </div>
          <div className="option center" tabIndex="0">
            <VisaIcon />
          </div>
          <div className="option center" tabIndex="0">
            <BankIcon />
          </div>
          <div className="option center" tabIndex="0">
            <CreditCardIcon />
          </div>
        </div>

        <div className="link-purchase">
          <Checkbox text="Link to purchase order" />
        </div>

        <div className="purchase-order-type">
          <Select options={orderTypeOptions} defaultValue={orderTypeOptions[0]} />
        </div>
      </div>
    </StyledInvoiceBilling>
  );
};

const StyledInvoiceBilling = styled.div`
  .select {
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

  .payments {
    margin-top: 20px;

    .payment-options {
      display: grid;
      grid-column-gap: ${({ theme }) => theme.padding.lg};
      grid-template-columns: 1fr 1fr 1fr 1fr;
      margin: 10px 0;

      .option {
        padding: 8px 0;
        border: 1px solid ${({ theme }) => theme.colors.gray300};
        border-radius: 4px;
        cursor: pointer;
        pointer-events: auto;

        :focus {
          border: 1px solid ${({ theme }) => theme.colors.primaryBlue};
        }
      }
    }

    .link-purchase {
      margin: 20px 0 10px 0;

      label {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.primaryText};
      }
    }
  }
`;

export default InvoiceBilling;
