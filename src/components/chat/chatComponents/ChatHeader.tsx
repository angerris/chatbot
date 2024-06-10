import Image from "next/image";
import React from "react";

const ChatHeader = () => {
  return (
    <div className="flex justify-between w-full h-16 p-5 items-center border-b border-gray-700 bg-blue-500 rounded flex-row">
      <div className="flex items-center gap-3">
        <Image src="/img/avatar.png" alt="" width={50} height={50} />
        <h4 className="font-bold text-lg">Chatbot</h4>
      </div>
      <div className="burgerMenu">
        <svg
          className="h-8 w-8 text-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default ChatHeader;
