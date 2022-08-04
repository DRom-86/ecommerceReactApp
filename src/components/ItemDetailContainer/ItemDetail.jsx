import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({item})=> {

  if (item) {
    return (
            <div className='container col-lg-8 d-flex'>
                <img className='w-50 p-2' src={item.img} alt={item.description} />
                <div className='w-50 cardsItem'>
                    <div className="cardsBody card-body text-center bg-dark text-white">
                      <p className="cardsParagraph text-reset">{item.description}</p>
                      <p className="cardsParagraph text-reset">Modelo: {item.model}</p>
                      <p className="cardsParagraph text-reset">Valor: ${item.price}</p>
                      <ItemCount
                      initial={1}
                      stock={item.stock}/><a id="botonAgregarAlCarrito" className="btnAgregarAlCarrito btn btn-success w-100"> Agregar al carrito <i className="fas fa-shopping-cart"></i></a>
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
