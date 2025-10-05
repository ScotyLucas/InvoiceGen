import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts.js";
import Easyinvlogo from "../images/EasyInvoice_logo.png";

pdfMake.vfs = pdfFonts.vfs;

const generatePDF = (invoice) => {

  const total = invoice.quantity * invoice.price
    
    if(!invoice) return alert("No invoice with this id")

  const docDefinition = {
    content: [
      { text: "Invoice", style: "header" },
      { text: `Name: ${invoice.firstname} ${invoice.lastname}` },
      { text: `Address: ${invoice.address}` },
      { text: `Tax Number: ${invoice.taxnumber}` },
      { text: " " },
      {
        table: {
          widths: ["*", "auto", "auto"],
          body: [
            ["Description", "Quantity", "Price/Quantity (€)"],
            [
              invoice.description,
              invoice.quantity.toString(),
              invoice.price.toLocaleString("hu-HU"),
            ],
            [
              { text: "Total", colSpan: 2, bold: true },
              {},
              `€ ${total}`,
            ],
          ],
        },
      },
    ],
    styles: {
      header: {
        fontSize: 20,
        bold: true,
        margin: [0, 0, 0, 10],
      },
    },
  };

  pdfMake.createPdf(docDefinition).download(`invoice_${invoice.id}.pdf`);
};

export default generatePDF;