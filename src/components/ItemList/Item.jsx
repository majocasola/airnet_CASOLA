import React from 'react'

export default function Item({item}) {
  return (
    <div>
        <h2>{item.title}</h2>
        <img src={item.imageUrl} alt={item.title}/>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
    </div>
  )
}
