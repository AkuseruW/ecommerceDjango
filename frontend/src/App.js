import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router';
import HomePages from './pages/HomePages';
import ArticlePages from './pages/ArticlePages';

// import './styles/index.scss'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePages />} exact />
        {/* <Route path='/articles' element={<ArticlesListPages />} /> */}
        <Route path='/article/:slug' element={<ArticlePages />} />

      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
