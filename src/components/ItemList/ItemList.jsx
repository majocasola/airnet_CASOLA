import React from 'react'
import Item from './Item.jsx'

export default function ItemList({items}) {
  return (
    <div className='row g-3 text-center justify-content-center mb-3 pb-4'>

        { items.map(item => 
                    <Item
                        key={item.id} 
                        item={item}
                    />    
        )}
    </div>


  )
}
