import React from 'react';
import styled from 'styled-components';

const InvoiceNotes = () => {
  return (
    <>
      <StyledInvoiceNotes>
        <h5 className="header black-text">Notes</h5>
        <textarea name="" id="" cols="30" rows="10" />
        <div className="footer">
          <p className="gray-text">This will appear in the invoice email, PDF, and hosted page.</p>
          <p className="gray-text">500 Characters remaining</p>
        </div>
      </StyledInvoiceNotes>
    </>
  );
};

const StyledInvoiceNotes = styled.div`
  textarea {
    width: 100%;
    margin: 15px 0;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    padding: ${({ theme }) => `12px ${theme.padding.xlg}`};
  }

  .footer {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray500};
    }
  }
`;

export default InvoiceNotes;
