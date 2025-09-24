import React from 'react'
import Home from './pages/Home'
import Navigation from "./components/navigation/Navigation"
import CreateInvoices from './pages/CreateInvoices'
import Support from './pages/Support'
import { BrowserRouter, Route, Routes } from 'react-router'
import Page404 from './pages/Page404'
import InvoiceDownload from './pages/InvoiceDownload'

function App() {
  return (

      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>} />
          <Route path="/create-invoice" element={<CreateInvoices />} />
          <Route path="/support" element={<Support />} />
          <Route path="/download-invoice" element={<InvoiceDownload />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

