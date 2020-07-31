import * as React from 'react';
import styled from 'styled-components';

// component
import { TextInput } from '../formElements';
import { PlusIcon, DollarIcon } from '../../icons';

// context
import StoreContext from '../../context';

const InvoiceItem = ({ unitPrice, description, quantity, onChange, id }) => {
  return (
    <div className="grid">
      <div className="description">
        <TextInput name="description" value={description} onChange={(e) => onChange(e, id)} />
      </div>

      <div className="quantity">
        <TextInput type="number" name="quantity" value={quantity} onChange={(e) => onChange(e, id)} />
      </div>

      <div className="unit-price">
        <TextInput
          appendIcon={DollarIcon}
          className="unit-price-input"
          name="unitPrice"
          value={unitPrice}
          onChange={(e) => onChange(e, id)}
          type="number"
          placeholder="0.00"
        />
      </div>

      <div className="amount">
        <p className="black-text calculated-amount">{parseFloat(quantity * unitPrice).toFixed(2)}</p>
      </div>
    </div>
  );
};

const InvoiceItems = () => {
  const { invoiceItems, handleInvoiceItemChange, addNewInvoiceItem, totalPrice, subTotal } = React.useContext(
    StoreContext,
  );

  return (
    <Container>
      <div className="grid">
        <div className="description">
          <h5 className="black-text">Description</h5>
        </div>

        <div className="quantity">
          <h5 className="black-text">Quantity</h5>
        </div>

        <div className="unit-price">
          <h5 className="black-text">Unit Price</h5>
        </div>

        <div className="amount">
          <h5 className="black-text">Amount</h5>
        </div>
      </div>

      <div className="items">
        {invoiceItems.map((item) => (
          <InvoiceItem {...item} key={item.id} onChange={handleInvoiceItemChange} />
        ))}
      </div>

      <div className="footer grid">
        <div className="description">
          <button onClick={addNewInvoiceItem}>
            <p>Add another item</p>
            <PlusIcon fill="#1A202C" />
          </button>
        </div>

        <div className="quantity">
          <p className="gray-text">Subtotal</p>
        </div>
        <span />

        <div className="amount">
          <p className="gray-text">{subTotal}</p>
        </div>
      </div>

      <div className="tax-discount grid">
        <div className="container">
          <button>
            <p>Add Tax </p>
          </button>
          <button>
            <p>Add Discount </p>
          </button>
          <hr />

          <div className="total">
            <p className="black-text">Total</p>
            <div className="black-text">{totalPrice}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  input {
    min-width: auto;
    width: 100%;
    padding: 10px 10px;
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
      .calculated-amount {
        margin-top: 10px;
      }
      h5,
      p {
        text-align: right;
      }
    }
  }

  .footer {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border: 0;

      p {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primaryText};
        margin-right: 10px;
      }
    }

    .quantity,
    .amount {
      p {
        font-size: 13px;
        font-weight: 500;
      }
    }
  }

  .tax-discount {
    .container {
      grid-column-start: 2;
      grid-column-end: 5;
      display: flex;
      flex-direction: column;
      justify-items: flex-start;
      align-items: flex-start;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: 0;
        padding: 0;
        margin-bottom: 10px;

        p {
          color: ${({ theme }) => theme.colors.primaryGreen};
          font-weight: 500;
        }
      }

      hr {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.gray300};
        height: 1px;
        border: 0;
        margin-bottom: 20px;
      }

      .total {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }
  }

  .unit-price-input {
    text-align: RIGHT;
    padding-left: 30px;
  }

  .append-icon {
    margin-top: -3px;
    left: 10px;
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

export default InvoiceItems;
