import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions'
// import { Link } from 'react-router-dom'
import '../../styles/authentication/login.scss'

function LoginPages({ location, history }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  console.log(location);
  const redirect = location ? location.search ? location.search.split('=')[1] : '/' : '/'
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password))

  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1 className="login-page__title">Connexion</h1>
        <div className="login-page__form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-page__form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-page__submit-button">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPages