
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
const App = () => {

  return (
        <BrowserRouter className="App">
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemDetailContainer/>}/>
              <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
              <Route path="/title/:titleid" element={<ItemDetailContainer/>}/>
              <Route path="/" element={<Cart/>}/>

            </Routes>
 
      </BrowserRouter>
  )
} 

export default App