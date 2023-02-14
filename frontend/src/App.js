import Header from './components/Header'
import Footer from './components/Footer'
import { Routes } from 'react-router';

import HomePages from './pages/HomePages';
import ArticleDetailScreen from './pages/articles/ArticleDetail';
// import ArticlesListPages from './pages/ArticlesListPages';
import CartScreen from './pages/cart/Cart';
import LoginScreen from './pages/authentication/Login';
import Shipping from './pages/cart/Shipping';
import RegistrationScreen from './pages/authentication/Registration';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { loadCart } from './actions/cartActions';
import { loadAuthUser } from './actions/userActions'
import ProfileScreen from './pages/users/Profile';
import UpdateProfileScreen from './pages/users/Update';
import OrderHistoryScreen from './pages/users/OrderHistory';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems')
    if (cartItems) {
      dispatch(loadCart(JSON.parse(cartItems)))
    }

    const authUserInfo = localStorage.getItem('userInfo')
    dispatch(loadAuthUser(JSON.parse(authUserInfo) || null))
  }, [dispatch])

  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<HomePages />} exact />
        {/* <Route path='/articles' element={<ArticlesListPages />} /> */}
        <Route path='/article/:slug' element={<ArticleDetailScreen />} />

        <Route path='/cart' element={<CartScreen />} />
        <Route path='/shipping' element={<Shipping />} />

        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegistrationScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/profile/security' element={<UpdateProfileScreen />} />
        <Route path='/profile/order-history' element={<OrderHistoryScreen />} />



      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
