import React from 'react';
import styled from 'styled-components';

// components
import Input from './Input';
import { StarIcon, PenIcon, HashIcon, CalendarIcon } from '../icons';

const InvoiceDetails = () => {
  return (
    <>
      <StyledInvoiceDetails>
        <div className="left">
          <div className="logo-container">
            <StarIcon />
          </div>
          <div className="company">
            <h4 className="company-name">Swipe</h4>
            <div className="company-email">
              <p className="gray-text">vendors@getswipe.com</p>
              <div className="edit-icon center" tabIndex="3">
                <PenIcon />
              </div>
              <h5 tabIndex="3">Edit</h5>
            </div>
          </div>
        </div>

        <div className="right">
          <Input placeholder="Invoice Number" prependIcon={HashIcon} />
          <Input placeholder="Your Address" prependIcon={HashIcon} />
          <Input placeholder="Invoice Date" prependIcon={CalendarIcon} />
        </div>
      </StyledInvoiceDetails>
    </>
  );
};

const StyledInvoiceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* 
  outline: 1px solid red;

  * {
    outline: 1px solid red;
  } */

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 110px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primaryText};
    margin-bottom: 60px;
  }

  .left {
    .company-email {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;

      p {
        font-size: 14px;
      }

      .edit-icon {
        width: 20px;
        height: 20px;
        padding: 5px;
        border-radius: 10px;
        background: ${({ theme }) => theme.colors.primaryGreen};
        margin: 0 10px;
        cursor: pointer;
      }

      h5 {
        cursor: pointer;
      }
      font-weight: 400;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
  }
`;

// Components
// left -> {
//     image - done
//     dropdown
//     selected customer
// }

// right -> {
//     invoice number
//     Address input
//     Datepicker
// }

export default InvoiceDetails;
