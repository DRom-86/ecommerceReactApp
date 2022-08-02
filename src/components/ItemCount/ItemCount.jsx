import { useState } from "react";

const ItemCount = ({initial, stock}) => {
  const [count, setCount] = useState(initial)
  const [msg, setMsg] = useState(false)

  function increment (){
     return (count < stock) ? setCount(count+1) : alert(`Alcanzaste el stock disponible`)
  }

  function decrement (){
    return (count >= 1) && setCount(count-1)
  }    
 
  const onAdd = (cant) => {
    const message = `agregaste ${cant} productos al carrito`
    cant === 1 ? setMsg(`agregaste ${cant} producto al carrito`) : setMsg(`${message}`)
  }

return (
        <>
            <div className='container w-25 mt-4'>
                <div className='container d-flex justify-content-around align-items-baseline'>
                    <button className='btn btn-danger w-100' onClick={decrement}>-</button>
                    <p className='mx-2'><b>{count}</b></p>
                    <button className='btn btn-success' onClick={increment}>+</button>
                </div>
                <div className='pb-2 text-center'>
                    <button className='btn border-white text-white' onClick= {()=>onAdd(count)}>Revisar</button>
                </div>
            </div>
            {msg && <p className="bg-dark w-25 text-center m-auto mt-2">{msg}</p>}
        </>
    )
}
export default ItemCount;


