import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Connect2 = () => {
  return (
    <div className="my-20 max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Connect with me on social media!</h2>
      <ul className="flex justify-center mb-4">
          <li className="mr-4">
            <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className='text-4xl text-[#465fce]' />
            </a>
          </li>
          <li className="mr-4">
            <a href="https://www.linkedin.com/in/yourlinkedinprofile/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className='text-4xl text-[#465fce]'/>
            </a>
          </li>
          <li className="mr-4">
            <a href="https://www.facebook.com/yourfacebookpage/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className='text-4xl text-[#465fce]'/>
            </a>
          </li>
          <li className="mr-4">
            <a href="https://www.instagram.com/yourinstagramhandle/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className='text-4xl text-[#465fce]'/>
            </a>
          </li>
        </ul>
    </div>
  );
};

export default Connect2;