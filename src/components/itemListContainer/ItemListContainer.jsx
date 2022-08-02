import { useEffect, useState } from "react"
import axios from 'axios';
import ItemList from "./ItemList"
import './itemListContainer.css';

function ItemListContainer({title}) {
  const [products, setProducts] = useState([])

 const getDataAxios = async () => {
  const getData = await axios.get("../../JSON/DB.json")
  const response = getData
  setProducts(response.data)
 }

  useEffect(()=>{
    setTimeout(() => getDataAxios(),2000)
},[])

 console.log(products)

  return (
      <div className='containerItems container'>
        <h3 className="text-center">{title}</h3>
        {products.length !== 0 ? (<ItemList items={products}/>):(<h3 className="text-center">Loading..</h3>)}
      </div>
    )
};

export default ItemListContainer