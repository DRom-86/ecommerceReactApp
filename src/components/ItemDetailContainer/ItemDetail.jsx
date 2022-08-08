import React from 'react'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useNavigate } from 'react-router-dom'


const ItemDetail = ({item})=> {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)

  const handleAdd = (quantityToAdd)=>{
    console.log("handle add:" , quantityToAdd);
    setCount(quantityToAdd)
    console.log(count)
    navigate('/cart')
  }

  if (item) {
    return (
            <div className='container col-lg-8 d-flex'>
                <img className='w-50 p-2' src={item.img} alt={item.description} />
                <div className='w-50 cardsItem'>
                    <div className="cardsBody card-body text-center bg-dark text-white">
                      <p className="cardsParagraph text-reset">{item.description}</p>
                      <p className="cardsParagraph text-reset">Modelo: {item.model}</p>
                      <p className="cardsParagraph text-reset">Valor: ${item.price}</p>
                      <ItemCount stock={item.stock} oneAdd={handleAdd} initial={1} />                      
                      <p className="cardsParagraph w-100 text-center pt-2"> <small>Stock: {item.stock} un</small> </p>
                    </div>
                </div>
            </div>
    )
  } else{
      return (<h3 className='text-center'><small>loading...</small></h3>)

  }
}
export default ItemDetail;
