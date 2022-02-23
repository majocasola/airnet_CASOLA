import React from 'react'
import logo from '../img/logo.png';

function NavBar() {
  return ( 

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href='/'>
                <img height="34" src={logo} alt="Logo airnet"/>
            </a>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Nosotros</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Notebooks</a>
            </li>
            <li class="nav-item">
            <a class="nav-link">Celulares</a>
            </li>
            <li class="nav-item">
            <a class="nav-link">Tablets</a>
            </li>
            <li class="nav-item">
            <a class="nav-link">Accesorios</a>
            </li>
        </ul>
    </div>

</nav>

    // <nav className="navbar nabar-expand-sm px-5">
    //     <div className="container-fluid">
    //         <a className="navbar-brand" href='/'>
    //             <img height="34" src={logo} alt="Logo airnet"/>
    //         </a>
    //     </div>
        
    //     <div className="collapse navbar-collapse" id='navbarNav'>
    //         <ul className='navbar-nav'>
    //             <li className='nav-item'>
    //                 <a className='nav-link active' aria-current="page" href='/'>Inicio</a>
    //             </li>
    //             <li className='nav-item'>
    //                 <a className='nav-link' href='/'>Nosotros</a>
    //             </li>
    //             <li className='nav-item'>
    //                 <a className='nav-link' href='/'>Notebooks</a>
    //             </li>
    //             <li className='nav-item'>
    //                 <a className='nav-link' href='/'>Tablets</a>
    //             </li>
    //             <li className='nav-item'>
    //                 <a className='nav-link' href='/'>Celulares</a>
    //             </li>
    //             <li className='nav-item'>
    //                 <a className='nav-link' href='/'>Accesorios</a>
    //             </li>
    //         </ul>


    //     </div>


    // </nav>
  )
}

export default NavBar