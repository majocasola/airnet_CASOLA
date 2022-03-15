
import NavBar from "./components/NavBar";
//import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

const App = () => {

  return (
        <div className="App">

      <NavBar/>
      <ItemDetailContainer id={9} greeting="Desafio Item Detail"/>

     </div>
  )
}

export default App