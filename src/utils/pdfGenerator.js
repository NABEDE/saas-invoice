import { jsPDF } from "jspdf";

export const generatePDF = (invoice) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Facture", 105, 20, null, null, "center");

  doc.setFontSize(12);
  doc.text(`Numéro de facture: ${invoice.invoiceNumber}`, 20, 40);
  doc.text(`Client: ${invoice.client}`, 20, 50);
  doc.text(`Total: $${invoice.total.toFixed(2)}`, 20, 60);

  doc.setFontSize(10);
  doc.text("Merci pour votre confiance !", 105, 80, null, null, "center");

  doc.save(`facture_${invoice.invoiceNumber}.pdf`);
};