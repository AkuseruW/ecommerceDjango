import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { register as userRegister } from '../../actions/userActions'

import '../../styles/authentication/register.scss'

export default function RegistrationScreen({ location }) {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const redirect = location ? location.search ? location.search.split('=')[1] : '/' : '/'
    const userAlreadyConnected = useSelector(state => state.userRegister)
    const { userInfo } = userAlreadyConnected

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const onSubmit = (e) => {
        console.log(e.name, e.lastname, e.email, e.password)
        dispatch(userRegister(e.name, e.lastname, e.email, e.password));
    }

    return (
        <div className="register-page">
            <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
                <h1 className="register-page__title">Register</h1>

                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="texte"
                        {...register("name", { required: true })}
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="texte"
                        {...register("lastname", { required: true })}
                        aria-invalid={errors.lastname ? "true" : "false"}
                    />
                    {errors.firstName?.type === 'required' && <p role="alert">Lasr name is required</p>}

                    <label htmlFor="email">Email</label>
                    <input
                        {...register("email", {
                            required: "Email Address is required", pattern: {
                                value: emailRegex,
                                message: "Invalid email address format"
                            }
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p role="alert">{errors.email?.message}</p>}

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        {...register("password", { required: true, minLength: 8 })}
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                    {errors.password?.type === 'minLength' && <p role="alert">Password must have at least 8 characters</p>}

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        {...register("confirmPassword", { required: true, validate: value => value === getValues("password") || "Passwords do not match" })}
                        aria-invalid={errors.confirmPassword ? "true" : "false"}
                    />
                    {errors.confirmPassword && <p role="alert">{errors.confirmPassword.message}</p>}

                </div>

                <input value="Sign up" type="submit" />
            </form>
        </div>

    )
}
