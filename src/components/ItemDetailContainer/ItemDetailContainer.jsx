import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ItemDetail from './ItemDetail';
import '../ItemListContainer/itemListContainer.css';


const ItemDetailContainer =({title})=> {
   
    const [item, setItem] = useState([])
    const IdDePrueba = 3

    const getItem = async () => {
        const getData = await axios.get("../../JSON/DB.json")
        const response = getData.data
        setItem(response.filter((e)=> e.id === parseInt(IdDePrueba)))
        console.log(item);
    }
    
    useEffect(()=>{
        setTimeout(() => getItem(),2000)
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