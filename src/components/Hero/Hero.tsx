import React from 'react';
import me from '../../assets/me.jpg';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <div className="container hero-container">
      <div className="hero-me-container">
        <img className="me" src={me} alt="me"/>
      </div>
      <div className="hero-info-container">
        <h2 className="hero-title">I'm a Full Stack Web Developer!<span role="img" aria-label="Man Behind Computer Emoji">👨‍💻</span></h2>
        <p className="hero-message">
          I've been building web apps since my Junior year of college (September 2017). Since then it has become my passion!
          At my core, I am a professional Angular front-end developer. However, I have extensive experience in technologies like 
          Node.js, Okta, and MongoDB. Lately I've been focusing on expanding my knowledge by learning other front end frameworks like React 
          (which is what I used to build this site <span role="img" aria-label="Smiling Emoji">😃</span>) and technologies like AWS products!
        </p>
        <p>
          Follow me to keep up with what I'm doing on <a href="https://twitter.com/jacobneterer" target="_blank" rel="noopener noreferrer" className="link">Twitter</a> and&nbsp;
          <a href="https://github.com/jneterer" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>, get in contact with me through&nbsp;
          <a href="mailto:jacobrneterer@gmail.com" rel="noopener noreferrer" className="link">Email</a>, or join my email notificaition list 
          by <a href="" rel="noopener noreferrer" className="link">Subscribing</a> to get email updates from me directly!
        </p>
      </div>
    </div>
  );
}

export default Hero;
