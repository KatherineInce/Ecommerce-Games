import { BsFillCartPlusFill } from "react-icons/bs";
//styles
import '../styles/CartWidget.css'
const CartWidget = () => {
  return (
    <span className="icon-cart">
        <div>1</div>
        <BsFillCartPlusFill/>
    </span>
  )
}

export default CartWidget