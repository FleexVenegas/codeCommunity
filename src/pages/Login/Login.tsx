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


interface CredentialsProps{
	username: string
	password: string
}


function Login() {
	const [credentials, setCredentials] = useState<CredentialsProps>({
		username: "",
		password: ""
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget
		setCredentials(prevCredentials => ({
			...prevCredentials,
			[name]: value,
		}))
	}

	

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const validationResults = Validations(credentials)
		if (!validationResults.isValid) {

			// Aplica estilos a los campos que están vacíos
			Object.keys(validationResults.emptyFields).forEach((field) => {
			  // Aquí puedes aplicar estilos específicos, por ejemplo, cambiar el borde
			  console.log(`Aplicar estilos a ${field}`);


			});
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
				<Input text='User' id='username' name='username' className='cntInput' placeholder='Username' onChange={handleChange}/>
				<div className="cnt-mid">
					<InputPassword text='Password' id='password' name='password' className='cntInput' placeholder='Password' onChange={handleChange} />
					<NavLink to={"#"} className={"forgot-password"}>I forgot my password</NavLink>
				</div>
				<button type="submit" className='btn-submit'>SIGN IN</button>
			</form>
		</CardView>
	</>
  )
}

export default Login