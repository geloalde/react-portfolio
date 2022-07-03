import logo from './images/gelopic.png';
import './App.css';



function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='poppins'>
          Gelo Alde 
        </p>
        <p className="poppins soft">  You see me rollin? not carouselin. </p>
        <p className="poppins soft">  Loves art but not into breaking hearts. </p>
        <a
          className="poppins f14"
          href="https://facebook.com/geloalde"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook Link
        </a>
      </header>
    </div>
  );
}

export default App;
