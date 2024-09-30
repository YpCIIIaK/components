import React from "react";

const Checkbox = () => {
  return (
    <div className="flex justify-center my-10 bg-sliderBgColor-500">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="checkbox"
          className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded-md focus:ring-blue-500 transition duration-300 ease-in-out"
        />
        <label
          htmlFor="checkbox"
          className="ml-2 text-sm text-gray-600"
        >
          I agree to the terms and conditions
        </label>
      </div>
    </div>
  );
};

export default Checkbox;