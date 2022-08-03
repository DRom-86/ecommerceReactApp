import React, { useEffect, useState } from 'react'
import { getItem } from '../../UI/api';
import ItemDetail from './ItemDetail';
import '../ItemListContainer/itemListContainer.css';


const ItemDetailContainer =({title})=> {
   
    const [item, setItem] = useState([])    
    
    useEffect(()=>{
        setTimeout(() => {
            getItem()
                .then((i) =>{setItem(i)})
        },2000)
    },[])
       
    return (
        <div className='containerItems'>
            <h2 className='text-center mt-5'>{title}</h2>
            <seccion className="container">
                <ItemDetail item={item[0]}/>
            </seccion>
        </div>
    )
};
export default ItemDetailContainer;