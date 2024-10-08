import React from 'react';
import { useInvoices } from '../hooks/useInvoices';

function Dashboard() {
  const { invoices } = useInvoices();

  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.total, 0);
  const averageAmount = invoices.length > 0 ? totalAmount / invoices.length : 0;

  return (
    <div>
      <h1>Tableau de bord</h1>
      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Total des factures</h3>
          <p>{invoices.length}</p>
        </div>
        <div className="summary-card">
          <h3>Montant total</h3>
          <p>{totalAmount.toFixed(2)} €</p>
        </div>
        <div className="summary-card">
          <h3>Montant moyen</h3>
          <p>{averageAmount.toFixed(2)} €</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;