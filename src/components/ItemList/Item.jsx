import React from 'react'
import { Link } from 'react-router-dom';

export default function Item({item}) {
  const urlpath = "/title/"+item.id;
  return (
    <div className="col-md-4">
    <div>
        <h2>{item.title}</h2>
        <img src={item.imageUrl} alt={item.title}/>
        <p>{item.description}</p>
        
    </div>
    <ul className="list-group">
      <li className="list-group-item">
      <h3 className='fs-3 bg-danger text-wrap'>
        $ {item.price}
      </h3>
      </li>
    </ul>

      <Link className="btn btn-primary" to={urlpath}>Ver detalle del producto</Link>

    </div>
  )
}
