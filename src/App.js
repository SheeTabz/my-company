
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Values from './components/Values';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Values/>
      <Services/>
      <Portfolio/>
    </div>
  );
}

export default App;
