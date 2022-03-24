import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../context/CartContext';




function CartWidget() {
  const {countItemsInCart} = useCartContext();

  return (
    <header id="layaout-header" className='header'>
      <Link to='/'>
        <h1>Mi Tienda</h1>
      </Link>
    
      <Link to="/cart" className="cart-widget-link">
        {
        countItemsInCart() > 0 ? 
        <span className="cart-widget-count">{countItemsInCart()}</span>
        :
        <span className="cart-widget-count">0</span>
        }
        <h1>Carro de Compras</h1>
        {countItemsInCart()} 
      </Link>

    
    </header>
  )      

}

export default CartWidget