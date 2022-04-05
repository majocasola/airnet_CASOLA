import React from 'react'
import useCartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { sendBuyOrder } from '../firebase';

function Cart() {
    const { itemsCart, clearCart, getTotal, removeItem } = useCartContext();
    const [orderId, setOrderId] = React.useState(false);

    function handleSubmit(){
        clearCart();
        setOrderId("Pending");

        const orderData = {
            buyer: {
                name: 'Maria',
                phone: '+5511999999999',
                email: 'mariacasola@gmail.com',
            },
            itmes: [...itemsCart],
            total: getTotal()
        }
        sendBuyOrder(orderData).then (res => setOrderId(res));
    }

    
    if (itemsCart.length === 0) 

    return (
        <div className='container'>

            {
                orderId && orderId === "Pending" && <h4>"Enviando pedido</h4>
            }
            {orderId && orderId !== "Pending" ?
            <div>
                <h1>Compra realizada</h1>
                <p>Esperamos que vuelvas a comprar cuando quieras</p>
                <h2>Su numero de orden es: {orderId} </h2>
                <Link to='/' className='btn btn-primary'>Volver al inicio</Link>
            </div>
            :
            <div>
            <h2>No hay productos en el carrito</h2>
            <h3>Selecciona tus productos!!</h3>
            <Link to='/' className='btn btn-primary'>Volver al inicio</Link>
        </div>
         } 
        </div>
    );
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
                    <button className='btn btn-success ml-auto' onClick={handleSubmit}>Finalizar Compra</button>
                </div>
                <div>
                <Link to='/' className='btn btn-primary'>Volver al inicio</Link>
                </div>
             
            </div> 
            
    )
}

export default Cart