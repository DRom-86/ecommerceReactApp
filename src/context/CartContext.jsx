import { useState, createContext } from "react";

export const CartContext = createContext({})

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const isInCart = () => {}
    const cleanCart = () => {
        setCart([])// vacio el carrito
    }



    const addToCart = ((itemToAdd, qtyToAdd) => {
        console.log('itemToPush:', itemToAdd, qtyToAdd)
        console.log('carrito:', cart)

        const cartDraft =[...cart]
       if (cartDraft.find(e => e.id === itemToAdd.id)) {
            const i = cartDraft.findIndex( e => e.id === itemToAdd.id)
            cartDraft[i].qty + qtyToAdd
            setCart(cartDraft)
            console.log('cantidad actaulizada');
       }else{
            const itemToadd = {
                ...item, qty: qtyToAdd
            }
            setCart([itemToAdd])
            console.log('item agregado', itemToAdd);
        }
        })

    //     const itemDuplicateIndex = cart.find((itemToadder) => itemToadder.id === item.id)
    //         if (itemDuplicateIndex >= 0) {
    //             const itemToUpdate = {
    //             ...item, qty: itemDuplicateIndex.qty + qty
    //             } 
            
    //             const cartDraft =[...cart]
                
    //             cartDraft[itemDuplicateIndex] = itemToUpdate
    //             setCart(cartDraft)

    //         } else {
    //             const itemToadd = {
    //                 ...item, qty: qty
    //             }
    //             const cartDraft = [...cart, itemToadd]
    //             setCart(cartDraft)
    //             console.log('no está duplicado')
    //         }
        
    // }

    const removeToCart = () => {}
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