import { useEffect, useState } from "react"
import { getData } from '../../UI/db';
import ItemList from "./ItemList"
import './itemListContainer.css';

function ItemListContainer({title}) {
  const [prod, setProd] = useState([])

  useEffect(()=>{
    getData()
    .then((res)=> setProd(res))
    .catch((error)=>console.log(`error: ${error}`))

  }, [])

  return (
      <div className='containerItems container'>
        <h3 className="text-center">{title}</h3>
        {prod.length !== 0 ? (<ItemList items={prod}/>):(<h3 className="text-center">Loading..</h3>)}
      </div>
    )
};

export default ItemListContainer