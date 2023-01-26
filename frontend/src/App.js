import Header from './components/Header'
import Footer from './components/Footer'
import { Routes } from 'react-router';
import HomePages from './pages/HomePages';
import ArticlePages from './pages/ArticlePages';
import CartPages from './pages/CartPages';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { loadCart } from './actions/cartActions';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems')
    if (cartItems) {
      dispatch(loadCart(JSON.parse(cartItems)))
    }
  }, [dispatch])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePages />} exact />
        {/* <Route path='/articles' element={<ArticlesListPages />} /> */}
        <Route path='/article/:slug' element={<ArticlePages />} />
        <Route path='/cart' element={<CartPages />} />


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
