import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./lib/Modal";

function App() {
  const [isOpen,setOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <button onClick={()=>setOpen(true)}>모달 열기</button>
      </header>
      <Modal modalOpen={isOpen}>
        <div>하이</div>
      </Modal>
    </div>
  );
}

export default App;
