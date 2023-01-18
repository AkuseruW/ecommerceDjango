import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel_Home';
// import './styles/index.scss'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Carousel/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
