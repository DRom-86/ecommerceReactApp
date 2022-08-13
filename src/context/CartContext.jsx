import { useState, createContext } from "react";

export const CartContext = createContext({})

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    let cartDraft = cart
    // console.log('cartDraft:', cartDraft);
    
    
    const addToCart = ((itemToAdd, qtyToAdd) => {
        console.log('itemToPush:', itemToAdd, qtyToAdd)
        setCart([...cart , itemToAdd])
        console.log('carrito:', cart)
       if (cartDraft.find(itemToFind => itemToFind.id === itemToAdd.id)) {
            const i = cartDraft.findIndex( index => index.id === itemToAdd.id)
            cartDraft[i].qty = cartDraft[i].qty  + parseInt(qtyToAdd)
            setCart(cartDraft)
            console.log('cantidad actualizada', cartDraft[i].qty);
        }else{
            cartDraft = [...cart , itemToAdd]
            setCart(cartDraft)
            console.log('item agregado al carrito', itemToAdd);
        }
        cartDraft.length = cartDraft.length + qtyToAdd
        console.log("cartDraftLength:", cartDraft.length , cart.length)
        setCart(cartDraft)
    })
    
    const isInCart = () => {}
    const cleanCart = () => {
    }
    const removeToCart = () => {
    setCart([])// vacio el carrito
    }
    

    const ValueToShare = {
        cart,
        cartInCart: cart.length,
        isInCart,
        cleanCart,
        addToCart,
        removeToCart
    }

    
    return (
        <CartContext.Provider
            value = {ValueToShare}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider