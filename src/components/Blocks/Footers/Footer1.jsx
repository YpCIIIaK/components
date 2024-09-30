import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-200 h-screen md:h-auto py-12 px-4 md:px-6 lg:px-12">
      <div className="container mx-auto p-4 md:p-6 lg:p-12">
        <div className="flex flex-wrap justify-center mb-4">
          <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer"  className="mx-2">

            <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" />
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedinprofile/" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0072b1" />
          </a>
          <a href="https://www.facebook.com/yourfacebookpage/" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#3b5998" />
          </a>
          <a href="https://www.instagram.com/yourinstagramhandle/" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#e1306c" />
          </a>
        </div>
        <p className="text-sm text-gray-600 text-center mb-4">
          &copy; 2023 jnsckjanckj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;