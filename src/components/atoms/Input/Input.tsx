//Styles
import { ChangeEventHandler } from "react";
import "./Input.scss"

interface InputProps{
    className?: string
    classInput?: string
    name?: string
    id?: string
    type?: string
    text?: string
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({className, text, placeholder, onChange, name, id, type="text"}: InputProps) => {
  return (
    <div className={`cnt-Input ${className}`}>
        {text && <label className='i-txt'>{text}</label>}
        <input type={type} name={name} id={id} className={`input`} placeholder={placeholder} onChange={onChange} required/>
    </div>
  )
}

export default Input