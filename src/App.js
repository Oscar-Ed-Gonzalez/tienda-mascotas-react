import logo from './logo.svg';
import './App.css';
import Home from "./componentes/home/home"
import Benefits from "./componentes/benefits/benefits"
import HowWeWork from "./componentes/howWeWork/howWeWork"
import Services from "./componentes/services/services"
import Contact from "./componentes/contact/contact"
import NavBar from './componentes/navBar/navBar';
import DogBreeds from './componentes/breeds/breeds';

fetch()
function App() {
  return( 
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <Contact />
      <DogBreeds />
    </div>
  );
}

export default App;
