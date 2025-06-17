import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import './CSS/styles.css'
import './index.css'
import Background from './components/Background.jsx'
import Welcome from './components/Welcome.jsx'
import DisplayPage from './components/Invoices.jsx'
import CreateInv from './components/CreateInvoices.jsx'
import HorizontalLine from './components/HorizontalLine.jsx'
function App() {


  const items = [
    { label: "Home", to: "/" },
    { label: "Create Invoice", to: "./components/CreateInvoices.jsx" },
    { label: "Contact", to: "/contact" },
  ];

const items2 = [

  { label: "Logout", href: "#" }

];

const [userName, setUserName] = useState("Welcome, Demo User")


  return (
    <div className='Main'>
  <div className='Navbar grey-back'>
    <div className='Logo'>
      Logo
    </div>
  <div className='Nav'>
  
  <Navbar

    items={items}

    particleCount={0}

    particleDistances={[0, 0]}

    particleR={0}

    initialActiveIndex={0}

    animationTime={600}

    timeVariance={300}

    colors={[1, 2, 3, 1, 2, 3, 1, 4]}

  />
  </div>
  <div className='Logout'>
    <Navbar

    items={items2}

    particleCount={0}

    particleDistances={[0, 0]}

    particleR={0}

    initialActiveIndex={0}

    animationTime={600}

    timeVariance={300}

    colors={[1, 2, 3, 1, 2, 3, 1, 4]}

  />
  </div>
</div>
  <div className='welcome'>
    <h1>
      <Welcome
      text={userName}
      delay={150}
      animateBy="words"
      direction="top"
      className="text-2xl mb-8"
    /></h1>
    <div className='ads'>
    </div>
  </div>
  <div className="invoice-content">
  <div className='Invoice'>
    <h2>
      Your Invoices
    </h2>
  </div>
  </div>
  <HorizontalLine />
  <div className="invoice-content">
  <div className='Invoices'>
    <DisplayPage />
  </div>
  </div>
</div>

  )
}

export default App;
