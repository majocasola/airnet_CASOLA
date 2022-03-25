import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../context/CartContext';




function CartWidget() {
  const {countItemsInCart} = useCartContext();

  return (
    <header id="layaout-header" className='header'>
      <Link to="/">
        <h3>Mi Tienda</h3>
      </Link>

      <Link to="/cart" className="cart-widget-link">
        <span className="material-icons">
          shopping_cart
        </span>
        {
        countItemsInCart() > 0 ? 
        <span className="cart-widget-count">{countItemsInCart()}</span>
        :
        <></>
        }
        
      </Link>

  
    </header>
  )      

}

export default CartWidget