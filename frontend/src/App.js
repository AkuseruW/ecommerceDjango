import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router';
import HomePages from './pages/HomePages';
import ArticlesPages from './pages/ArticlesPages';

// import './styles/index.scss'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/articles' element={<ArticlesPages />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
