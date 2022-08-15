import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({})

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cant, setCant] = useState(0)
    let cartDraft = cart
    // console.log('cartDraft:', cartDraft);


    const addToCart = ((itemToAdd, qtyToAdd) => {
        console.log('itemToPush:', itemToAdd, 'qtyToAdd:', qtyToAdd)
        // setCart([...cart , itemToAdd])
        if (cartDraft.find(itemToFind => itemToFind.id === itemToAdd.id)) {
            const i = cartDraft.findIndex(index => index.id === itemToAdd.id)
            cartDraft[i].qty = cartDraft[i].qty + parseInt(qtyToAdd)
            setCart(cartDraft)
            console.log('cantidad actualizada en', cartDraft[i], ':', cartDraft[i].qty);
        } else {
            cartDraft = [...cartDraft, itemToAdd]
            setCart(cartDraft)
            console.log('item agregado al carrito', itemToAdd);
        }

        setCant(cant + qtyToAdd)
        // cartDraft.length = cartDraft.length + qtyToAdd
        console.log("cantidad en carrito", cant)
        // setCart(cartDraft)
        console.log('carrito:', cart)
    })

    const isInCart = () => { }
    const cleanCart = () => {
    }
    const removeToCart = () => {
        setCart([])// vacio el carrito
    }


    const ValueToShare = {
        cart,
        cartInCart: cant,
        isInCart,
        cleanCart,
        addToCart,
        removeToCart
    }

    useEffect(() => {
        // console.log('cartInCart', ValueToShare.cartInCart)
    }, [addToCart]
    )


    return (
        <CartContext.Provider
            value={ValueToShare}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider