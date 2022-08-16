import React, { useState, useEffect, useContext } from 'react'
import Cart from './Cart';
import { CartContext } from '../../context/CartContext';

function CartContainer() {
    const { cart, cartInCart } = useContext(CartContext)
    // const [products, setProducts] = useState([])
    console.log('cart:', cart);
    console.log('cartInCart:', cartInCart);
    useEffect(() => {
    }, [cart])

    return (<>
        <h3 className='text-center'>Detalle de la compra</h3>
        <table class=" container table table-sm table-dark mt-5">

            <tbody>
                <Cart items={cart} />
                <tr>
                    <th scope="row">{cartInCart}</th>
                    <td> </td>
                    <td> Total </td>
                    <td>'TotalAPagar'</td>
                </tr>
        
            </tbody>
        </table>
        <button className='btn btn-success text-center'>Finalizar Compra</button>
    </>
    )
};

export default CartContainer