import { passConfirmationValidationMessage, validatePasswordConfirm } from "../shared/validators/confirmPass.validator.js"
import { validateText, textValidationMessage } from "../shared/validators/texto.validator.js"
import { validateEmail, emailValidationMessage } from "../shared/validators/input.validator.js"
import { passwordValidationMessage, validatePassword } from "../shared/validators/password.validator.js"
import { usernameValidationMessage, validateUsername } from "../shared/validators/username.validator.js"
import { Input } from "./Input.jsx"
import { useState } from "react"
import { useRegister } from "../shared/hooks/useRegister.jsx"
import fondoLogin from '../assets/img/fondoLogin.png'

export const Register = ({ switchUserhHandler }) => {

    const { register, isLoading } = useRegister()
    const [formData, setFormData] = useState(

        {
            name: {
                value: '',
                isValid: false,
                showError: false
            },
            surname: {
                value: '',
                isValid: false,
                showError: false
            },
            email: {
                value: '',
                isValid: false,
                showError: false
            },
            username: {
                value: '',
                isValid: false,
                showError: false
            },
            password: {
                value: '',
                isValid: false,
                showError: false
            },
            passwordConfirm: {
                value: '',
                isValid: false,
                showError: false
            }
        }
    )

    const onValueChange = (value, field) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    value
                }
            }
        ))
    }

    const handleValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case 'name':
                isValid = validateText(value)
                break
            case 'surname':
                isValid = validateText(value)
                break
            case 'email':
                isValid = validateEmail(value)
                break
            case 'username':
                isValid = validateUsername(value)
                break
            case 'password':
                isValid = validatePassword(value)
                break
            case 'passwordConfirm':
                isValid = validatePasswordConfirm(formData.password.value, value)
                break
            default:
                break
        }
        setFormData((prevData) => (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    isValid,
                    showError: !isValid
                }
            }
        ))
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        register(
            formData.name.value,
            formData.surname.value,
            formData.email.value,
            formData.username.value,
            formData.password.value
        )
    }

    const isSubmitButtonDisable =
        !formData.name.isValid ||
        !formData.surname.isValid ||
        !formData.email.isValid ||
        !formData.username.isValid ||
        !formData.password.isValid ||
        !formData.passwordConfirm.isValid
    return (
        <div className="register-container">
            <img src={fondoLogin} className="imgFondo"/>
            <form className="user-form" onSubmit={handleRegister}>
                <Input
                    field='name'
                    label='NAME'
                    type='text'
                    value={formData.name.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.name.showError}
                    validationMessage={textValidationMessage}
                />
                <Input
                    field='surname'
                    label='SURNAME'
                    type='text'
                    value={formData.surname.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.surname.showError}
                    validationMessage={textValidationMessage}
                />
                <Input
                    field='email'
                    label='EMAIL'
                    type='text'
                    value={formData.email.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.email.showError}
                    validationMessage={emailValidationMessage}
                />
                <Input
                    field='username'
                    label='USERNAME'
                    type='text'
                    value={formData.username.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.username.showError}
                    validationMessage={usernameValidationMessage}
                />
                <Input
                    field='password'
                    label='PASSWORD'
                    type='password'
                    value={formData.password.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.password.showError}
                    validationMessage={passwordValidationMessage}
                />
                <Input
                    field='passwordConfirm'
                    label='PASSWORD CONFIRMATION'
                    type='password'
                    value={formData.passwordConfirm.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.passwordConfirm.showError}
                    validationMessage={passConfirmationValidationMessage}
                />
                <button
                    disabled={isSubmitButtonDisable}
                >
                    Register
                </button>
                <span onClick={switchUserhHandler}>
                    ¿Ya tienes una cuenta? ¡Inicia sesión acá!
                </span>
            </form> 
        </div>
    )
}