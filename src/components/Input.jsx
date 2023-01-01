import '../styles/Input.css'
const Input = ({text,type,placeholder,value,action,classCustom}) => {
  return (
    <div className={classCustom === "number" ? "input-container--number" : "input-container"}>
        <label htmlFor="">{text}</label>
        <input min="1" type={type} value={value} onChange={e=>action(e.target.value)} placeholder={placeholder}/>
    </div>
  )
}

export default Input