import React from 'react';

const NewsBlock = () => {
  const handleClick = (index) => {
    console.log(`Block ${index} clicked!`);
    // логика будущая
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sliderBgColor-500">
      <div className="w-full max-w-4xl px-4">
        <h2 className="text-black text-xl font-semibold mb-6">News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="bg-gray-700 h-40 rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsBlock;