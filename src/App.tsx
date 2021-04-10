import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

import main from 'styling/main.module.sass';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className={main.app}>
      <Navbar />
      <Sidebar />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
