import '../styles/Button.css'

const Button = ({children,action,target}) => {
  return (
       <button className='custom-button' onClick={action} data-bs-toggle="modal" data-bs-target={target}>{children}</button>
  )
}

export default Button