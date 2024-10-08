import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInvoices } from '../hooks/useInvoices';

function InvoiceForm() {
  const [invoiceData, setInvoiceData] = useState({
    client: '',
    invoiceNumber: '',
    total: '',
  });

  const { addInvoice } = useInvoices();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addInvoice({
      ...invoiceData,
      total: parseFloat(invoiceData.total),
    });
    navigate('/invoices');
  };

  return (
    <div>
      <h1>Créer une facture</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="client">Client :</label>
          <input
            type="text"
            id="client"
            name="client"
            value={invoiceData.client}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="invoiceNumber">Numéro de facture :</label>
          <input
            type="text"
            id="invoiceNumber"
            name="invoiceNumber"
            value={invoiceData.invoiceNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="total">Total :</label>
          <input
            type="number"
            id="total"
            name="total"
            value={invoiceData.total}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
        </div>
        <button type="submit">Créer la facture</button>
      </form>
    </div>
  );
}

export default InvoiceForm;