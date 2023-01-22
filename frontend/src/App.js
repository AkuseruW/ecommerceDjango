import Header from './components/Header'
import Footer from './components/Footer'
import { Routes } from 'react-router';
import HomePages from './pages/HomePages';
import ArticlePages from './pages/ArticlePages';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// import './styles/index.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePages />} exact />
        {/* <Route path='/articles' element={<ArticlesListPages />} /> */}
        <Route path='/article/:slug' element={<ArticlePages />} />

      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
