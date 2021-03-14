import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>src/App.js</code>を編集したら保存する。
          </p>
        <a
          className="App-link"
          href="http://localhost:8080/api/books"
          // target="_blank"
          rel="noopener noreferrer"
        >
          API呼び出します
        </a>
      </header>
    </div>
  );
}

export default App;
