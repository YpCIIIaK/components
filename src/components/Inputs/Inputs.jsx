import React from 'react';

const Input = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="w-full bg-sliderBgColor-500 p-5 flex flex-col items-center justify-center">
      <div className="m-5">
        <label className="text-white text-sm block" htmlFor={`${label}-1`}>
          {label}
        </label>
        <input
          type={type}
          id={`${label}-1`}
          className="w-[400px] h-[50px] bg-gray-500 p-4 rounded-lg focus:outline-none placeholder-gray-200  "
          placeholder="Search..."
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="m-5">
        <label className="text-white text-sm block" htmlFor={`${label}-3`}>
          {label}
        </label>
        <input
          type="email"
          name='email'
          id={`${label}-3`}
          className="w-[350px] h-[40px] bg-gray-600 p-4 rounded-md focus:outline-none placeholder-gray-300"
          placeholder="Enter your email"
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="m-5">
        <label className="text-white text-sm block" htmlFor={`${label}-4`}>
          {label}
        </label>
        <input
          type="text"
            name="name"
          id={`${label}-4`}
          className="w-[250px] h-[40px] bg-gray-600 p-4 rounded-md focus:outline-none placeholder-gray-300"
          placeholder="Login"
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="m-5">
        <label className="text-white text-sm block" htmlFor={`${label}-4`}>
          {label}
        </label>
        <input
          type="password"
          id={`${label}-4`}
          className="w-[200px] h-[40px] bg-gray-600 p-4 rounded-md focus:outline-none placeholder-gray-300"
          placeholder="Enter your password"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
