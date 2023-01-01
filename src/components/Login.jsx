import { useState } from 'react'
//components
import Input from './Input'
import Button from './Button'
import ErrorMessage from './ErrorMessage'
//styles
import '../styles/Login.css'

//context
import {useContextData} from '../context'
const Login = () => {
  const {loginValidation,setLogin} = useContextData()
  const [user,setUser] = useState('')
  const [pass,setPass] = useState('')
  const [message,setMessage] = useState({
    error:false,
    message: ''
  })
  const onLogin = e => {
    e.preventDefault();
    if(user && pass)
    {
        setLogin(user,pass)
        setMessage({
          error: false,
          message: ''
        })
    }
    else 
    {
      setMessage({
        error: true,
        message: 'Username and Password are required'
      })
    }
  }
  return (
      <form className='login-container'>
        <ErrorMessage visible={message.error} message={message.message}/>
        <ErrorMessage visible={loginValidation.isInvalid} message={loginValidation.message}/>

        <Input text="Username" type="text" placeholder="Write your username" value={user} action={setUser}/>
        <Input text="Password" type="password" placeholder="Write your password" value={pass} action={setPass}/>
        <Button action={onLogin}>Login</Button> 
      </form>
  )
}

export default Login