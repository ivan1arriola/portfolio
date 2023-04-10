import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import './styles/main.css';

// Pages
import Estudios from './pages/Estudios';
import Experiencias from './pages/Experiencias';
import Presentacion from './pages/Presentacion';
import PrincipalesHabilidades from './pages/PrincipalesHabilidades';


function App() {
  return (
    <>
      <Container className='header'>
        <Header />
      </Container>

      <Container className="App">
          <Presentacion />
          <hr />
          <PrincipalesHabilidades />
          <hr />
          <Estudios />
          <hr />
          <Experiencias />
      </Container>

      <Container className='footer'>
        <Footer />
      </Container>
    </>
  );
}

export default App;
