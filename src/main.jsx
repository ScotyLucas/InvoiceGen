import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'

//boostrap import
import "bootstrap/dist/css/bootstrap.min.css";

//prime import
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { InvoiceContextProvider } from './context/InvoiceContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InvoiceContextProvider>
      <App />
    </InvoiceContextProvider>
  </React.StrictMode>
);