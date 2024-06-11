import Image from "next/image";
import React from "react";

interface ChatHeaderProps {
  onBurgerMenuClick: () => void;
  isOpen: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  onBurgerMenuClick,
  isOpen
}) => {
  return (
    <div className="flex justify-between w-full h-16 p-5 items-center border-b border-gray-700 bg-blue-500 rounded flex-row">
      <div className="flex items-center gap-3">
        <Image src="/img/avatar.png" alt="" width={50} height={50} />
        <h4 className="font-bold text-lg">Chatbot</h4>
      </div>
      <div className="burgerMenu cursor-pointer" onClick={onBurgerMenuClick}>
        {isOpen ? (
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
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            className="h-8 w-8 text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
