import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="container footer-content">
        <h3 className="stay-connected-message">Stay connected with me!</h3>
        <div>
          <a href="https://twitter.com/jacobneterer" className="social-icon" target="_blank" rel="noopener noreferrer"><TwitterIcon fontSize="large"></TwitterIcon></a>
          <a href="https://github.com/jneterer" className="social-icon" target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large"></GitHubIcon></a>
          <a href="mailto:contact@jacobneterer.com" className="social-icon" rel="noopener noreferrer"><EmailIcon fontSize="large"></EmailIcon></a>
        </div>
        <p className="copywrite">Copywrite &#169; 2020 - Jacob Neterer</p>
      </div>
    </div>
  );
}

export default Footer;
