import React, {useEffect, useState} from 'react'
import products from '../database/products'
import ItemList from './ItemList';

function getDatos () {

  return new Promise((resolve, reject) =>{
    setTimeout(() => resolve(products), 5000);

  });
}


function ItemListContainer({greeting}) {
  const [items, setItems] = useState([]);

  useEffect (() => {
    getDatos ()
    .then( respuestaPromise => setItems(respuestaPromise))
  }, []);
 


  return (
    <>
    <h1>{greeting}</h1>
    <ItemList items={items}/>
    </>)
}

export default ItemListContainer