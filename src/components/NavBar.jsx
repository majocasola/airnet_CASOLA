import React from 'react'
import logo from '../img/logo.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return ( 

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/'>
                <img height="34" src={logo} alt="Logo airnet"/>
            </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item">
            <Link className='nav-link' to="/category/Auto">Auto</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to="/category/Medicina">Medicina</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to="/category/Clinica">Clinica</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to="/category/Cirugia">Cirugia</Link>
            </li>
            <li className="nav-item">
                <CartWidget/>
            </li>
        </ul>
    </div>

</nav>

  )
}

export default NavBar