import './App.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
