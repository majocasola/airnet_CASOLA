import React, {useEffect, useState} from 'react'
import products from '../../database/products.js'
import ItemDetail from './ItemDetail.jsx';
import {useParams} from "react-router-dom"


function getProducto (titleid) {

  return new Promise((resolve, reject) =>{
    setTimeout (function(){
      let title = products.find (item => item.id === Number(titleid));
      resolve(title)
      }, 500);
  });
}


function ItemDetailContainer({greeting, id}) {
  const [item, setItem] = useState([]);
  const {titleid} = useParams();

  useEffect (() => {
    getProducto (titleid)
    .then( respuestaPromise => setItem(respuestaPromise))
  }, [titleid]);
 


  return (
    <>
    <h1>{greeting}</h1>
    <ItemDetail item={item}/>
  
    </>)
}

export default ItemDetailContainer