import React from 'react'

import "./Button.scss"

interface ButtonProps{
	text: string
	className?: string
	submit?: boolean
	cancel?: boolean
	onClick?: () => void

}

const Button = ({text, className, submit = false, cancel = false, onClick}: ButtonProps) => {
  return (
    <>
      <button
        className={`Button_ ${className} ${submit && "btn-submit"} ${
          cancel && "btn-cancel"
        }`}
		onClick={onClick} >
        {text}
      </button>
    </>
  );
}

export default Button