//Styles
import { ChangeEventHandler } from "react";
import "./Input.scss"

interface InputProps{
    className?: string
    name?: string
    id?: string
    text?: string
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({className, text, placeholder, onChange, name, id}: InputProps) => {
  return (
    <div className={`cnt-Input ${className}`}>
        {text && <label className='i-txt'>{text}</label>}
        <input type="text" name={name} id={id} className={`input`} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default Input