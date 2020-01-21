import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <div id="mainContent" className="main-content-container">
        <Hero />
      </div>
    </React.Fragment>
  );
}

export default App;
