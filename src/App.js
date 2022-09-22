
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Values from './components/Values';
import Contact from './components/Contact';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Values/>
      <Services/>
      <Portfolio/>
      <Pricing/>
      <Contact/>
      <Location/>
    </div>
  );
}

export default App;
