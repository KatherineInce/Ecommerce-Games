import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import { BsFillCartPlusFill } from "react-icons/bs";
//styles
import '../styles/Cartwidget.css'


//context
import {useContextData} from '../context'
const CartWidget = () => {
  const [total,setTotal] = useState(0)
  const {order} = useContextData()
  useEffect(() => {
    let sumTotal = order.reduce((acc,item) => acc+parseInt(item.qty),0)
    setTotal(sumTotal)
  }, [order])
  
  return (
    <Link to="/cart"  className="icon-cart">
        {total > 0 && <div>{total}</div>}
        <BsFillCartPlusFill/>
    </Link>
  )
}

export default CartWidget