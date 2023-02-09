import Header from './components/Header'
import Footer from './components/Footer'
import { Routes } from 'react-router';
import HomePages from './pages/HomePages';
import ArticlePages from './pages/ArticlePages';
// import ArticlesListPages from './pages/ArticlesListPages';
import CartPages from './pages/CartPages';
import LoginPages from './pages/authentication/LoginPages';
import RegistrationPages from './pages/authentication/RegistrationPages';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { loadCart } from './actions/cartActions';
import { loadAuthUser } from './actions/userActions'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems')
    dispatch(loadCart(JSON.parse(cartItems) || null))

    const authUserInfo = localStorage.getItem('userInfo')
    dispatch(loadAuthUser(JSON.parse(authUserInfo) || null))
  }, [dispatch])

  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<HomePages />} exact />
        {/* <Route path='/articles' element={<ArticlesListPages />} /> */}
        <Route path='/article/:slug' element={<ArticlePages />} />
        <Route path='/cart' element={<CartPages />} />
        <Route path='/login' element={<LoginPages />} />
        <Route path='/register' element={<RegistrationPages />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
