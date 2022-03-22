import React from 'react'
import Item from './Item.jsx'

export default function ItemList({items}) {
  return (
    <div className='container justify-content-between d-flex flex-row flex-warap'>

        { items.map(item => 
                    <Item
                        key={item.id} 
                        item={item}
                    />    
        )}
    </div>


  )
}
