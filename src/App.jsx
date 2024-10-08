import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import InvoiceList from './components/InvoiceList';
import InvoiceForm from './components/InvoiceForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Tableau de bord</Link></li>
            <li><Link to="/invoices">Factures</Link></li>
            <li><Link to="/create-invoice">Créer une facture</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/invoices" element={<InvoiceList />} />
          <Route path="/create-invoice" element={<InvoiceForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;