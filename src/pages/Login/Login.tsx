import React, { ChangeEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'

//Assets
import User from '../../assets/images/usuario.png'
import CardView from '../../components/molecules/CardView/CardView'

import "./Login.scss"
import Input from '../../components/atoms/Input/Input'
import InputPassword from '../../components/atoms/InputPassword/InputPassword'
import ReturnBtn from '../../components/atoms/ReturnBtn/ReturnBtn'
import { Validations } from '../../utilities/Validations'
import { fieldNameProps } from '../../interface/interface'


interface CredentialsProps{
	username: string
	password: string
}

function Login() {
	const [credentials, setCredentials] = useState<CredentialsProps>({
		username: "",
		password: ""
	})

	const [fieldName, setFieldName] = useState<fieldNameProps>({})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget
		setCredentials(prevCredentials => ({
			...prevCredentials,
			[name]: value,
		}))
		setFieldName({})
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const validationResults = Validations(credentials)
		
		if (!validationResults.isValid) {
			// Aplica estilos a los campos que están vacíos
			Object.keys(validationResults.emptyFields).forEach((field) => {
				setFieldName((prevFields) => ({...prevFields, [field]: false }))
			});
		}
		else{
			console.log(credentials)
		}
	}

  return (
	<>
		<CardView className='Login' classCard='l-delogin'>
			<ReturnBtn url='/' />
			<form onSubmit={handleSubmit} className='l-form'>
				<div className='l-cnt-img'>
					<img src={User} alt="" className='l-image' />
					<p className='l-title'>Sign In</p>
				</div>
				<Input text='User' id='username' name='username' className={`cntInput ${fieldName.username === false && "emptyField"}`} placeholder='Username' onChange={handleChange}/>
				<div className="cnt-mid">
					<InputPassword text='Password' id='password' name='password' className={`cntInput ${fieldName.password === false && "emptyField"}`} placeholder='Password' onChange={handleChange} />
					<NavLink to={"#"} className={"forgot-password"}>I forgot my password</NavLink>
				</div>
				<button type="submit" className='btn-submit'>SIGN IN</button>
			</form>
		</CardView>
	</>
  )
}

export default Login