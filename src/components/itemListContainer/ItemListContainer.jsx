import { useEffect, useState } from "react"
import { getItem } from '../../UI/db';
import ItemList from "./ItemList"
import './itemListContainer.css';

function ItemListContainer({title}) {
  const [prod, setProd] = useState([])

  useEffect(()=>{
    getItem()
    .then((res)=> setProd(res))
    .catch((error)=>console.log(`error: ${error}`))

  }, [])

  return (
      <div className='containerItems container'>
        <h1 className="text-center">{title}</h1>
        <ItemList items={prod}/>
      </div>
  )
};

export default ItemListContainer