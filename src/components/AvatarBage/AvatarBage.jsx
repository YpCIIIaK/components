import React from "react";

const AvatarWithBadge = ({ imageUrl, badgeContent }) => {
    return (
        <div className="py-7 flex justify-center bg-sliderBgColor-500">
            <div className="relative inline-block">
                <img
                    src={imageUrl}
                    alt="Avatar"
                    className="w-16 h-16 rounded-full object-cover"/>
                <span
                    className={`absolute top-0 right-0 block w-4 h-4 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 text-white text-xs flex items-center justify-center`}>
        {badgeContent}
      </span>
            </div>
        </div>
    );
};

export default AvatarWithBadge;
