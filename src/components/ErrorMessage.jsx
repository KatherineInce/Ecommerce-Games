import React from 'react'

const ErrorMessage = ({visible,message}) => {
  return (
    <label style={{color:"red"}} visible={visible.toString()} className=''>{message}</label>
  )
}

export default ErrorMessage