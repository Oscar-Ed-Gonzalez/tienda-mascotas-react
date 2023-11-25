import logo from './logo.svg';
import './App.css';
import Home from "./componentes/home/home"
import Benefits from "./componentes/benefits/benefits"
import HowWeWork from "./componentes/howWeWork/howWeWork"
import Services from "./componentes/services/services"
import Contact from "./componentes/contact/contact"

function App() {
  return( 
    <div className="App">
      <Home />
      <Services />
      <HowWeWork />
      <Benefits />
      <Contact />
    </div>
  );
}

export default App;
