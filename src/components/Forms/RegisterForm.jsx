import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="flex items-center justify-center bg-sliderBgColor-500">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-white text-center text-xl font-semibold mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Login"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
