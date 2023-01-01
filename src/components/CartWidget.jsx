import {Link} from 'react-router-dom'

import { BsFillCartPlusFill } from "react-icons/bs";
//styles
import '../styles/Cartwidget.css'


//context
import {useContextData} from '../context'
const CartWidget = () => {
  const {order} = useContextData()
  return (
    <Link to="/cart"  className="icon-cart">
        {order.length > 0 && <div>{order.length}</div>}
        <BsFillCartPlusFill/>
    </Link>
  )
}

export default CartWidget