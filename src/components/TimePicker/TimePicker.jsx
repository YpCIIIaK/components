import React, { useState } from "react";

const TimePicker = () => {
  const [time, setTime] = useState("12:00");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="time-picker" className="text-sm font-medium text-gray-700">
        Select Time:
      </label>
      <input
        id="time-picker"
        type="time"
        value={time}
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
      />
    </div>
  );
};

export default TimePicker;
