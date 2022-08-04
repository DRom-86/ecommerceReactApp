import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getData } from "../../UI/api";
import './itemListContainer.css';
import { useParams } from "react-router-dom";

function ItemListContainer({title}) {
  const {category} = useParams()
  const [products, setProducts] = useState([])

  useEffect(()=>{
    setTimeout(() => {
      getData()
          .then((res) =>{
              if (!category) {
                  setProducts(res)
              } else {
                  setProducts(res.filter((productos) => productos.category === category))
              }
            })
          .catch(error => console.error(error))
        },2000)
  },[category])

        return (
          <div className='containerItems container'>
          {category ? <h3 className="text-center">{category}</h3> : <h3 className="text-center">{title}</h3>}
          {products.length !== 0 ? (<ItemList items={products}/>):(<h3 className="text-center">Loading..</h3>)}
      </div>
    )
};

export default ItemListContainer