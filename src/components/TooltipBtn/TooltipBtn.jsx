import React, { useState } from 'react';

const TooltipBtn = ({ tooltipText, children, tooltipPosition }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const toggleTooltip = () => {
        setIsTooltipVisible((prevVisible) => !prevVisible);
    };

    const showTooltip = () => setIsTooltipVisible(true);
    const hideTooltip = () => setIsTooltipVisible(false);

    return (
        <div>
            <div className="relative flex flex-col items-center my-5 bg-sliderBgColor-500">
                <button
                    className="p-2 bg-blue-600 text-white rounded"
                    onMouseEnter={tooltipPosition === 'hover' ? showTooltip : null}
                    onMouseLeave={tooltipPosition === 'hover' ? hideTooltip : null}
                    onClick={tooltipPosition === 'click' ? toggleTooltip : null}
                >
                    {children}
                </button>
                {isTooltipVisible && (
                    <div className="absolute bottom-full mb-2 p-2 bg-gray-800 text-white text-sm rounded shadow-lg">
                        {tooltipText}
                    </div>
                )}
            </div>
        </div>
    );
};
export default TooltipBtn;