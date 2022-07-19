import { useState } from "react";

const ItemCount = ({initial, stock}) => {
  const [count, setCount] = useState(initial)

  function increment (){
      if (count < stock){
          setCount(count+1);
      } else if (count === stock){
          alert (`Alcanzaste el stock disponible`)
      }
  }
  function decrement (){
      if (count >= 1){
          setCount(count-1);
      }
  }
  function onAdd(){
      alert (`agregaste ${count} productos al carrito`)
  }

return (
  <div className='container w-25 mt-4 bg-dark border-white rounded-circle py-4'>
      <div className='container d-flex justify-content-around align-items-baseline pt-5'>
          <button className='btn btn-danger w-25 border-white' onClick={decrement}>-</button>
          <p className='mx-2 text-white'><b>{count}</b></p>
          <button className='btn btn-success w-25 border-white' onClick={increment}>+</button>
      </div>
      <div className="text-center text-white p-3"> stock = {stock}un</div>
      <div className='pb-2 text-center'>
          <button className='btn border-white text-white' onClick= {onAdd}>Revisar</button>
      </div>
  </div>
)
}
export default ItemCount;


