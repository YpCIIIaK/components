import React from 'react';
import { FaReact, FaLaptopCode, FaRocket } from 'react-icons/fa';

const AboutMeAlt = () => {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-purple-600 text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-4 mb-8">
          <FaRocket className="text-[36px]" />
          <h2 className="text-5xl font-bold mb-2">
            About Me
          </h2>
          <FaLaptopCode className="text-[40px]" />
        </div>
        
        <div className="relative mt-10 mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg shadow-lg transform rotate-6"></div>
          <div className="relative bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <p className="text-lg leading-relaxed">
              Hi there! I'm a dedicated and passionate beginner <span className='font-bold'>React front-end developer</span>. My coding journey began 
              with a fascination for how <span className='font-bold text-[#295c86]'>websites</span> are built and evolved into a 
              full-blown passion for creating immersive digital experiences.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              I love working with <span className='text-[#6699CC] font-bold'>React</span> and <span className='font-bold text-[#3ea875]'>Tailwind CSS</span> to craft user interfaces that are not only visually appealing but also highly 
              accessible. My goal is to constantly grow as a developer by learning new technologies and contributing to meaningful projects.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-6">
            <FaReact className="text-6xl animate-spin-slow text-blue-300" />
        </div>
      </div>
    </section>
  );
};

export default AboutMeAlt;
