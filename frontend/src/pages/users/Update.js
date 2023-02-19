import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { updateUserProfile } from '../../actions/userActions'

import '../../styles/users/updateForm.scss'



const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

function UpdateProfileScreen() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const userDetails = useSelector(state => state.userDetails)
    const { error } = userDetails

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
    }, [navigate, userInfo])

    const onSubmit = (e) => {
        dispatch(updateUserProfile(e.name, e.lastname, e.email, e.password))
    }

    return (
        <div className="container update_profile-page">
            <form className='update-form' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="texte"
                        {...register("name", { required: true })}
                        defaultValue={userInfo ? userInfo.name : ""}
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name?.type === 'required' && <p role="alert">First name is required</p>}

                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="texte"
                        {...register("lastname", { required: true })}
                        defaultValue={userInfo ? userInfo.lastname : ""}
                        aria-invalid={errors.lastname ? "true" : "false"}
                    />
                    {errors.lastname?.type === 'required' && <p role="alert">Last name is required</p>}

                    <label htmlFor="email">Email</label>
                    <input
                        {...register("email", {
                            required: "Email Address is required", pattern: {
                                value: emailRegex,
                                message: "Invalid email address format"
                            }
                        })}
                        defaultValue={userInfo ? userInfo.email : ""}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p role="alert">{errors.email?.message}</p>}

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        {...register("password", { minLength: 8 })}
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password?.type === 'minLength' && <p role="alert">Password must have at least 8 characters</p>}

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        {...register("confirmPassword", { validate: value => value === getValues("password") || "Passwords do not match" })}
                        aria-invalid={errors.confirmPassword ? "true" : "false"}
                    />
                    {errors.confirmPassword && <p role="alert">{errors.confirmPassword.message}</p>}

                </div>

                <input value="Update" type="submit" />
                {error && <div className="form-error">{error}</div>}
            </form>
        </div>

    )
}

export default UpdateProfileScreen