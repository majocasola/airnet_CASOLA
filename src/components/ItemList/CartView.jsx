import React from 'react'
import useCartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';


function Cart() {
    const { itemsCart, clearCart, getTotal, removeItem } = useCartContext();
    if (itemsCart.length === 0) 


  return (
    <div className='container'>
        <h2>No hay productos en el carrito</h2>
        <h3>Selecciona tus productos!!</h3>
        <Link to='/' className='btn btn-primary'>Volver al inicio</Link>
    
    </div>
  )
  else
  return (
    <div className='container'>
        <h2>Carrito</h2>
        <h3>Productos en el carrito</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {itemsCart.map(item => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price * item.quantity}</td>
                        <td><button className='btn btn-danger' onClick={() => removeItem(item.id)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
            <h3 className='fs-3 bg-warning text-wrap'>
                $ {getTotal()}
            </h3>
        </table>
        <div className='d-flex'>
            <button className='btn btn-danger' onClick={() => clearCart()}>Vaciar carrito</button>
        </div>
        {/* <Link to='/' className='btn btn-primary'>Volver al inicio</Link>
        <Link to='/cart' className='btn btn-primary'>Finalizar compra</Link> */}


    </div>
  )
}

export default Cart