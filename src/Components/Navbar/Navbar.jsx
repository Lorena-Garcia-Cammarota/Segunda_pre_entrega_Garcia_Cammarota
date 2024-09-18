import React from 'react'
import "./navbar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    return (

        <header>
            <Link to="/">
                <h1><img className='imgIcono' src="/img/logo.png" alt="Icono" /> Mundo Plantas Online </h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/"> Productos </NavLink>
                    </li>

                    <li>
                        <NavLink to="/categoria/Plantas-Interiores"> Plantas Interiores </NavLink>
                    </li>
                        
                    <li>
                        <NavLink to="/categoria/Plantas-Exteriores"> Plantas Exteriores </NavLink> 
                    </li>
                        
                    <li>
                        <NavLink to="/categoria/Otros"> Otros </NavLink> 
                    </li>
                </ul>
            </nav>

            <CartWidget/>
        
        </header>
    )
}

export default Navbar


