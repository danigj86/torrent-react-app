import logo from './logo.svg';
import { Navbar } from './components/Navbar';
import { Carrousel } from './components/Carrousel';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Footer/>
      </div>

    </>

  );
}

export default App;
