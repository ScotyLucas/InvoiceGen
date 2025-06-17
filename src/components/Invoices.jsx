import { useEffect, useState } from 'react';

const DisplayPage = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('savedData');
    if (stored) {
      setDataList(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      {dataList.length === 0 ? (
        <p>No invoices</p>
      ) : (
        <ul>
          {dataList.map((data, index) => (
            <li key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc' }}>
           <p><strong>Név:</strong> {data.name}</p>
            <p><strong>Address:</strong> {data.email}</p>
             <p><strong>Tax Number:</strong> {data.age}</p>
            <p><strong>Phone Number:</strong> {data.city}</p>
             <p><strong>Email Address:</strong> {data.note}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayPage;