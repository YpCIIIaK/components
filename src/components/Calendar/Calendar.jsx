import React, { useState } from 'react';
import {
    format, startOfMonth, endOfMonth, startOfWeek, endOfWeek,
    eachDayOfInterval, isToday, isSameMonth, isSameDay, getMonth, getYear
} from 'date-fns';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const years = Array.from({ length: 101 }, (_, i) => i + (getYear(new Date()) - 50));

    const handleMonthChange = (e) => {
        const newMonth = parseInt(e.target.value);
        const updatedDate = new Date(getYear(currentDate), newMonth, 1);
        setCurrentDate(updatedDate);
    };

    const handleYearChange = (e) => {
        const newYear = parseInt(e.target.value);
        const updatedDate = new Date(newYear, getMonth(currentDate), 1);
        setCurrentDate(updatedDate);
    };

    const handleDayClick = (day) => {
        setSelectedDate(day);
    };

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const startDate = startOfMonth(currentDate);
    const endDate = endOfMonth(currentDate);
    const startWeekDate = startOfWeek(startDate);
    const endWeekDate = endOfWeek(endDate);
    const days = eachDayOfInterval({ start: startWeekDate, end: endWeekDate });

    return (
        <div className="my-9 bg-sliderBgColor-500">
            <div className="p-4 border rounded shadow-lg max-w-md mx-auto">
                <div className="flex items-center justify-between mb-4">
                    <select
                        value={getMonth(currentDate)}
                        onChange={handleMonthChange}
                        className="text-lg font-bold p-2 border rounded"
                    >
                        {months.map((month, index) => (
                            <option key={index} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>

                    <select
                        value={getYear(currentDate)}
                        onChange={handleYearChange}
                        className="text-lg font-bold p-2 border rounded"
                    >
                        {years.map(year => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center">
                    {daysOfWeek.map(day => (
                        <div key={day} className="font-bold">{day}</div>
                    ))}
                    {days.map(day => (
                        <div
                            key={day}
                            onClick={() => handleDayClick(day)}
                            className={`p-2 rounded cursor-pointer ${
                                isToday(day) ? 'bg-blue-500 text-white' :
                                    isSameMonth(day, currentDate) ? 'bg-gray-100' : 'bg-gray-200'
                            } ${isSameDay(day, selectedDate) ? 'outline outline-2 outline-green-500' : ''} ${isSameDay(day, new Date()) ? 'border-2 border-blue-500' : ''}`}
                        >
                            {day.getDate()}
                        </div>
                    ))}
                </div>

                {selectedDate && (
                    <div className="mt-4 text-center">
                        <p>Вы выбрали: {format(selectedDate, 'dd MMMM yyyy')}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calendar;
