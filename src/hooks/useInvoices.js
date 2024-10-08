import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'invoices';

export function useInvoices() {
  const [invoices, setInvoices] = useState(() => {
    const storedInvoices = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedInvoices ? JSON.parse(storedInvoices) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(invoices));
  }, [invoices]);

  const addInvoice = (invoice) => {
    setInvoices((prevInvoices) => [...prevInvoices, { ...invoice, id: uuidv4() }]);
  };

  const deleteInvoice = (id) => {
    setInvoices((prevInvoices) => prevInvoices.filter((invoice) => invoice.id !== id));
  };

  return { invoices, addInvoice, deleteInvoice };
}