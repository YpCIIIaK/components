import React from 'react';
import { FaReact, FaCode, FaArrowRight } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          About Me
        </h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
        
        <div className="flex justify-center space-x-4 mb-6">
          <FaReact className="text-5xl text-blue-500 animate-spin-slow" />
          <FaCode className="text-5xl text-gray-700" />
        </div>
 
        <p className="text-lg text-gray-800 leading-relaxed">
          Hello! I'm a passionate beginner React front-end developer with a love for creating dynamic and interactive web experiences. 
          My journey in web development started with a curiosity for how things work on the web, and it quickly grew into a deep passion 
          for coding. I enjoy learning new technologies and continuously improving my skills.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mt-4">
          My focus is on building clean, efficient, and user-friendly interfaces using React and Tailwind CSS. I'm constantly exploring 
          new ways to enhance user experience and make the web more accessible to everyone. I'm excited to collaborate on projects that 
          challenge me and help me grow as a developer.
        </p>

        <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center mx-auto">
          Let's Connect
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
