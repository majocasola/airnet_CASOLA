
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";



const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvendidos a AirNet !"/>
      <h4>Notebooks</h4>

      <ItemCount
       stock={10}
       initial={1}
       /> 

      <hr/>
      <h4>Tablets</h4>

      <ItemCount
            stock={10}
            initial={1}
            />

      <hr/>
      <h4>Celulares</h4>

      <ItemCount
            stock={10}
            initial={1}
            />
      <hr/>
      <h4>Accesorios</h4>
      <ItemCount
            stock={10}
            initial={1}
            />
       
     
     </>
  )
}

export default App