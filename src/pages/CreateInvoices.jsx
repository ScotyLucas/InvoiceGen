import { useState } from 'react'
import '../CSS/createinv.css'


const CreateInv = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    taxNumber: '',
    phoneNumber: '',
    emailAddress: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const existingData = JSON.parse(localStorage.getItem('savedData')) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem('savedData', JSON.stringify(updatedData));

    const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text('Invoice', 20, 20);

  let y = 30;
  Object.entries(formData).forEach(([key, value]) => {
    doc.setFontSize(12);
    doc.text(`${key}: ${value}`, 20, y);
    y += 10;
  });

  // Mentés base64 formátumban a localStorage-be
  const pdfData = doc.output('datauristring'); // PDF adatok URI formátumban
  const pdfId = Date.now(); // egyedi azonosító
  localStorage.setItem(`invoicePDF-${pdfId}`, pdfData);

  alert('Invoice is successfully created');

    alert('Invoice is successfully created');
    setFormData({
      name: '',
      address: '',
      taxNumber: '',
      phoneNumber: '',
      emailAddress: '',
      item: '',
      quantity: '',
      price: '',
    });
  };

  return (
    <div className='box'>
      <h1>Create Invoice</h1>

      <div className="fullname">
        <div className='name-text'><h3>Full name:</h3></div>
        <div className='name-inp'>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
        </div>
      </div>

      <div className='Address'>
        <div className='text-address'><h3>Address:</h3></div>
        <div className='Address-inp'>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Full Address"
          />
        </div>
      </div>

      <div className="tax">
        <div className="taxnum-text"><h3>Tax Number:</h3></div>
        <div className="taxnum-inp">
          <input
            type="text"
            name="taxNumber"
            value={formData.taxNumber}
            onChange={handleChange}
            placeholder="Tax Number"
          />
        </div>
      </div>

      <div className="phonenum">
        <div className="phonenum-text"><h3>Phone Number:</h3></div>
        <div className="phonenum-inp">
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </div>
      </div>

      <div className="email">
        <div className="email-text"><h3>Email Address:</h3></div>
        <div className="email-inp">
          <input
            type="text"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Email Address"
          />
        </div>
      </div>

            <div className="item">
        <div className="item-text"><h3>items:</h3></div>
        <div className="item-inp">
          <input
            type="text"
            name="item"
            value={formData.item}
            onChange={handleChange}
            placeholder="Item, Item2, Item3"
          />
        </div>
      </div>
                  <div className="quantity">
        <div className="quantity-text"><h3>quantity:</h3></div>
        <div className="quantity-inp">
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
          />
        </div>
      </div>

      <div className="price">
        <div className="price-text"><h3>Price:</h3></div>
          <input
            className='price-inp'
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />
      </div>

      <button onClick={handleSave} className='createinvbutton'>Create Invoice</button>
    </div>
  );
};

export default CreateInv;
