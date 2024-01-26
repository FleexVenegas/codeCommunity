import { ChangeEvent, FormEvent, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

// Styles
import "./Signup.scss"

// Components
import CardView from '../../components/molecules/CardView/CardView'
import Input from '../../components/atoms/Input/Input'
import Button from '../../components/atoms/Button/Button'
import InputPassword from '../../components/atoms/InputPassword/InputPassword'
import ReturnBtn from '../../components/atoms/ReturnBtn/ReturnBtn'

// Assets
import User from '../../assets/images/usuario.png'
import { Validations } from '../../utilities/Validations'
import { fieldNameProps } from '../../interface/interface'
import { postAxiosApi } from '../../services/api/Api'
import { Successfully, Warning, WarningWithText } from '../../utilities/SweetAlertModal'
import { checkValidateString } from '../../utilities/CheckValidateString'

// Interfaces

interface credentialsProps{
    email: string
    user: string
    password: string
    confirmPassword: string
}

interface apiSuccess{
    statusText: string
    status: number
    data:{
        message: string
    }
}


interface ApiError {
    stack: string
    code: string
    name: string
    response:{
        data:{
            message: string
        }
    }
}

const Signup = () => {

    const [registrationCredentials, setRegistrationCredentials] = useState<credentialsProps>({
        email: "",
        user: "",
        password: "",
        confirmPassword: ""
    })

    const [emptyField, setEmptyField] = useState<fieldNameProps>({})
    const navigate = useNavigate()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget
		setRegistrationCredentials(prevCredentials => ({
			...prevCredentials,
			[name]: value,
		}))
        setEmptyField({})
	}

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validationCredentials = Validations(registrationCredentials)

        if(validationCredentials.isValid){

            try {
                const validString = checkValidateString(registrationCredentials.password)

                if(validString){
                    const formData = new FormData()
                    formData.append("formUser", JSON.stringify(registrationCredentials))
        
                    const response: unknown = await postAxiosApi('/api/user/add-user', formData)
        
                    if(typeof response !== "object" || response === null) { throw new Error("Unexpected response format") }
        
                    if('name' in response && (response as ApiError).name === "AxiosError"){
                        const resAxios = response as ApiError
                        Warning(resAxios.response.data.message)
                    }
    
                    const _response = response as apiSuccess
                    if(_response.status === 200){
                        Successfully(_response.data.message)
                        
                        setTimeout(() => {
                            navigate("/user/login")
                        }, 2600)
                    }

                } else{
                    WarningWithText("The password is not valid. It must be at least 8 characters, include at least one number" + 
                                    " and one of the following symbols: !@#$%^&*.")
                }

            } catch (error) {
                console.log(error)
            }   

        }
        else{
            Object.keys(validationCredentials.emptyFields).forEach((field) => {
                setEmptyField((preveField) => ({ ...preveField, [field]: false}))
            })
        }
    }

  return (
    <CardView className='SignUp_' classCard='s-signCard'>
        <ReturnBtn url='/' />
        <form onSubmit={handleRegister} className='sg-form'>
            <div className='sg-headerForm'>
                <img src={User} alt="" className='sg-f-image' />
                <p className='sg-f-title'>Sign Up</p>
            </div>
            <Input type='email' text='Email' name='email' className={`${emptyField.email === false && "emptyField"}`} placeholder='Email' onChange={handleChange}/>
            <Input text='User' name='user'className={`${emptyField.user === false && "emptyField"}`} placeholder='User' onChange={handleChange}/>
            <InputPassword text='Password' name='password' className={`${emptyField.password === false && "emptyField"}`} placeholder='Password' onChange={handleChange} />
            <InputPassword text='Confirm password' name='confirmPassword' className={`${emptyField.confirmPassword === false && "emptyField"}`} placeholder='Confirm Password'onChange={handleChange} />
            <Button text='Register' submit className='btn_signUp'/>
            <NavLink to={"/user/login"} className='sg-acc'>I already have an account</NavLink>

        </form>
    </CardView>

  )
}

export default Signup