import logo from './logo.svg';
import {Navbar} from './components/Navbar';
import {Carrousel} from './components/Carrousel';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Carrousel/>
    <div className="App">
     <h2>Hello World</h2>
    </div>
    </>
    
  );
}

export default App;
