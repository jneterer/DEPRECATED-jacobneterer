import React from 'react';

const WhatIKnow: React.FC = () => {
  return (
    <div className="container">
      <h2 className="section-header">What I Know <span role="img" aria-label="Fire Emoji">🔥</span></h2>
      <p className="section-message">
        I've been working as a full stack web developer for almost 2 years with technologies like:
      </p>
      <ul>
        <li>Angular 4+ (which includes Angular Universal, Angular Material, HTML5, CSS and SASS, Javascript and Typescript, and JQuery) - single page application framework </li>
        <li>Node.js - framework for server-side and networking applications</li>
        <li>GIT and SVN (Tortoise SVN, Visual SVN, Github, Atlassian Products like Jira, Confluence and Bitbucket, and much more) - version control</li>
        <li>Okta - user identity management (Single Sign On or SSO)</li>
        <li>Oracle ATG Commerce (eCommerce solutions like BCC and ENDECA) - retail management system</li>
        <li>MongoDB - document-oriented database management system</li>
        <li>Firebase Services like Firebase Realtime Database and Hosting</li>
        <li>Netlify - website hosting service</li>
        <li>AWS Lightsail - website hosting service</li>
        <li>Heroku - website hosting service</li>
        <li>MySQL - relational database management system</li>
        <li>PostgreSQL - object-relational database management system</li>
      </ul>
    </div>
  );
}

export default WhatIKnow;
