import React from "react";
import classNames from "classnames";

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex h-fit justify-start">
      <div
        className={classNames(
          "max-w-xs md:max-w-md lg:max-w-lg p-3 m-2 rounded-lg bg-gray-300 text-gray-900"
        )}
      >
        <div className="flex items-center">
          <div className="animate-pulse flex space-x-1">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
