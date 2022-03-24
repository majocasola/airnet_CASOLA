import React, {useState} from 'react'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'
import useCartContext from '../../context/CartContext';



function ItemDetail({item}) {

  const {addItem} = useCartContext();
  const [countInCart, setCountInCart] = useState(0);

  function onAdd(count){
    setCountInCart(count);
    addItem(item, count);
    
}

  return (
    <div>
    <h2>{item.title}</h2>
    <img src={item.imageUrl} alt={item.title}/>
    <p>{item.description}</p>
    <h3>{item.price}</h3>
    
    <hr/>
    { countInCart === 0 ?
    <ItemCount onAdd={onAdd}  stock={item.stock} initial={1}/>
    :
    <Link to="/cart" className="mt-3 btn btn-primary cart-button mt-3">Finalizar compra</Link>
    }
    </div>
    
  )
}

export default ItemDetail