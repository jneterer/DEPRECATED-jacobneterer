import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h1>Hi, I'm Jacob Neterer</h1>
      </div>
      <div className="sub-header">
        <p>Developer | Husband | Believer</p>
      </div>
    </div>
  );
}

export default Header;
