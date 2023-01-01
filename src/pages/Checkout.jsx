//context 
import {useContextData} from '../context'

import CheckoutCard from '../components/CheckoutCard'
import Loading from '../components/Loading'
import '../styles/Checkout.css'
import { useState,useEffect } from 'react'

const Checkout = () => {
  const [total,setTotal] = useState(0)
  const {order,loading,validUser,orderValidation,saveOrders} = useContextData()
  useEffect(() => {
    console.log(order.reduce((acc,item)=> acc+(parseFloat(item.price)*parseFloat(item.qty)),0))
    setTotal(order.reduce((acc,item)=> acc+(parseFloat(item.price)*parseFloat(item.qty)),0))
  }, [order])
  
  return (
    <div className='wrapper'>
      {validUser.id ?
      <>
        {
          loading ? <Loading />
          :
        <>
        {
          order.length > 0 ?
            <>
            <div className='checkout-header'>
              <label htmlFor="">Product</label>
              <label htmlFor="">Quantity</label>
              <label htmlFor="">Price</label>
            </div>
            {
            order.map(product =>
              <CheckoutCard data={product}/>
            )}
            <div className='checkout-footer'>
              <label htmlFor="">Total</label>
              <label htmlFor="">{total.toFixed(2)}</label>
              <button onClick={saveOrders}>Pay</button>
            </div>
            </>
          :
          orderValidation.message
        }
        </>
        }
      </> :
        "You must login first"
      }
    </div>
  )
}

export default Checkout