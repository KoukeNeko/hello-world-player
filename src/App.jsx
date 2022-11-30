import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App" role="main">
      <article className="App-article">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="text-3xl font-bold underline">Welcome to React!</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
      </article>
    </div>
  );
}

export default App;
