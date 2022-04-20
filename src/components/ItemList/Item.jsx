import React from 'react'
import { Link } from 'react-router-dom';

export default function Item({item}) {
  const urlpath = "/title/"+item.id;
  return (
    <div className="col-md-4">
    <div>
        <h2>{item.title}</h2>
        <img width="350" src={item.imageUrl} alt={item.title}/>
        <p className='descripcion'>{item.description}</p>
        
    </div>
    <ul className="list-group">
      <li className="list-group-item">
      <h3 className="precio">
        $ {item.price}
      </h3>
      </li>
    </ul>

      <Link className="btn btn-primary" to={urlpath} id="botonDetalle" >Ver detalle del producto</Link>

    </div>
  )
}
