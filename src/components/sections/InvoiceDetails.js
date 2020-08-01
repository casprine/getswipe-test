import React from 'react';
import styled from 'styled-components';

// theme
import theme from '../../theme';

// components
import { TextInput, Select } from '../formElements';
import { StarIcon, PenIcon, HashIcon, CalendarIcon, PlusIcon } from '../../icons';

// context
import StoreContext from '../../context';

const options = [
  {
    custom: true,
  },

  {
    label: 'recent',
    options: [
      {
        value: 'jesse@getswipe.com',
        label: 'Jesse Ghansah',
      },

      {
        value: 'finance@ogilvy.com',
        label: 'Ogilvy Finance',
      },
    ],
  },
];

const CustomOption = ({ innerProps, isDisabled, data, isFocused, ...rest }) => {
  return (
    <>
      {!isDisabled ? (
        <StyledOption className="custom-option" isFocused={isFocused} {...innerProps} {...rest}>
          {data.custom ? (
            <div className="add-new-customer" onClick={() => null}>
              <PlusIcon fill={isFocused ? 'white' : 'black'} />
              <p className="black-text">Add New Customer</p>
            </div>
          ) : (
            <>
              <p className="black-text">{data.label}</p>
              <p className="gray-text">{data.value}</p>
            </>
          )}
        </StyledOption>
      ) : null}
    </>
  );
};

const formatGroupLabel = (data) => (
  <div className="group-label">
    <span>{data.label}</span>
  </div>
);

const InvoiceDetails = () => {
  const { invoiceDetails, handleInvoiceDetailChange, selectedCustomer, selectCustomer } = React.useContext(
    StoreContext,
  );

  const [calendarType, setCalendarType] = React.useState('text');
  const [openSelect, setOpenSelect] = React.useState(false);
  const [showSelect, setShowSelect] = React.useState(true);

  return (
    <>
      <StyledInvoiceDetails>
        <div className="left">
          <div className="logo-container">
            <StarIcon />
          </div>

          {showSelect && (
            <div className="select-company">
              <label>Bill To</label>
              <Select
                onBlur={() => setOpenSelect(false)}
                onFocus={() => setOpenSelect(true)}
                menuIsOpen={openSelect}
                value={selectedCustomer}
                onChange={(value) => {
                  if (value.custom) return;

                  selectCustomer(value);
                  setShowSelect(false);
                }}
                placeholder="Select or add customer"
                options={options}
                formatGroupLabel={formatGroupLabel}
                components={{
                  Option: CustomOption,
                }}
              />
            </div>
          )}

          {!showSelect && (
            <div className="company">
              <h4 className="company-name">Swipe</h4>
              <div className="company-email">
                <p className="gray-text">{selectedCustomer.value}</p>
                <div className="edit-icon center" tabIndex="3" onClick={() => setShowSelect(true)}>
                  <PenIcon />
                </div>
                <h5 tabIndex="3" onClick={() => setShowSelect(true)}>
                  Edit
                </h5>
              </div>
            </div>
          )}
        </div>

        <div className="right">
          <TextInput
            placeholder="Invoice Number"
            prependIcon={HashIcon}
            value={invoiceDetails.number}
            name="number"
            type="number"
            onChange={handleInvoiceDetailChange}
          />
          <TextInput
            placeholder="Your Address"
            prependIcon={HashIcon}
            value={invoiceDetails.address}
            name="address"
            onChange={handleInvoiceDetailChange}
          />
          <TextInput
            placeholder="Invoice Date"
            prependIcon={CalendarIcon}
            value={invoiceDetails.date}
            type={calendarType}
            name="date"
            onChange={handleInvoiceDetailChange}
            onFocus={() => setCalendarType('date')}
            onBlur={() => {
              if (invoiceDetails.date) return;
              setCalendarType('text');
            }}
          />
        </div>
      </StyledInvoiceDetails>
    </>
  );
};

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${({ isFocused }) => (isFocused ? 'rgb(38, 132, 255)' : 'white')};

  .black-text {
    margin-right: 10px;
    flex-basis: 0.7;
    color: ${({ isFocused }) => (isFocused ? 'white' : theme.colors.primaryText)};
  }

  .gray-text {
    font-weight: 400;
    font-size: 12px;
    color: ${({ isFocused }) => (isFocused ? 'white' : theme.colors.gray500)};
  }
`;

const StyledInvoiceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .add-new-customer {
    display: flex;
    align-items: flex-end;

    p {
      margin-left: 10px;
    }
  }

  .select-company {
    width: 300px;

    .select {
      margin: 10px 0;
      cursor: pointer;
    }
    label {
      font-size: 12px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray500};
    }

    .group-label {
      color: ${({ theme }) => theme.colors.primaryText};
      margin-bottom: 10px;
      font-size: 10px;
    }
  }

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

export default InvoiceDetails;
