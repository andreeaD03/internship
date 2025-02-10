import './App.css';
import Navbar from './components/navBar/NavBar';
import MainDiscription from './components/mainDiscription/MainDiscription';
import Cards from './components/cards/Cards';
import GreenCard from './components/greenCard/GreenCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainDiscription/>
      <Cards/>
    </div>
  );
}

export default App;
