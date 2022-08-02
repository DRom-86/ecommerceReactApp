import React, { useEffect, useState } from 'react'
import { getItem } from '../../UI/db';
import ItemDetail from './ItemDetail';


const ItemDetailContainer =({title})=> {
   
    const [item, setItem] = useState();
    const IdDePrueba = 2
        useEffect(()=>{
          getItem(IdDePrueba)
          .then ((itemPromise)=>{
            setItem(itemPromise);
          }).catch ((errorMsg)=>{
            console.log(errorMsg);
          }).finally(()=>{
            console.log("item");
          })
        },[])
        
        console.log(item)

  return (
    <div>
        <h2 className='text-center mt-2'>{title}</h2>
        <seccion className="container">
            <ItemDetail item={item}/>
        </seccion>
    </div>
  )
};
export default ItemDetailContainer;