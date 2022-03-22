import React from 'react'
import ItemCount from '../ItemCount'
import Cart from '../Cart';



function ItemDetail({item}) {
  const [countInCart, setCountInCart] = React.useState(0);
  function onAdd(count){
    setCountInCart(count);
    
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
    <Cart className="mt-3 btn btn-primary cart-button mt-3">Finalizar compra</Cart>
    }
    </div>
    
  )
}

export default ItemDetail