import React, {useEffect, useState} from 'react'
import products from '../../database/products.js'
import ItemDetail from './ItemDetail.jsx';


function getProducto (id) {

  return new Promise((resolve, reject) =>{
    setTimeout (function(){
      const encontrado = products.find (function (itemIterado){
        return (itemIterado. id ===id);
      })
     resolve(encontrado);
    }, 5000);

  });
}


function ItemDetailContainer({greeting, id}) {
  const [item, setItem] = useState([]);

  useEffect (() => {
    getProducto (id)
    .then( respuestaPromise => setItem(respuestaPromise))
  }, []);
 


  return (
    <>
    <h1>{greeting}</h1>
    <ItemDetail item={item}/>
  
    </>)
}

export default ItemDetailContainer