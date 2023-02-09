import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { register } from '../../actions/userActions';


function RegistrationPages({ location }) {
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const redirect = location ? location.search ? location.search.split('=')[1] : '/' : '/'
    const userRegister = useSelector(state => state.userRegister)
    const { userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailRegex.test(email)) {
            setMessage('Invalid email format');
        } else if (password !== confirmPassword) {
            setMessage('Password do not match');
        } else {
            dispatch(register(name, lastname, email, password));
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm" onSubmit={handleSubmit}>
                <h2 className="text-lg font-medium mb-4">Register</h2>
                {message && {message}}
                <div className="mb-4">
                    <input type="text" className="border border-gray-400 p-2 w-full" placeholder="Prénom" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <input type="text" className="border border-gray-400 p-2 w-full" placeholder="Nom" value={lastname} onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <input type="email" className="border border-gray-400 p-2 w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                    <input type="password" className="border border-gray-400 p-2 w-full" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="mb-4">
                    <input type="password" className="border border-gray-400 p-2 w-full" placeholder="Confirmer le mot de passe" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                </div>
                <button
                    className="bg-black hover:bg-gray text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Sign Up
                </button>

            </form>
        </div>
    )
}

export default RegistrationPages