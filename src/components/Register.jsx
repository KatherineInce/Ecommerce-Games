import { useState } from 'react'
//components
import Input from './Input'
import Button from './Button'
import ErrorMessage from './ErrorMessage'

//context
import {useContextData} from '../context'

//styles
import '../styles/Register.css'

const Register = () => {
  const [user,setUser] = useState('')
  const [pass,setPass] = useState('')
  const [confirmPass,setConfirmPass] = useState('')
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')

  const {registerValidation,setRegisterUser} = useContextData()

  const [message,setMessage] = useState({
    error:false,
    message: ''
  })
  const onRegister = e => {
    e.preventDefault();
    if(user && pass && confirmPass && firstname && lastname && email && phone)
    {
        if(pass === confirmPass)
        {
          setRegisterUser({
            user,
            pass,
            firstname,
            lastname,
            email,
            phone
          })
          setMessage({
            error: false,
            message: ''
          })
        }
        else
          setMessage({
            error: true,
            message: 'Password and Confirm Password must be the same'
          })
    }
    else 
    {
      setMessage({
        error: true,
        message: 'All fields are required'
      })
    }
  }
  
  return (
    <form className='register-container'>
        <ErrorMessage visible={message.error} message={message.message}/>
        <ErrorMessage visible={registerValidation.isInvalid} message={registerValidation.message}/>

        <Input text="Username" type="text" placeholder="username" value={user} action={setUser}/>
        <Input text="Password" type="password" placeholder="password" value={pass} action={setPass}/>
        <Input text="Confirm Password" type="password" placeholder="confirm your password" value={confirmPass} action={setConfirmPass}/>

        <Input text="Firstname" type="text" placeholder="firstname" value={firstname} action={setFirstname}/>
        <Input text="Lastname" type="text" placeholder="lastname" value={lastname} action={setLastname}/>

        <Input text="Email" type="text" placeholder="email" value={email} action={setEmail}/>
        <Input text="Phone" type="text" placeholder="phone" value={phone} action={setPhone}/>
        
        <Button action={onRegister}>Register</Button> 
      </form>
  )
}

export default Register