import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
