/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

export default App; */


import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const IncremetCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>
        {cont}
      </h1>
      <button>Incremet</button>
    </div>
  )
  
}

export default App;
