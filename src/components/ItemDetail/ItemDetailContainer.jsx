import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail.jsx';
import {useParams} from "react-router-dom"
import { getProducts} from '../firebase/index';



function ItemDetailContainer({greeting}) {
  const [item, setItem] = useState([]);
  const {titleid} = useParams();

  useEffect (() => {
    getProducts (titleid)
    .then( respuestaPromise => setItem(respuestaPromise))
  }, [titleid]);
 


  return (
    <>
    <h1>{greeting}</h1>
    <ItemDetail item={item}/>
  
    </>)
}

export default ItemDetailContainer