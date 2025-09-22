import React, { useContext, useRef, useState } from 'react'
import { InvoiceContext } from '../context/InvoiceContext'
import { v4 as uuidv4 } from 'uuid';
//prime imports
import { Button } from 'primereact/button';
import { Form } from 'react-bootstrap';

import { Toast } from 'primereact/toast';



const CreateInvoices = () => {
  const { addInvoice } = useContext(InvoiceContext)

  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({ severity: 'success', summary: 'Success', detail: 'Invoice created', life: 3000 });
  }

    const showError = () => {
    toast.current.show({ severity: 'danger', summary: 'Error', detail: 'Need to fill out all the required (*) fields!', life: 1000 });
  }

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [taxNumber, setTaxNumber] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [total, setTotal] = useState(0)

  function handlerAddInvoce() {
    if(firstName === "" || lastName === "" || address === "" || taxNumber === "" || quantity === 0 || price === 0){
      showError()
      return
    } {
    addInvoice({
      id: uuidv4(),
      firstname: firstName,
      lastname: lastName,
      address: address,
      taxnumber: taxNumber,
      quantity: quantity,
      price: price,
      description: description,
      total: total
    })

    showSuccess()
    setAddress("")
    setDescription("")
    setFirstName("")
    setLastName("")
    setPrice()
    setQuantity()
    setTaxNumber("")
    setTotal()
  }}

  return (
    <div>
      <div className='flex justify-content-center'>
        <h1>Create Invoice</h1>
      </div>
      <div className="card flex justify-content-center">
        <Toast ref={toast} />
      </div>
      <div>
        <form className='flex justify-content-center gap-3 form-control'>
          <div className='flex flex-column gap-2'>
            <Form.Label htmlFor="Name">First Name*</Form.Label>
            <Form.Control id="FullName" type='text' onChange={(e) => setFirstName(e.target.value)} required />

            <Form.Label htmlFor="FullName">Last Name*</Form.Label>
            <Form.Control id="FullName" type='text' onChange={(e) => setLastName(e.target.value)} required />

            <Form.Label htmlFor="Address">Address*</Form.Label>
            <Form.Control id="Address" type='text' onChange={(e) => setAddress(e.target.value)} required />

            <Form.Label htmlFor="TaxNumber">Tax-Number*</Form.Label>
            <Form.Control id="TaxNumber" type='text' onChange={(e) => setTaxNumber(e.target.value)} required />
          </div>
          <div className='flex flex-column gap-2'>
            <Form.Label htmlFor="Quantity">Quantity*</Form.Label>
            <Form.Control id="Quantity" type="Number" onChange={(e) => setQuantity(Number(e.target.value))} required />

            <Form.Label htmlFor="Price">Price/Qty*</Form.Label>
            <Form.Control id="Price" type='Number' onChange={(e) => setPrice(Number(e.target.value))} required />

            <Form.Label htmlFor="Desc">Description</Form.Label>
            <Form.Text as="textarea" rows="5" onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div>

          </div>
        </form>
        <div className='flex justify-content-center mt-4'>
          <Button
            label="Create Invoice"
            severity="success"
            onClick={() => handlerAddInvoce()}
            type='submit'
          />
        </div>
      </div>
    </div>
  )
}

export default CreateInvoices
