//context 
import {useContextData} from '../context'
import Swal from 'sweetalert2'

import CheckoutCard from '../components/CheckoutCard'
import Loading from '../components/Loading'
import '../styles/Checkout.css'
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate()
  const [total,setTotal] = useState(0)
  const {order,loading,validUser,completedOrderId,orderValidation,saveOrders,setOrder,setCompletedOrderId} = useContextData()
  const cleanOrder = _ =>{
    setOrder([])
    Swal.fire({
      title: 'Cancelled Order',
      text: 'The order was cancelled, come back soon!',
      icon: 'error',
      confirmButtonText: 'Close'
    })
  }
  const payOrder = _ =>{
    saveOrders()
  }
  useEffect(() => {
    setTotal(order.reduce((acc,item)=> acc+(parseFloat(item.price)*parseFloat(item.qty)),0))
  }, [order])
  useEffect(() => {
    completedOrderId && Swal.fire({
      title: 'Completed Order',
      text: `The order was successfully done, your order id is ${completedOrderId}`,
      icon: 'success',
      confirmButtonText: 'Go to Orders'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/user')
      }
    })
  }, [completedOrderId])
 useEffect(() => {
   return () => {
    setCompletedOrderId(null)
   }
 }, [])
 
  
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
            <div style={{textAlign:'right'}}>
              <button className='btn btn-danger' onClick={cleanOrder}>CANCEL ORDER</button>
            </div>
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
              <button onClick={payOrder}>Pay</button>
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