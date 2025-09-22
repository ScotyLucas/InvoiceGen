import React from 'react'
import PubNav from './PubNav'
import Easyinvlogo from '../../images/EasyInvoice_logo.png'

const Navigation = () => {
  return (
    <nav className="flex justify-content-around flex-wrap align-items-center">
        <div>
        <img src={Easyinvlogo} alt='Easyinv-logo'/>
        </div>
        <div>
        <ul className="list-none flex gap-3 mt-2">
            <PubNav/>
        </ul>
        </div>
    </nav>
  )
}

export default Navigation
