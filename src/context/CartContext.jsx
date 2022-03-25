import { createContext, useState, useContext } from "react"; 


const CartContext = createContext();
const { Provider } = CartContext;

const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children}) {

    const [itemsCart, setItemsCart] = useState([]);

    function addItem(item, quantity) {
        if (isItemInCart(item.id)) {
            let index = itemsCart.findIndex(i => i.id === item.id);
            let copyCart = [...itemsCart];
            copyCart[index].quantity += quantity;
            setItemsCart(copyCart);
        }
        else {
            const itemToAdd = { ...item, quantity };
            setItemsCart([...itemsCart, itemToAdd]);
        }
    }

    function isItemInCart(id) {
        return itemsCart.some(item => item.id === id)
    }

    function getItemInCart(id) {
        return itemsCart.find(item => item.id === id)
    }

    function removeItem(idDelete) {
        setItemsCart(itemsCart.filter(item => item.id !== idDelete))
    }

    function clearCart() {
        setItemsCart([])
    }

    function countItemsInCart() {
        let count = 0;
        itemsCart.forEach(item => count += item.quantity);
        return count;
    }
    

    function getTotal() {
        let totalPrice = 0;
        itemsCart.forEach(item => totalPrice += item.price * item.quantity);
        return totalPrice;
    }

    return (
        <Provider value={{ itemsCart, addItem, isItemInCart, getItemInCart, removeItem, clearCart, countItemsInCart, getTotal }}>
            {children}
        </Provider>
    )

}

export default useCartContext;