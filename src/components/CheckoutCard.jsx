import {useContextData} from '../context'

import { AiFillMinusCircle } from "react-icons/ai";


import '../styles/CheckoutCard.css'
const CheckoutCard = ({data}) => {
  const {order,addProduct} = useContextData()
  const deleteProduct = _ =>{
    let product = order.filter(item=> item.id === data.id)
    if(product[0].qty > 1)
    {
      addProduct(order.map(item=>{
        if(item.id === data.id)
          return {...item, qty: parseInt(item.qty) - 1}
        else
          return {...item}
      }))
    }
    else{
      addProduct(order.filter(item=> item.id !== data.id))
    }
  }
  return (
    <div className='checkout-card'>
        <img src={data.img} alt="" />
        <label htmlFor="">{data.name}</label>
        <label htmlFor="">{data.qty}</label>
        <label htmlFor="">{data.price}</label>
        <button onClick={deleteProduct}><AiFillMinusCircle /></button>
    </div>
  )
}

export default CheckoutCard