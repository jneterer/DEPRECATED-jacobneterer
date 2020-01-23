import React from 'react';
import './App.scss';
import CurrentlyLearning from './components/CurrentlyLearning/CurrentlyLearning';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhatIKnow from './components/WhatIKnow/WhatIKnow';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <div id="mainContent" className="main-content-container">
        <Hero />
        <WhatIKnow />
        <CurrentlyLearning />
      </div>
    </React.Fragment>
  );
}

export default App;
