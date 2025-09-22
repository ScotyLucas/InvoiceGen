import React, { createContext, useEffect, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const InvoiceContext = createContext();

export const InvoiceContextProvider = ({ children }) => {
  const [invoiceItems, setInvoiceItems] = useState(() => {
    const savedInvoice = localStorage.getItem('invoices');
    try {
      return savedInvoice ? JSON.parse(savedInvoice) : [];
    } catch {
      return [];
    }
  });

  const addInvoice = (newInvoice) => {
    setInvoiceItems((prev) => [...prev, newInvoice]);
  };

  useEffect(() => {
    localStorage.setItem('invoices', JSON.stringify(invoiceItems));
  }, [invoiceItems]);

  const deleteInvoice = (id) =>
    setInvoiceItems((prev) => prev.filter((item) =>item.id !== id))

  return (
    <InvoiceContext.Provider value={{ invoiceItems, addInvoice, deleteInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};