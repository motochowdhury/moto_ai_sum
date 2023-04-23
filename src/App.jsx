import React from 'react';

// Components
import Demo from './components/Demo';
import Hero from './components/Hero';
// Styles
import './App.css';

const App = () => {
  return (
    <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Hero />
          <Demo />
        </div>
    </main>
  )
}

export default App