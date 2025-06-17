import { useEffect, useState } from 'react';
import '../CSS/invoicelist.css'
import Folder from './Download';

const DisplayPage = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('savedData');
    if (stored) {
      setDataList(JSON.parse(stored));
    }
  }, []);

  const generatePDF = (data, index) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Invoice', 20, 20);

    let y = 30;
    Object.entries(data).forEach(([key, value]) => {
      doc.setFontSize(12);
      doc.text(`${key}: ${value}`, 20, y);
      y += 10;
    });

    doc.save(`invoice-${data.name || 'client'}-${index + 1}.pdf`);
  };

  return (
    <div className='invoices-list'>
      {dataList.length === 0 ? (
        <p>No invoices</p>
      ) : (
        <ul>
          {dataList.map((data, index) => (
            <li key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc' }}>
           <div><strong>Név:</strong> {data.name}</div>
            <div><strong>Address:</strong> {data.address}</div>
             <div><strong>Tax Number:</strong> {data.taxNumber}</div>
            <div><strong>Phone Number:</strong> {data.phoneNumber}</div>
             <div><strong>Email Address:</strong> {data.emailAddress}</div>
             <div><strong>Items:</strong> {data.item}</div>
             {/* <div><strong>Quantity:</strong> {data.quantity}</div> */}
             <div><strong>Price:</strong> {data.price}</div>
             <div><button onClick={() => generatePDF(data, index)} className="download-btn">
                <Folder size={0.5} color="#5227FF" className="custom-folder" />
              </button></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayPage;