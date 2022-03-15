import React from 'react'
import ItemCount from '../ItemCount'

function ItemDetail({item}) {
  return (
    <div>
    <h2>{item.title}</h2>
    <img src={item.imageUrl} alt={item.title}/>
    <p>{item.description}</p>
    <h3>{item.price}</h3>
    <ItemCount initial={1} stock={item.stock}/>
    </div>
  )
}

export default ItemDetail