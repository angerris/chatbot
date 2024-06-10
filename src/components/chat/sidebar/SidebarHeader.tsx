import React from "react";

const SidebarHeader = () => {
  return (
    <div className="flex justify-between w-full h-16 p-5 items-center border-b border-gray-700 bg-blue-500 rounded">
      <h4 className="font-bold text-lg">Conversations</h4>
      <div className="cursor-pointer">
        <svg
          className="h-8 w-8 text-gray-200"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
    </div>
  );
};

export default SidebarHeader;
