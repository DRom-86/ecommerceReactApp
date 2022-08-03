import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({item})=> {

  if (item) {
    return (
        <div>
            <div className='container col-lg-3 border'>
                <img className='w-100' src={item.img} alt={item.description} />
                <div className='cardsItem'>
                    <div className="cardsImg">       
                    </div>
                    <div className="cardsBody card-body text-center">
                      <p className="cardsParagraph text-reset">{item.description}</p>
                      <p className="cardsParagraph text-reset">Modelo: {item.model}</p>
                      <p className="cardsParagraph text-reset">Valor: ${item.price}</p>
                      <ItemCount
                      initial={1}
                      stock={item.stock}/><a id="botonAgregarAlCarrito" className="btnAgregarAlCarrito btn btn-success w-100"> Agregar al carrito <i className="fas fa-shopping-cart"></i></a>
                      <p className="cardsParagraph w-100 text-center"> <small>Stock: {item.stock} un</small> </p>
                    </div>
                     
                </div>
            </div>
        </div>
    )
  } else{
      return (<h3>No se encontró el destino</h3>)

  }
}
export default ItemDetail;
