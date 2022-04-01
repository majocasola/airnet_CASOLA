import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getAllProducts, getAllProductsFromCat } from '../../firebase/index';




function ItemListContainer({greeting}) {
  const [items, setItems] = useState([]);
  const {categoryid} = useParams();

  useEffect (() => {
    if(categoryid){
      getAllProductsFromCat(categoryid)
    .then( respuestaPromise => setItems(respuestaPromise))
  }
  else
  {
    getAllProducts()
    .then( respuestaPromise => setItems(respuestaPromise))
  }
  }, [categoryid]);

 


  return (
    <>
    <h1>{greeting}</h1>
    <ItemList items={items}/>
    </>)
}

export default ItemListContainer