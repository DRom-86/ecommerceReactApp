import React, { useEffect, useState } from 'react'
import { getItem } from '../../UI/api';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import '../ItemListContainer/itemListContainer.css';


const ItemDetailContainer =({title})=> {
   
    const [item, setItem] = useState([])
    const {id} = useParams()   
    
    useEffect(()=>{
        setTimeout(() => {
            getItem(id)
                .then((e) =>{setItem(e)})
        },2000)
    },[id])
       
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