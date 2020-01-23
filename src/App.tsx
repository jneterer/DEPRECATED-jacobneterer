import React from 'react';
import './App.scss';
import CurrentlyLearning from './components/CurrentlyLearning/CurrentlyLearning';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MyProjects from './components/MyProjects/MyProjects';
import WhatIKnow from './components/WhatIKnow/WhatIKnow';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <div id="mainContent" className="main-content-container">
        <Hero />
        <WhatIKnow />
        <CurrentlyLearning />
        <MyProjects />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
