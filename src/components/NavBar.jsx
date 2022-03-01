import React from 'react'
import logo from '../img/logo.png';
import CartWidget from './CartWidget';

function NavBar() {
  return ( 

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href='/'>
                <img height="34" src={logo} alt="Logo airnet"/>
            </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li className="nav-item">
            <a className="nav-link" href="#">Notebooks</a>
            </li>
            <li className="nav-item">
            <a className="nav-link">Celulares</a>
            </li>
            <li className="nav-item">
            <a className="nav-link">Tablets</a>
            </li>
            <li className="nav-item">
            <a className="nav-link">Accesorios</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
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