import { useState } from 'react'

const CreateInv = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [taxNumber, setTaxNumber] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [price, setPrice] = useState('')

      const [formData, setFormData] = useState({
    name: '',
    address: '',
    taxNumber: '',
    phoneNumber: '',
    emailaddress: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const existingData = JSON.parse(localStorage.getItem('savedData')) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem('savedData', JSON.stringify(updatedData));
    alert('Adatok hozzáadva!');
    setFormData({ name: '', email: '', age: '', city: '', note: '' }); // mezők ürítése
  };

  return (
    <div>
      <h1>Create Invoice</h1>
      <div className="fullname">
      <div className='name-text'>
        <h3>Full name:</h3>
      </div>
        <div className='name-inp'>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Full Name"
      />
      </div>
      </div>
      <div className='Address'>
        <div className='text-address'>
            <h3>Address:</h3>
        </div>
        <div className='Address-inp'>
            <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Full Address"
      />
      </div>
      </div>
      <div className="tax">
      <div className="taxnum-text">
        <h3>Tax Number:</h3>
      </div>
      <div className="taxnum-inp">
            <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Tax Number"
      />
      </div>
      </div>
      <div className="phonenum">
        <div className="phonenum-text">
          <h3>Phone Number:</h3>
        </div>
        <div className="phonenum-inp">
            <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      </div>
      </div>
      <div className="email">
        <div className="email-text">
          <h3>Email Address:</h3>
        </div>
        <div className="email-inp">
            <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Email Address"
      />
      </div>
      </div>
            <div className="price">
        <div className="price-text">
          <h3>Price:</h3>
        </div>
        <div className="price-inp">
            <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Price"
      />
      </div>
      </div>
      <button onClick={handleSave}>Create Invoice</button>
    </div>
  )
}

export default CreateInv