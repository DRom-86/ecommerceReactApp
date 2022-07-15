import { BsCart2} from 'react-icons/bs';

function CartWidget({cant}) {
  return (
    <div className='container w-25 d-flex justify-content-end pe-5 align-items-center'>
        <BsCart2/>
        <div className='ps-2'>{cant} </div>  
    </div>
  )
}

export default CartWidget