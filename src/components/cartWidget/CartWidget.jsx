import { useContext } from 'react';
import { BsCart2} from 'react-icons/bs';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const valueToShare = useContext(CartContext)
  // console.log('valueToShare:', valueToShare)
  return (
    <div className='container w-25 d-flex justify-content-end pe-5 align-items-center'>
        <BsCart2/>        
        <div className='ps-2'>{valueToShare.cartInCart}</div>  
    </div>
  )
}

export default CartWidget