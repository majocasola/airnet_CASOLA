import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import products from '../../database/products'
import ItemList from './ItemList';

function getDatos (categoryid) {

  return new Promise((resolve, reject) =>{
    setTimeout(function() {
      if (!categoryid){
        resolve(products);
      }
      else{
        let productosvarios = products.filter (item => item.category === categoryid);
        resolve(productosvarios);

      }

     }, 2000);

  });
}


function ItemListContainer({greeting}) {
  const [items, setItems] = useState([]);
  const {categoryid} = useParams();

  useEffect (() => {
    getDatos (categoryid)
    .then( respuestaPromise => setItems(respuestaPromise))
  }, [categoryid]);
 


  return (
    <>
    <h1>{greeting}</h1>
    <ItemList items={items}/>
    </>)
}

export default ItemListContainer