import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
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
        <h2 className="hero-title">I'm a Full Stack Developer!</h2>
        <p className="hero-message">
          I've been building web apps since my Junior year of college (September 2017) and I love building Full
          Stack JavaScript web apps. Lately I've been focusing on expanding my knowledge of front end frameworks
          like React (which is what I used to build this site &#128515;) and other technology like AWS products!
        </p>
        <p>
          Follow me to keep up with what I'm doing on <a href="https://twitter.com/jacobneterer" target="_blank" className="link">Twitter</a> or&nbsp;
          <a href="https://github.com/jneterer" target="_blank" className="link">GitHub</a> or get in contact with me through&nbsp;
          <a href="mailto:jacobrneterer@gmail.com" className="link">Email</a>!
        </p>
      </div>
    </div>
  );
}

export default Hero;
