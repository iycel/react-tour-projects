import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Cards from './components/cards/Cards';
import React, { useState } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onMouseClick = () => {
    setIsVisible(!isVisible)
  };

  return (
    <div className='App'>
      < Navbar />
      < Header />
      < Cards isVisible={isVisible} onMouseClick={onMouseClick} />
    </div >
  );
};

export default App;
