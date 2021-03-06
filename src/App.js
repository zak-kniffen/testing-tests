import logo from './logo.svg';
import './App.css';
import Row from './Components/Row';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My TDD App</h1>
        <Row data-testid="row1"/>
        <Row data-testid="row2"/>
        <Row data-testid="row3"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
