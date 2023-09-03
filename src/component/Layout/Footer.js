import React from 'react';
import './Footer.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="footer-container"> {/* Add the CSS class to your container */}
      <div className='f-text'>Generics</div>
      <div className="f-link">
        <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
        
      </div>
    </div>
  );
}
