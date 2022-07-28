import React from 'react'
import './itemListContainer.css';

const Item = ({item})=>{
  return(
      <div className='container m-2'>          
        <div className="articlesCards d-flex flex-wrap">
          <div className="col-sm-12 col-md-6 col-lg-4 cardsItem">
              <div className="cardImag ">
                <img className="w-100 p-3" src={item.img} alt={item.description}></img>
                <p className='text-center'>Ver detalle</p>
              </div>
              <div className="cardsBody card-body"> 
                    <h4>{item.description}</h4>
                    <p className='cardsParagraph'>{item.brand}</p>
                    <p className='cardsParagraph'>Valor: ${item.price}</p>
                    <p className='small'>Stock disponible: {item.stock}</p>
              </div>
              <button className='btn btn-success w-100 p-1 border-white'>agregar al carrito</button>
          </div>
        </div>   
      </div>
      )
  }

export default Item