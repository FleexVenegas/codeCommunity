import React, { ChangeEvent, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

//Assets
import User from '../../assets/images/usuario.png'
import CardView from '../../components/molecules/CardView/CardView'

import "./Login.scss"
import Input from '../../components/atoms/Input/Input'
import InputPassword from '../../components/atoms/InputPassword/InputPassword'
import ReturnBtn from '../../components/atoms/ReturnBtn/ReturnBtn'
import { Validations } from '../../utilities/Validations'
import { ApiError, ApiLogin, ApiSucces, fieldNameProps } from '../../interface/interface'
import { postAxiosApi } from '../../services/api/Api'
import { Successfully, Warning } from '../../utilities/SweetAlertModal'
import { setCookie } from '../../services/cookies/Cookies'


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
	const navigate = useNavigate()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget
		setCredentials(prevCredentials => ({
			...prevCredentials,
			[name]: value,
		}))
		setFieldName({})
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const validationResults = Validations(credentials)
		
		if (!validationResults.isValid) {
			// Aplica estilos a los campos que están vacíos
			Object.keys(validationResults.emptyFields).forEach((field) => {
				setFieldName((prevFields) => ({...prevFields, [field]: false }))
			});
		}
		else{
			
			const formaData = new FormData()
			formaData.append("credentials", JSON.stringify(credentials))

			const response: unknown = await postAxiosApi("/api/auth/validate-credentials", formaData)
			
			if(typeof response !== "object" || response === null) { throw new Error("Unexpected response format") }

			if('name' in response && (response as ApiError).name === "AxiosError"){
				const resAxios = response as ApiError
				Warning(resAxios.response.data.message)
			}

			const _response = response as ApiLogin

			if(_response.status === 200){
				Successfully(_response.data.message)
				localStorage.setItem("self", _response.data.id)

				setTimeout(() => {
					window.location.href = "/"
				}, 2600)
				
			}
			
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