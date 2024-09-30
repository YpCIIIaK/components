// Button.js
import React from 'react';

const Button = ({ children, styleType }) => {
  const baseStyles = 'rounded-lg text-center font-medium py-2 px-4 m-2 transition-all';

  const styleTypes = {
    purple: 'bg-purple-600 text-white hover:bg-purple-700',
    purpleOutline: 'bg-transparent text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white',
    green: 'bg-green-400 text-white hover:bg-green-500',
    greenOutline: 'bg-transparent text-green-400 border border-green-400 hover:bg-green-400 hover:text-white',
    beige: 'bg-beige-500 text-white hover:bg-beige-600',
    beigeOutline: 'bg-transparent text-beige-500 border border-beige-500 hover:bg-beige-500 hover:text-white',
    yellow: 'bg-yellow-200 text-purple-700 hover:bg-yellow-300',
    yellowOutline: 'bg-transparent text-yellow-200 border border-yellow-200 hover:bg-yellow-200 hover:text-purple-700'
  };

  return (
    <button className={`${baseStyles} ${styleTypes[styleType]}`}>
      {children}
    </button>
  );
};

export default Button;
