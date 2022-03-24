
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartView from './components/ItemList/CartView';
import { CartContextProvider } from "./context/CartContext";




const App = () => {

  return (
    <CartContextProvider> 
        <BrowserRouter className="App">
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
              <Route path="/title/:titleid" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<CartView/>}/>
            </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
} 

export default App