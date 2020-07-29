import * as React from 'react';
import styled from 'styled-components';

// component
import { TextInput } from '../formElements';

const InvoiceItem = ({}) => {
  return (
    <div className="grid">
      <div className="description">
        <TextInput />
      </div>

      <div className="quantity">
        <TextInput />
      </div>

      <div className="unit-price">
        <TextInput />
      </div>

      <div className="amount">
        <p className="black-text">0.00</p>
      </div>
    </div>
  );
};

const InvoiceItems = () => {
  return (
    <Container>
      <div className="grid">
        <div className="description">
          <p className="black-text">Description</p>
        </div>

        <div className="quantity">
          <p className="black-text">Quantity</p>
        </div>

        <div className="unit-price">
          <p className="black-text">Unit Price</p>
        </div>

        <div className="amount">
          <p className="black-text">Amount</p>
        </div>
      </div>

      <InvoiceItem />
    </Container>
  );
};

const Container = styled.div`
  input {
    min-width: auto;
    width: 100%;
    padding: 8px 15px;
  }

  .grid {
    display: grid;
    align-items: center;
    grid-column-gap: ${({ theme }) => theme.padding.lg};
    grid-template-columns: 5fr 1fr 2fr 1fr;
    margin-bottom: 20px;

    .black-text {
      font-size: 14px;
      font-weight: 500;
    }

    .amount {
      p {
        text-align: right;
      }
    }
  }
`;

export default InvoiceItems;
