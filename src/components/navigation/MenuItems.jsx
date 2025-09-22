import React from 'react'

//prime imports
import 'primeicons/primeicons.css';
import { Button } from "primereact/button";
import { NavLink } from 'react-router';

const MenuItems = ({items = []}) => {

    return (
        <>
            {items.map(({label, icon, to, severity}) =>(
                <li key={label}>
                    <NavLink to={to}>
                    <Button label={label} icon={icon} severity={severity}/>
                    </NavLink>
                </li>
            ))}
            </>
    )
}

export default MenuItems
