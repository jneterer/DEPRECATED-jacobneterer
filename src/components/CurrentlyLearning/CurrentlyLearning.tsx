import React from 'react';

const CurrentlyLearning: React.FC = () => {
  return (
    <div className="container section">
      <h2 className="section-header">What I'm Learning <span role="img" aria-label="Thinking Emoji">🤔</span></h2>
      <p className="section-message">
        All Things AWS
      </p>
      <ul>
        <li>
          Lightsail - a cloud platform for hosting that is cost effective and quick-to-deploy with a simple terminal interface
        </li>
        <li>
          EC2 - a web service that can also be used for hosting, basically giving you a computer in the cloud
          where you can run your software
        </li>
        <li>
          Other - Reading through <a href="https://gumroad.com/l/aws-good-parts" target="_blank" rel="noopener noreferrer">The Good Parts of AWS</a>&nbsp;
          which goes through all the need-to-know services AWS offers from the perspective of two former AWS employees
        </li>
      </ul>
      <p className="section-message">
        React - a javascript library for creating single page web applications (what I've used to write this website!)
      </p>
    </div>
  );
}

export default CurrentlyLearning;
