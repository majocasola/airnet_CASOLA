import React, {useState} from 'react'

function ItemCount({stock, initial = 1, onAdd}) {
    const [count, setCount] = useState(initial);

    function sumar(){
        if (count < stock){
            setCount(count + 1);
        }
        else{
            alert("Llegaste al maximo del producto disponible")
        }
        
    }

    function restar(){
        if (count > 0)
        setCount(count - 1);
    }

  return (
    <div className = "container">
        <div style={{"maxWidth": "300px"}} className="container">
            <div className="border-primary container mt-3" id='botonCarrito'>
                <div className="btn-group" role="group" aria-label='Basic outlined example'>
                    <button onClick={restar} type="button" className="btn btn-outline-primary">-</button>
                        <p className="my-auto px-3">{count}</p>
                    <button onClick={sumar} type="button" className="btn btn-outline-primary">+</button>
                </div>
            </div> 
            <div className="container">
                <div className="text-center d-flex flex-column">
                    <button disabled={ count <=0} 
                    onClick={()=> onAdd(count)} 
                    type='button' 
                    className="mt-3 btn btn-primary cart-button px-3 mt-2">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ItemCount