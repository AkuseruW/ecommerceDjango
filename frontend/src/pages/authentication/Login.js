import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../actions/userActions';

import '../../styles/authentication/login.scss';

const LoginScreen = ({ location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = location?.search ? location.search.split('=')[1] : '/';
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  React.useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(email, password));
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
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-page__submit-button">
          Sing in        
        </button>
        <p className="login-page__text">
          Do not have an account yet ? <Link to='/register' className='underline '>register here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginScreen;
