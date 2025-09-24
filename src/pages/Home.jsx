import React, { useContext } from 'react'
import { InvoiceContext } from '../context/InvoiceContext'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Download from '../components/navigation/Download';
const Home = () => {

  const { invoiceItems, deleteInvoice } = useContext(InvoiceContext)

  return (
    <div className='surface-100'>
      <div className='flex justify-content-center flex-wrap'>
      <h1>Invoices</h1>
      </div>
      <div className='flex justify-content-center list-none gap-3'>
      {invoiceItems.map((items) => (
        <li key={items.id}>
          <Card className='border-0'>
            <div>Full name:</div>
            <div><strong>{items.firstname} {items.lastname}</strong></div>
            <div className='mt-3'>Address: </div>
            <div>{items.address}</div>
            <div className='mt-3'>Tax Number: </div>
            <div>{items.taxnumber}</div>
            <div className='mt-3'>Quantity: </div>
            <div>{items.quantity}</div>
            <div className='mt-3'>Price(/Qtx): </div>
            <div>{items.price}</div>
            <div className='mt-3'>Description: </div>
            <div>{items.description}</div>
            <div className='flex flex-column justify-content-center mt-3'>
              <Button
                label="Delete Invoice"
                severity="danger"
                onClick={() => deleteInvoice(items.id)}
                /></div>
              <div className='flex flex-column justify-content-center mt-3'>
              <Download /></div>
          </Card>
        </li>
      ))}
      </div>
    </div>
  )
}

export default Home
