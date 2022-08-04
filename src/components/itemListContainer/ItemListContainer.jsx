import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getData } from "../../UI/api";
import './itemListContainer.css';
import { useParams } from "react-router-dom";

function ItemListContainer({title}) {
  const {category} = useParams()
  const [products, setProducts] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      getData()
          .then((res) =>{
              if (category){
                  setProducts(
                    res.filter((productos) => productos.category === category
                  ))
              } else {
                  setProducts(res)
              }
        })
    },2000)
  },[])
  console.log(products);

  return (
      <div className='containerItems container'>
          <h3 className="text-center">{title}</h3>
          {products.length !== 0 ? (<ItemList items={products}/>):(<h3 className="text-center">Loading..</h3>)}
      </div>
    )
};

export default ItemListContainer