import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
      </div>
    </div>
  )
}

export default App;