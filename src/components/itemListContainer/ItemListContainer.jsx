import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getData } from "../../UI/api";
import './itemListContainer.css';

function ItemListContainer({title}) {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    setTimeout(() => {
        getData()
            .then((el) =>{setProducts(el)})
    },2000)
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