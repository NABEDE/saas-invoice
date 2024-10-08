import React from 'react';
import { useInvoices } from '../hooks/useInvoices';
import { generatePDF } from '../utils/pdfGenerator';

function InvoiceList() {
  const { invoices, deleteInvoice } = useInvoices();

  return (
    <div>
      <h1>Liste des factures</h1>
      <table>
        <thead>
          <tr>
            <th>Numéro de facture</th>
            <th>Client</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.client}</td>
              <td>{invoice.total.toFixed(2)} €</td>
              <td>
                <button className="btn-delete" onClick={() => deleteInvoice(invoice.id)}>Supprimer</button>
                <button className="btn-download" onClick={() => generatePDF(invoice)}>Télécharger PDF</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InvoiceList;