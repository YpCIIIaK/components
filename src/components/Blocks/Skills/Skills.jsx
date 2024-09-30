import React from 'react';
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaSmile } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    {
      icon: <FaReact className="text-[#61DAFB]" />,
      title: 'React',
      description: 'A powerful JavaScript library for building user interfaces. I use React to create dynamic and responsive web applications that offer a seamless user experience.',
    },
    {
      icon: <FaJsSquare className="text-[#F7DF1E]" />,
      title: 'JavaScript',
      description: 'The backbone of web development. JavaScript allows me to bring interactivity and functionality to the websites I build, making them more engaging and user-friendly.',
    },
    {
      icon: <SiTailwindcss className="text-[#38B2AC]" />,
      title: 'Tailwind CSS',
      description: 'A utility-first CSS framework that lets me design custom user interfaces quickly and efficiently, with minimal CSS code and maximum creativity.',
    },
    {
      icon: <FaCss3Alt className="text-[#2965F1]" />,
      title: 'CSS',
      description: 'The foundation of web design. I use CSS to style and layout my web pages, ensuring they are visually appealing and work well across different devices.',
    },
    {
      icon: <FaHtml5 className="text-[#E44D26]" />,
      title: 'HTML',
      description: 'The structural backbone of the web. HTML allows me to structure content in a meaningful and accessible way, ensuring that websites are easy to navigate and understand.',
    },
    {
      icon: <FaSmile className="text-[120px] text-yellow-400 mt-24 animate-rocking" />,
      title: '',
      description: '',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-500 to-purple-600 text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`relative p-8 ${
                index === skills.length - 1
                  ? 'bg-transparent shadow-none'
                  : 'bg-gradient-to-r from-yellow-400 to-red-500 shadow-lg'
              } text-gray-900 rounded-lg`}
            >
              <div
                className={`absolute inset-0 ${
                  index === skills.length - 1
                    ? 'bg-transparent shadow-none'
                    : 'bg-white shadow-lg'
                } rounded-lg transform rotate-6`}
              ></div>
              <div className="relative flex flex-col items-center">
                <div className="text-6xl mb-4">{skill.icon}</div>
                {skill.title && <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>}
                {skill.description && <p className="text-lg leading-relaxed">{skill.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
