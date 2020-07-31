import React, { createContext, useState } from 'react';

const Store = createContext({});

const Provider = ({ children }) => {
  const [invoiceItems, setInvoiceItems] = useState([
    {
      description: '',
      quantity: 1,
      unitPrice: '0.00',
      id: '3288540e-37fb-467d-9a2c-502756c625a8',
    },
  ]);

  return (
    <Store.Provider
      value={{
        invoiceItems,
        handleInvoiceItemChange,
        addNewInvoiceItem,
      }}
    >
      {children}
    </Store.Provider>
  );

  function addNewInvoiceItem() {
    setInvoiceItems([
      ...invoiceItems,
      {
        description: '',
        quantity: 1,
        unitPrice: '0.00',
        id: '3288540e-37fb-467d-9a2c-502756c625a8',
      },
    ]);
  }

  function handleInvoiceItemChange(e, id) {
    const { value, name } = e.target;
    const selectedItemIndex = invoiceItems.findIndex((invoice) => invoice.id === id);

    const selectedItem = invoiceItems.filter((invoice) => invoice.id === id)[0];
    selectedItem[name] = value;

    const updatedInvoiceItems = [
      ...invoiceItems.slice(0, selectedItemIndex),
      selectedItem,
      ...invoiceItems.slice(selectedItemIndex + 1, invoiceItems.length),
    ];

    setInvoiceItems(updatedInvoiceItems);
  }
};

export { Provider };
export default Store;
