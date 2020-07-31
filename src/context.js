import React, { createContext, useState, useEffect } from 'react';

function uniqueId() {
  const gen = (count) => {
    let out = '';
    for (let index = 0; index < count; index++) {
      out += ((1 + Math.random()) * 0x10000 || 0).toString(16).substring(1);
    }
    return out;
  };

  return [gen(2), gen(1), gen(1), gen(1), gen(3)].join('-');
}

const Store = createContext({});

const Provider = ({ children }) => {
  const [invoiceItems, setInvoiceItems] = useState([
    {
      description: '',
      quantity: 1,
      unitPrice: '',
      id: uniqueId(),
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(null);
  const [subTotal, setSubTotal] = useState(null);

  useEffect(() => {
    const allTotalAmounts = [];

    invoiceItems.map((item) => allTotalAmounts.push(item.quantity * Number(item.unitPrice)));

    const total = allTotalAmounts.reduce((acc, item) => {
      return acc + item;
    }, 0);

    setSubTotal(Number(total).toFixed(2));
  }, [invoiceItems]);

  return (
    <Store.Provider
      value={{
        invoiceItems,
        handleInvoiceItemChange,
        addNewInvoiceItem,
        totalPrice,
        subTotal,
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
        unitPrice: '',
        id: uniqueId(),
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
