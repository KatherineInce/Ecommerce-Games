import { BiUserCircle } from "react-icons/bi";
import {Link} from 'react-router-dom'
import '../styles/UserWidget.css'

//context 
import {useContextData} from '../context'
const UserWidget = () => {
  const {validUser} = useContextData()
  return (
    <Link to="/user" className={validUser.id ? 'user-widget__name' : 'user-widget__icon'}>
      {
        validUser.id ?
        validUser.username
        :
        <BiUserCircle/>
      }
    </Link>  
  )
}

export default UserWidget