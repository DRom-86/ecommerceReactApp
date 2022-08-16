import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs';


function cart (items) {
    console.log('items:', items)
   items.forEach(item => {
        return (
        <tr>
            <th scope="row">{item.qty}</th>
            <td>{item.descripcion}</td>
            <td>{item.price}</td>
            <td>{item.price * item.qty}</td>
            <td><BsFillTrashFill/></td>
        </tr>
    ) 
    });
   
}

export default cart