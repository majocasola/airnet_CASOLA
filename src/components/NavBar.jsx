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
            <h1 className='AirNet'>AirNet</h1>
        </div>
        <div className="collapse navbar-collapse p-2" id="navbarNav">
        <ul className="navbar-nav" id="miNav">

            <li className="nav-item-expand-lg ">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item">
            <Link className='nav-link' to="/category/Parlantes">Parlantes</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to="/category/Mouse">Mouse</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to="/category/Teclados">Teclados</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to="/category/Gamers">Gamers</Link>
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