import React from 'react';
import './Header.scss';

class Header extends React.Component {
  componentDidMount() {
    // Getting access to our main content nad subheader divs.
    let mainContent = document.getElementById('mainContent');
    let subHeaderRef = document.getElementById('subHeader');
    let sticky = subHeaderRef?.offsetTop;
    // When the user scrolls...
    window.onscroll = () => {
      // Only perform the following if those elements exist.
      if (mainContent && subHeaderRef && sticky) {
        // If the offset is greater than the subheader offset, add the sticky class to the
        // subheader and the sticky main content to the main content.
        if (window.pageYOffset > sticky) {
          subHeaderRef.classList.add('sticky');
          mainContent.classList.add('sticky-main-content');
        } else {
          // Otherwise remove those two classes.
          subHeaderRef.classList.remove('sticky');
          mainContent.classList.remove('sticky-main-content');
        }
      }
    };
  }
  
  render() {
    return (
      <div id="header" className="header-container">
        <div className="header">
          <h1>Hi, I'm Jacob Neterer</h1>
        </div>
        <div id="subHeader" className="sub-header">
          <p>Developer | Husband | Believer</p>
        </div>
      </div>
    );
  }
}

export default Header;