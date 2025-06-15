import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import './CSS/styles.css'
import Background from './components/Background.jsx'

function App() {

    const items = [

  { label: "Home", href: "#" },

  { label: "About", href: "#" },

  { label: "Contact", href: "#" },

];

const items2 = [

  { label: "Logout", href: "#" }

];


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

    <div className='Welcome'>
      <h1>Welcome, Demo User</h1>
    </div>
</div>

  )
}

export default App;
